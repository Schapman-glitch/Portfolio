// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => ({}));

    const name = String(data.name ?? '').trim();
    const email = String(data.email ?? '').trim();
    const subject = String(data.subject ?? 'New portfolio message').trim();
    const message = String(data.message ?? '').trim();

    if (!name || !email || !message) {
      console.warn('Contact: missing fields', { name, email, hasMessage: !!message });
      return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 });
    }

    const key = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM ?? 'Portfolio <onboarding@resend.dev>';
    const to = process.env.RESEND_TO ?? 'dashm4n@gmail.com';

    console.log('Contact: attempting email', { to, from, subject, hasKey: !!key });

    if (!key) {
      console.warn('Contact: RESEND_API_KEY missing — skipping email send');
      return NextResponse.json({ ok: true, skippedEmail: true }, { status: 200 });
    }

    // Lazy import so module load doesn't crash during build
    const { Resend } = await import('resend');
    const resend = new Resend(key);

    const res = await resend.emails.send({
      from,
      to,                        // string or string[]
      subject,
      replyTo: email,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Subject: ${subject}\n\n` +
        `${message}`,
    });

    console.log('Contact: resend result', { id: (res as any)?.id, error: (res as any)?.error });
    if ((res as any)?.error) {
      return NextResponse.json({ ok: false, error: (res as any).error?.message ?? 'Resend error' }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.error('Contact: exception', err?.message ?? err);
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}

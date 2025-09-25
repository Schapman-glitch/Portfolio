import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

function toContactPayload(raw: unknown): ContactPayload | null {
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as Record<string, unknown>;

  const name = typeof obj.name === "string" ? obj.name.trim() : "";
  const email = typeof obj.email === "string" ? obj.email.trim() : "";
  const subject =
    typeof obj.subject === "string"
      ? obj.subject.trim()
      : "New portfolio message";
  const message = typeof obj.message === "string" ? obj.message.trim() : "";

  if (!name || !email || !message) return null;
  return { name, email, subject, message };
}

export async function POST(req: Request): Promise<Response> {
  try {
    const raw = await req.json().catch(() => null);
    const data = toContactPayload(raw);
    if (!data) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const key = process.env.RESEND_API_KEY;
    const from =
      process.env.RESEND_FROM ?? "Portfolio <onboarding@resend.dev>";
    const to = process.env.RESEND_TO ?? "dashm4n@gmail.com";

    if (!key) {
      console.warn("RESEND_API_KEY missing — skipping email send");
      return new Response(
        JSON.stringify({ ok: true, skippedEmail: true }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(key);
    const result = await resend.emails.send({
      from,
      to,
      subject: data.subject ?? "New portfolio message",
      replyTo: data.email,
      text: `Name: ${data.name}\nEmail: ${data.email}\nSubject: ${data.subject}\n\n${data.message}`,
    });

    if (result.error) {
      return new Response(
        JSON.stringify({
          ok: false,
          error: result.error.message ?? "Resend error",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, id: result.data?.id ?? null }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Contact: exception", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

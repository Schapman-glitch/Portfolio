'use client';

import { motion } from 'framer-motion';

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center text-gray-900 dark:text-white"
				>
					Full Stack Projects
				</motion.h2>

				<div className="space-y-16">
					{/* Personal Finance Tracker */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg dark:bg-gray-900/50 dark:border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Personal Finance Tracker</h3>
										<p className="text-gray-600 dark:text-gray-400">
											Full-stack app to track expenses, budgets, and monthly summaries with charts and CSV import.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
												<li>• Next.js App Router with React</li>
												<li>• TailwindCSS for responsive UI</li>
												<li>• Chart.js for expense visualizations</li>
												<li>• CSV import and category tagging interface</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
												<li>• Node.js and Express REST API</li>
												<li>• PostgreSQL with Prisma ORM</li>
												<li>• JWT authentication for secure sessions</li>
												<li>• Vercel on frontend and Railway/Render backend</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
											<li>• Helped automate monthly expense tracking and reduced manual bookkeeping by 90%</li>
											<li>• Real-time category summaries and budget alerts improved financial visibility</li>
											<li>• Clean modular architecture makes it easy to expand e.g., adding bank API integration</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6 dark:bg-black/30">
									<h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner dark:bg-black/50">
										{/* Add detailed system architecture diagram here */}
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Client Layer */}
											<g>
												<rect
													x="20"
													y="20"
													width="360"
													height="40"
													rx="4"
													className="fill-blue-100 stroke-blue-400 dark:fill-blue-500/20 dark:stroke-blue-500"
													strokeWidth="1"
												/>
												<text x="200" y="45" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													Next.js Frontend (App Router + Client Components)
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect
													x="20"
													y="80"
													width="170"
													height="40"
													rx="4"
													className="fill-purple-100 stroke-purple-400 dark:fill-purple-500/20 dark:stroke-purple-500"
													strokeWidth="1"
												/>
												<rect
													x="210"
													y="80"
													width="170"
													height="40"
													rx="4"
													className="fill-purple-100 stroke-purple-400 dark:fill-purple-500/20 dark:stroke-purple-500"
													strokeWidth="1"
												/>
												<text x="105" y="105" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													Transactions Service
												</text>
												<text x="295" y="105" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													Budgets Service
												</text>
											</g>

											{/* Cache Layer */}
											<g>
												<rect
													x="20"
													y="140"
													width="360"
													height="30"
													rx="4"
													className="fill-teal-100 stroke-teal-400 dark:fill-teal-500/20 dark:stroke-teal-500"
													strokeWidth="1"
												/>
												<text x="200" y="160" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													Redis Cache Layer
												</text>
											</g>

											{/* Database Layer */}
											<g>
												<rect
													x="20"
													y="190"
													width="170"
													height="40"
													rx="4"
													className="fill-blue-100 stroke-blue-400 dark:fill-blue-500/20 dark:stroke-blue-500"
													strokeWidth="1"
												/>
												<rect
													x="210"
													y="190"
													width="170"
													height="40"
													rx="4"
													className="fill-purple-100 stroke-purple-400 dark:fill-purple-500/20 dark:stroke-purple-500"
													strokeWidth="1"
												/>
												<text x="105" y="215" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													PostgreSQL Database
												</text>
												<text x="295" y="215" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													Object Storage
												</text>
											</g>

											{/* Search Layer */}
											<g>
												<rect
													x="20"
													y="250"
													width="360"
													height="30"
													rx="4"
													className="fill-teal-100 stroke-teal-400 dark:fill-teal-500/20 dark:stroke-teal-500"
													strokeWidth="1"
												/>
												<text x="200" y="270" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													JWT Authentication Service
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="1">
												<line x1="200" y1="60" x2="200" y2="80" />
												<line x1="105" y1="120" x2="105" y2="140" />
												<line x1="295" y1="120" x2="295" y2="140" />
												<line x1="105" y1="170" x2="105" y2="190" />
												<line x1="295" y1="170" x2="295" y2="190" />
												<line x1="200" y1="230" x2="200" y2="250" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* AI learning Recommender System */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg dark:bg-gray-900/50 dark:border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AI Learning Recommender System</h3>
										<p className="text-gray-600 dark:text-gray-400">
											An AI learning recommender that displays learning progress with recommendations and analytics
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
												<li>• Nexts.js dashboard</li>
												<li>• TailwindCSS</li>
												<li>• Interactive UI</li>
												<li>• Data analytics</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">Backend Pipeline</h4>
											<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
												<li>• Fast API</li>
												<li>• Recommendation Engine</li>
												<li>• PostgreSQL</li>
												<li>• Vector Database</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-600 dark:text-teal-400">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
											<li>• Delivered 85% accurate recommendations compared to curated sets.</li>
											<li>• Dynamic progress tracking adjusts recommendations over time.</li>
											<li>• Scalable design: services are containerized for easy deployment.</li>
										</ul>
									</div>
								</div>

								<div className="bg-gray-50 rounded-xl p-6 dark:bg-black/30">
									<h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-4">Data Flow Architecture</h4>
									<div className="aspect-[4/3] bg-white rounded-lg p-4 shadow-inner dark:bg-black/50">
										<svg className="w-full h-full" viewBox="0 0 400 300">
											{/* Data Sources */}
											<g>
												<rect
													x="20"
													y="20"
													width="110"
													height="30"
													rx="4"
													className="fill-blue-100 stroke-blue-400 dark:fill-blue-500/20 dark:stroke-blue-500"
													strokeWidth="1"
												/>
												<rect
													x="145"
													y="20"
													width="110"
													height="30"
													rx="4"
													className="fill-blue-100 stroke-blue-400 dark:fill-blue-500/20 dark:stroke-blue-500"
													strokeWidth="1"
												/>
												<rect
													x="270"
													y="20"
													width="110"
													height="30"
													rx="4"
													className="fill-blue-100 stroke-blue-400 dark:fill-blue-500/20 dark:stroke-blue-500"
													strokeWidth="1"
												/>
												<text x="75" y="40" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													Learning Content 
												</text>
												<text x="200" y="40" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													User Signals
												</text>
												<text x="325" y="40" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													Taxonomies
												</text>
											</g>

											{/* Event Processing */}
											<g>
												<rect
													x="20"
													y="80"
													width="360"
													height="40"
													rx="4"
													className="fill-purple-100 stroke-purple-400 dark:fill-purple-500/20 dark:stroke-purple-500"
													strokeWidth="1"
												/>
												<text x="200" y="105" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													Recommendation Engine
												</text>
											</g>

											{/* Processing Layer */}
											<g>
												<rect
													x="20"
													y="150"
													width="170"
													height="40"
													rx="4"
													className="fill-teal-100 stroke-teal-400 dark:fill-teal-500/20 dark:stroke-teal-500"
													strokeWidth="1"
												/>
												<rect
													x="210"
													y="150"
													width="170"
													height="40"
													rx="4"
													className="fill-teal-100 stroke-teal-400 dark:fill-teal-500/20 dark:stroke-teal-500"
													strokeWidth="1"
												/>
												<text x="105" y="175" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													St
												</text>
												<text x="295" y="175" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													Progress Tracking
												</text>
											</g>

											{/* Storage Layer */}
											<g>
												<rect
													x="20"
													y="220"
													width="170"
													height="30"
													rx="4"
													className="fill-blue-100 stroke-blue-400 dark:fill-blue-500/20 dark:stroke-blue-500"
													strokeWidth="1"
												/>
												<rect
													x="210"
													y="220"
													width="170"
													height="30"
													rx="4"
													className="fill-purple-100 stroke-purple-400 dark:fill-purple-500/20 dark:stroke-purple-500"
													strokeWidth="1"
												/>
												<text x="105" y="240" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													Vector Store
												</text>
												<text x="295" y="240" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													PostgreSQL
												</text>
											</g>

											{/* API Layer */}
											<g>
												<rect
													x="20"
													y="270"
													width="360"
													height="30"
													rx="4"
													className="fill-teal-100 stroke-teal-400 dark:fill-teal-500/20 dark:stroke-teal-500"
													strokeWidth="1"
												/>
												<text x="200" y="290" textAnchor="middle" className="fill-gray-600 dark:fill-gray-400 text-[12px]">
													Custom API Layer
												</text>
											</g>

											{/* Connection Lines */}
											<g className="stroke-gray-400 dark:stroke-gray-600" strokeWidth="1">
												<line x1="75" y1="50" x2="75" y2="80" />
												<line x1="200" y1="50" x2="200" y2="80" />
												<line x1="325" y1="50" x2="325" y2="80" />
												<line x1="200" y1="120" x2="200" y2="150" />
												<line x1="105" y1="190" x2="105" y2="220" />
												<line x1="295" y1="190" x2="295" y2="220" />
												<line x1="200" y1="250" x2="200" y2="270" />
											</g>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

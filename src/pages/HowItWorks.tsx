import { Link } from 'react-router-dom';
import { ArrowRight, Target, Brain, TrendingUp, BarChart3, Zap, Lock } from 'lucide-react';
import { AnimatedSection, ContactForm } from '../components/UI';

export default function HowItWorks() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-wide relative pt-32 pb-20 md:pt-40 md:pb-28">
          <AnimatedSection className="max-w-3xl">
            <p className="section-label !text-accent-300 mb-4">The Process</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              How NuCoach Works
            </h1>
            <p className="text-lg md:text-xl text-navy-200 leading-relaxed max-w-2xl">
              A three-phase approach that turns coaching from a cost center into a measurable growth engine
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Step 1: Assess */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-accent">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="section-label mb-2">Phase 1</p>
                  <h2 className="section-title mb-4">Assess</h2>
                  <p className="text-lg text-navy-600 mb-6">
                    AI-driven skill assessments identify each person's strengths and gaps across leadership, sales, and communication competencies.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Competency Frameworks</h4>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      Customizable frameworks aligned to your organization's role expectations and industry standards.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Multi-Source Assessment</h4>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      Self-assessments, 360-degree feedback, and AI-powered scenario evaluations create a holistic view of capability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Benchmark Against Role</h4>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      See exactly how each person's capabilities stack up against role expectations and organizational benchmarks.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="card-dark p-8">
                <p className="text-sm font-semibold text-accent-400 uppercase tracking-wide mb-4">Assessment Dashboard</p>
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-navy-200">Leadership</span>
                      <span className="text-sm text-accent-300">72%</span>
                    </div>
                    <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
                      <div className="h-full bg-accent-500" style={{ width: '72%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-navy-200">Communication</span>
                      <span className="text-sm text-accent-300">58%</span>
                    </div>
                    <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500" style={{ width: '58%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-navy-200">Emotional Intelligence</span>
                      <span className="text-sm text-accent-300">81%</span>
                    </div>
                    <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
                      <div className="h-full bg-accent-500" style={{ width: '81%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-navy-200">Negotiation</span>
                      <span className="text-sm text-accent-300">45%</span>
                    </div>
                    <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500" style={{ width: '45%' }} />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-navy-600">
                    <p className="text-xs text-navy-400 mb-3">Top Development Areas</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-orange-500" />
                        <span className="text-sm text-navy-300">Negotiation skills</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-teal-500" />
                        <span className="text-sm text-navy-300">Active listening</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Step 2: Analyze */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={100} className="md:order-2">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-accent">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="section-label mb-2">Phase 2</p>
                  <h2 className="section-title mb-4">Analyze</h2>
                  <p className="text-lg text-navy-600 mb-6">
                    Machine learning maps skill trajectories, benchmarks against role expectations, and recommends personalized development paths.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Skill Gap Heatmaps</h4>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      Visualize skill gaps across teams, departments, and your entire organization to prioritize coaching investments.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Personalized Recommendations</h4>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      AI determines the most efficient development path for each person, considering learning style, pace, and role trajectory.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Cohort Benchmarking</h4>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      See how individual and team capability compares to similar roles, industries, and organizations.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="md:order-1">
              <div className="card-dark p-8">
                <p className="text-sm font-semibold text-accent-400 uppercase tracking-wide mb-4">Analytics Engine</p>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-navy-200">Your Role vs. Benchmark</span>
                    </div>
                    <div className="flex items-end gap-2 h-24">
                      <div className="flex-1 bg-gradient-to-t from-accent-500 to-accent-400 rounded-lg opacity-70" style={{ height: '60%' }} />
                      <div className="flex-1 bg-gradient-to-t from-accent-500 to-accent-400 rounded-lg opacity-70" style={{ height: '75%' }} />
                      <div className="flex-1 bg-teal-500 rounded-lg" style={{ height: '85%' }} />
                      <div className="flex-1 bg-orange-500 rounded-lg opacity-50" style={{ height: '45%' }} />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-navy-400">
                      <span>Leadership</span>
                      <span>Sales</span>
                      <span>Communication</span>
                      <span>Strategy</span>
                    </div>
                  </div>
                  <div className="bg-navy-700 rounded-lg p-4">
                    <p className="text-xs text-navy-400 mb-3">Recommended Next Steps</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal-500 mt-1 flex-shrink-0" />
                        <span className="text-sm text-navy-200">Start: Strategic thinking course</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-navy-200">Then: Negotiate complex deals (AI practice)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-navy-200">Measure: Monthly skill assessments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Step 3: Grow */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-accent">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="section-label mb-2">Phase 3</p>
                  <h2 className="section-title mb-4">Grow</h2>
                  <p className="text-lg text-navy-600 mb-6">
                    Learners practice with adaptive AI roleplay, receive real-time coaching feedback, and build lasting capability through deliberate repetition.
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Realistic AI Personas</h4>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      Industry-specific, role-appropriate AI personas that respond naturally to different conversation styles and objections.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Real-Time Coaching Feedback</h4>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      After each practice session, learners receive immediate feedback on tone, technique, clarity, and impact — with specific improvement areas.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2">Deliberate Practice Loops</h4>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      Spaced repetition and progressive difficulty ensure muscle memory builds and skill transfer actually sticks.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="card-dark p-8">
                <p className="text-sm font-semibold text-accent-400 uppercase tracking-wide mb-4">Growth Tracker</p>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-navy-200">Your Growth Score</span>
                      <span className="text-2xl font-bold gradient-text">73</span>
                    </div>
                    <p className="text-xs text-navy-400">+18 points since last week</p>
                  </div>
                  <div className="bg-navy-700 rounded-lg p-4">
                    <p className="text-xs text-navy-400 mb-3 uppercase tracking-wide font-semibold">Recent Sessions</p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-teal-400">✓</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-navy-200 font-medium">Difficult conversation roleplay</p>
                          <p className="text-xs text-navy-400">Today at 2:15 PM</p>
                        </div>
                        <span className="text-xs font-bold text-teal-400 flex-shrink-0">85%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-accent-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-accent-400">✓</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-navy-200 font-medium">Sales negotiation scenario</p>
                          <p className="text-xs text-navy-400">Yesterday at 10:30 AM</p>
                        </div>
                        <span className="text-xs font-bold text-accent-400 flex-shrink-0">72%</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-xs font-bold text-orange-400">✓</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-navy-200 font-medium">Feedback delivery practice</p>
                          <p className="text-xs text-navy-400">2 days ago</p>
                        </div>
                        <span className="text-xs font-bold text-orange-400 flex-shrink-0">68%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-navy-400">
                    <Lock className="w-4 h-4" />
                    <span>Next recommended session unlocks tomorrow</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why NuCoach Works */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">The Difference</p>
            <h2 className="section-title mb-4">Why NuCoach Works</h2>
            <p className="section-subtitle mx-auto">Unlike passive e-learning or occasional coaching, NuCoach drives capability through active, deliberate practice with immediate feedback.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: 'Measurable Outcomes',
                description: 'Track skill growth with quantified assessments, not just attendance. See ROI in real data.',
              },
              {
                icon: Zap,
                title: 'Adaptive Learning',
                description: 'Each person gets a personalized journey. Difficulty increases as capability grows.',
              },
              {
                icon: TrendingUp,
                title: 'Lasting Capability',
                description: 'Spaced repetition and deliberate practice create long-term skill retention, not short-term knowledge.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(33,134,235,0.2),_transparent_50%)]" />
        <div className="container-wide relative py-20 md:py-28 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Experience the NuCoach difference
            </h2>
            <p className="text-lg text-navy-200 mb-8 max-w-xl mx-auto">
              See how the three-phase approach transforms coaching from a cost center into measurable capability growth.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo" className="btn-primary text-base">
                Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/pilot" className="btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20">
                Start a Pilot
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Demo Form */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-3">Get Started Today</h2>
            <p className="text-navy-600">Tell us a bit about your organization and we'll set up a personalized walkthrough.</p>
          </AnimatedSection>
          <AnimatedSection className="bg-navy-50 rounded-2xl p-8 md:p-12">
            <ContactForm formType="demo" />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight, Award, Briefcase, Globe } from 'lucide-react';
import { AnimatedSection, StatCounter, LogoStrip, ContactForm } from '../components/UI';

export default function ResultsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-wide relative pt-32 pb-20 md:pt-40 md:pb-28">
          <AnimatedSection className="max-w-3xl">
            <p className="section-label !text-accent-300 mb-4">Proof</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              Measurable Results
            </h1>
            <p className="text-lg md:text-xl text-navy-200 leading-relaxed max-w-2xl">
              Quantified outcomes, not attendance metrics
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Row */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <StatCounter end={50} suffix="+" label="Organizations served" />
              <StatCounter end={100} suffix="K+" label="Learners on the platform" />
              <StatCounter end={60} suffix="+" label="Countries reached" />
              <StatCounter end={85} suffix="%" label="Skill adoption rate" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-navy-50 border-b border-navy-100">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-8">
            <p className="text-navy-600 text-sm mb-6">
              Built on NuVeda's CALF&trade; platform — enterprise-grade technology trusted across industries and geographies
            </p>
            <LogoStrip />
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">Impact</p>
            <h2 className="section-title mb-4">How Organizations Are Using NuCoach</h2>
            <p className="section-subtitle mx-auto">Real results from real organizations across industries.</p>
          </AnimatedSection>

          <div className="space-y-12">
            {/* Case Study 1 */}
            <AnimatedSection>
              <div className="card-dark p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-6 h-6 text-accent-400" />
                      <h3 className="text-2xl font-bold text-white">Ageas Federal Life Insurance</h3>
                    </div>
                    <p className="text-navy-300 mb-6">
                      <strong>Use Case:</strong> Leadership Development
                    </p>
                    <blockquote className="text-lg italic text-navy-200 mb-6 pl-6 border-l-4 border-accent-500">
                      &ldquo;NuCoach transformed how we develop leaders. The AI roleplay scenarios feel incredibly real, and our managers are now having better conversations from week one. We've seen a 3x improvement in manager readiness timelines.&rdquo;
                    </blockquote>
                    <p className="text-navy-400 text-sm">
                      <strong>— Priya Sharma, Chief People Officer</strong>
                    </p>
                  </div>
                  <div className="bg-gradient-accent rounded-xl p-8 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">3x</div>
                      <p className="text-sm text-white/90">Faster Manager Readiness</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Case Study 2 */}
            <AnimatedSection delay={100}>
              <div className="card-dark p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-6 h-6 text-teal-400" />
                      <h3 className="text-2xl font-bold text-white">Crestcom International</h3>
                    </div>
                    <p className="text-navy-300 mb-6">
                      <strong>Use Case:</strong> Sales Enablement
                    </p>
                    <blockquote className="text-lg italic text-navy-200 mb-6 pl-6 border-l-4 border-teal-500">
                      &ldquo;We reduced new sales rep ramp time by 50% using NuCoach's AI buyer simulations. The quantified skill tracking gives our managers data they never had before — we can see exactly where reps need coaching before they go live.&rdquo;
                    </blockquote>
                    <p className="text-navy-400 text-sm">
                      <strong>— Mark Chen, VP of Sales Enablement</strong>
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-xl p-8 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">50%</div>
                      <p className="text-sm text-white/90">Faster Ramp Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Case Study 3 */}
            <AnimatedSection delay={200}>
              <div className="card-dark p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="w-6 h-6 text-orange-400" />
                      <h3 className="text-2xl font-bold text-white">Global Financial Services Firm</h3>
                    </div>
                    <p className="text-navy-300 mb-6">
                      <strong>Use Case:</strong> Enterprise Capability Building
                    </p>
                    <blockquote className="text-lg italic text-navy-200 mb-6 pl-6 border-l-4 border-orange-500">
                      &ldquo;Deploying NuCoach across our organization delivered a 40% reduction in external coaching spend while actually improving skill adoption rates. The platform's analytics gave us visibility into capability gaps we didn't know existed.&rdquo;
                    </blockquote>
                    <p className="text-navy-400 text-sm">
                      <strong>— Global Financial Services Organization</strong>
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-8 flex flex-col justify-center">
                    <div className="text-center">
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">40%</div>
                      <p className="text-sm text-white/90">Coaching Cost Reduction</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why NuCoach Delivers Results */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">The Methodology</p>
            <h2 className="section-title mb-4">Why NuCoach Delivers Results</h2>
            <p className="section-subtitle mx-auto">A science-backed approach to capability building that actually sticks.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Active Learning, Not Passive Consumption',
                description: 'Learners practice real conversations with AI personas, get immediate feedback, and build muscle memory through repetition. Skill transfer actually happens.',
              },
              {
                title: 'Personalization at Scale',
                description: "Machine learning maps each person's unique gaps and recommends the most efficient development path. No one-size-fits-all approach.",
              },
              {
                title: 'Quantified Outcomes',
                description: 'Pre- and post-assessments, practice session analytics, and behavioral change metrics prove ROI. You see the value in the data.',
                },
              {
                title: 'Built for Enterprise Rigor',
                description: 'SOC 2 Type II compliance, GDPR adherence, SSO/SCIM integration, and configurable data residency. Security and governance built in.',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="card h-full">
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator / Cost Comparison */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">Economics</p>
            <h2 className="section-title mb-4">The Business Case for NuCoach</h2>
            <p className="section-subtitle mx-auto">Compare the cost and impact of NuCoach vs. traditional external coaching and e-learning.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="card">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-navy-100 rounded-full text-sm font-semibold text-navy-900 mb-4">
                    External Coaches
                  </div>
                </div>
                <div className="space-y-4 border-b border-navy-100 pb-6 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-navy-900">$250</span>
                    <span className="text-navy-600 text-sm">per hour</span>
                  </div>
                  <p className="text-sm text-navy-600">Typical executive coaching rate</p>
                </div>
                <ul className="space-y-3 text-sm text-navy-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">−</span>
                    <span>Limited availability & scaling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">−</span>
                    <span>Inconsistent quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">−</span>
                    <span>Hard to measure impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">−</span>
                    <span>One-off engagement model</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card border-2 border-accent-500 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full">
                    BEST VALUE
                  </div>
                </div>
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-accent-100 rounded-full text-sm font-semibold text-accent-700 mb-4">
                    NuCoach
                  </div>
                </div>
                <div className="space-y-4 border-b border-navy-100 pb-6 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-navy-900">$15–40</span>
                    <span className="text-navy-600 text-sm">per learner/month</span>
                  </div>
                  <p className="text-sm text-navy-600">Usage-based, scales with volume</p>
                </div>
                <ul className="space-y-3 text-sm text-navy-600">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">+</span>
                    <span>Unlimited availability 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">+</span>
                    <span>Consistent AI quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">+</span>
                    <span>Quantified metrics & ROI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-500 font-bold">+</span>
                    <span>Continuous improvement loops</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card">
                <div className="text-center mb-6">
                  <div className="inline-block px-4 py-2 bg-navy-100 rounded-full text-sm font-semibold text-navy-900 mb-4">
                    Traditional E-Learning
                  </div>
                </div>
                <div className="space-y-4 border-b border-navy-100 pb-6 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-navy-900">$5–15</span>
                    <span className="text-navy-600 text-sm">per learner</span>
                  </div>
                  <p className="text-sm text-navy-600">Low upfront cost</p>
                </div>
                <ul className="space-y-3 text-sm text-navy-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">−</span>
                    <span>Passive consumption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">−</span>
                    <span>Poor skill transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">−</span>
                    <span>Low engagement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">−</span>
                    <span>No behavioral change</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">What We Measure</p>
            <h2 className="section-title mb-4">Quantifiable Impact</h2>
            <p className="section-subtitle mx-auto">Real metrics that matter to business outcomes.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: 'Skill Adoption Rate',
                value: '85%',
                detail: 'Post-program demonstrated capability vs. learning goals',
              },
              {
                metric: 'Time to Competency',
                value: '3x Faster',
                detail: 'Reduced ramp time for new managers and sales reps',
              },
              {
                metric: 'ROI Payback Period',
                value: '6 months',
                detail: 'Training cost recovered through productivity gains',
              },
              {
                metric: 'Cost per Learner',
                value: '60% Lower',
                detail: 'vs. external coaching at comparable outcomes',
              },
            ].map((item, i) => (
              <AnimatedSection key={item.metric} delay={i * 75}>
                <div className="card text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">{item.value}</div>
                  <h4 className="font-bold text-navy-900 mb-2">{item.metric}</h4>
                  <p className="text-sm text-navy-600">{item.detail}</p>
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
              Ready to prove the ROI?
            </h2>
            <p className="text-lg text-navy-200 mb-8 max-w-xl mx-auto">
              Book a demo to see how NuCoach delivers measurable results for your organization.
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
            <p className="text-navy-600">See the quantifiable impact NuCoach can have on your organization.</p>
          </AnimatedSection>
          <AnimatedSection className="bg-navy-50 rounded-2xl p-8 md:p-12">
            <ContactForm formType="demo" />
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

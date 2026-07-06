import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Layers, Shield, Zap, BarChart3, Users, Lock } from 'lucide-react';
import { AnimatedSection, StatCounter, LogoStrip, ContactForm } from '../components/UI';

export default function EnterpriseSolution() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-wide relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-label !text-accent-300 mb-4">For CXOs & Enterprise Leaders</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Enterprise-Wide Capability Lift
              </h1>
              <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-2xl">
                Replace one-size-fits-all training with measurable, AI-driven skill building. Scale learning across functions, geographies, and departments without adding training overhead.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-base">
                  Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20">
                  Start a Pilot
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">The Challenge</p>
            <h2 className="section-title mb-4">Enterprise-Scale Training Complexity</h2>
            <p className="section-subtitle mx-auto">Traditional training doesn't scale. It's expensive, hard to measure, and doesn't reach everyone. Here's what enterprise leaders are dealing with.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="card h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                  <BarChart3 className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Training ROI Is Invisible</h3>
                <p className="text-navy-600 leading-relaxed">
                  You invest millions in learning programs, but how do you know they work? Without measurable skill outcomes, you can't justify spend, prove business impact, or optimize future investments.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                  <Globe className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Coverage Gaps Across Geographies</h3>
                <p className="text-navy-600 leading-relaxed">
                  Global organizations can't deliver consistent coaching across time zones and regions. Some teams get premium training; others get nothing. Inconsistent capability building across your enterprise.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Integration Friction with Existing Tech</h3>
                <p className="text-navy-600 leading-relaxed">
                  Your tech stack is complex. Adding another tool creates headaches. You need native integrations with your HRIS, LMS, CRM, and SSO — not more point solutions.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">Enterprise Applications</p>
            <h2 className="section-title mb-4">Skills Training for Every Function</h2>
            <p className="section-subtitle mx-auto">From customer service to compliance, NuCoach scales across your entire organization.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="card h-full">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Cross-Functional Skill Building</h3>
                <p className="text-navy-600 leading-relaxed">
                  Build critical skills across departments: customer service communication, product knowledge, collaboration, and customer empathy. Deliver role-specific training at scale.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card h-full">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Compliance & Ethics Training</h3>
                <p className="text-navy-600 leading-relaxed">
                  Make compliance training engaging and measurable. Simulate real scenarios — customer interactions, ethical dilemmas, regulatory requirements — so employees learn by doing.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card h-full">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Change Management & Transformation</h3>
                <p className="text-navy-600 leading-relaxed">
                  Support organizational change initiatives with practical skills training. Prepare teams for new systems, processes, and ways of working through immersive simulations.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-3">Enterprise Scale Impact</p>
            <h2 className="section-title mb-4">Training Transformation Metrics</h2>
            <p className="section-subtitle mx-auto mb-12">Organizations deploying NuCoach enterprise-wide see significant improvements in cost efficiency, coverage, and scale.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <StatCounter end={60} suffix="%" label="Lower cost per learner" />
              <StatCounter end={4} suffix="x" label="Training coverage expansion" />
              <StatCounter end={100} suffix="K+" label="Learners on platform" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust & NuVeda Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-3">Enterprise-Grade Platform</p>
            <h2 className="section-title mb-4">Built on NuVeda's CALF™</h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="bg-white rounded-2xl border border-navy-100 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-teal-100 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-teal-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    Trusted by 50+ Organizations Across 60+ Countries
                  </h3>
                  <p className="text-lg text-navy-600 mb-6 leading-relaxed">
                    NuCoach is built on NuVeda's CALF™ — a battle-tested enterprise platform trusted by global organizations. We handle the complexity of scale.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      'SOC 2 Type II compliant with GDPR adherence',
                      'Configurable data residency for global teams',
                      'SSO/SCIM + HRIS/LMS/CRM native integrations',
                      'Enterprise-grade security and encryption',
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
                        <span className="text-navy-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Logo Strip */}
          <AnimatedSection delay={200} className="mt-12">
            <p className="text-center text-navy-500 text-sm mb-6">
              Built on the platform trusted by global organizations
            </p>
            <LogoStrip />
          </AnimatedSection>
        </div>
      </section>

      {/* Implementation */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">Getting Started</p>
            <h2 className="section-title mb-4">Your Enterprise Deployment Path</h2>
            <p className="section-subtitle mx-auto">We work with your team to design a phased rollout that fits your organization's complexity.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Assess',
                description: 'We analyze your organization, identify skill gaps across functions, and design a custom learning strategy aligned to business outcomes.',
              },
              {
                step: 2,
                title: 'Integrate',
                description: 'We integrate NuCoach with your HRIS, LMS, CRM, and SSO. Set up user provisioning, permissions, and data flows for seamless deployment.',
              },
              {
                step: 3,
                title: 'Pilot',
                description: 'Launch pilots with early-adopter cohorts across key functions. Measure skill gains, validate impact, and refine the program.',
              },
              {
                step: 4,
                title: 'Scale',
                description: 'Roll out to your entire organization in phases. Provide ongoing support, continuous improvement, and measurement across all programs.',
              },
            ].map((item) => (
              <AnimatedSection key={item.step} delay={item.step * 100}>
                <div className="card h-full">
                  <div className="w-10 h-10 rounded-full bg-accent-100 text-accent-600 font-bold flex items-center justify-center mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-4">What Enterprise Teams Get</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Unlimited Learners',
                description: 'Scale to 100K+ learners without infrastructure headaches. Per-learner costs drop dramatically.',
              },
              {
                icon: BarChart3,
                title: 'Unified Analytics',
                description: 'Single pane of glass for all learning metrics. Track skill progression, ROI, and impact across the organization.',
              },
              {
                icon: Layers,
                title: 'Seamless Integrations',
                description: 'Native connectors for Workday, SAP, Okta, Salesforce, and 50+ other enterprise systems.',
              },
              {
                icon: Shield,
                title: 'Security & Compliance',
                description: 'SOC 2, GDPR, HIPAA-ready. Configurable data residency and audit logs for regulated industries.',
              },
              {
                icon: Globe,
                title: 'Global Deployment',
                description: 'Support for 40+ languages, multiple time zones, and regional data requirements out of the box.',
              },
              {
                icon: Lock,
                title: 'Enterprise Support',
                description: 'Dedicated account management, onboarding, training, and 24/7 technical support for your team.',
              },
            ].map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 50}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-navy-600 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with Form */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to transform enterprise learning?
              </h2>
              <p className="text-lg text-navy-200 mb-8 leading-relaxed">
                Talk to our enterprise team about a customized deployment plan that fits your organization's scale and complexity.
              </p>
              <ul className="space-y-3">
                {[
                  'Custom learning strategy aligned to business outcomes',
                  'Seamless integration with your existing tech stack',
                  'Dedicated support for successful deployment and scaling',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy-100">
                    <Shield className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Schedule a Discussion</h3>
                <ContactForm formType="demo" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Let's talk enterprise scale.
            </h2>
            <p className="text-lg text-navy-600 mb-8 max-w-xl mx-auto">
              Connect with our enterprise team to explore how NuCoach can transform learning across your organization.
            </p>
            <Link to="/contact" className="btn-primary text-base">
              Start a Pilot <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { AnimatedSection, ContactForm, TestimonialCard, LogoStrip } from '../components/UI';

const demoExpectations = [
  {
    title: 'Live AI Roleplay Walkthrough',
    description: 'Watch our product specialist conduct a live AI coaching scenario — see firsthand how realistic and adaptive the interactions are.',
  },
  {
    title: 'Use Case Mapping',
    description: "We'll discuss your specific challenges (leadership development, sales enablement, etc.) and show how NuCoach solves them for your team.",
  },
  {
    title: 'Pricing & Pilot Options',
    description: "We'll walk through transparent pricing, explain pilot options tailored to your cohort size and timeline, and answer all your questions.",
  },
  {
    title: 'Q&A with Specialist',
    description: 'Direct conversation with our product specialist — ask anything about the platform, implementation, data security, integrations, and support.',
  },
];

export default function DemoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-wide relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-label !text-accent-300 mb-4">Personalized Demo</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Book a Demo
              </h1>
              <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-2xl">
                See AI coaching in action — personalized to your use case. Approximately 30 minutes.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Two-Column: Content & Form */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column: What to Expect */}
            <AnimatedSection>
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-2">What to Expect on This Call</h2>
                <p className="text-navy-600 mb-8">A focused 30-minute session tailored to your role and challenges.</p>

                <div className="space-y-4">
                  {demoExpectations.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900 mb-1">{item.title}</h3>
                        <p className="text-navy-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column: Form */}
            <AnimatedSection delay={100}>
              <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
                <h2 className="text-2xl font-bold text-navy-900 mb-2">Schedule Your Demo</h2>
                <p className="text-navy-600 mb-6">Fill out the form and we'll send you available times to book.</p>
                <ContactForm formType="demo" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-navy-50 border-b border-navy-100">
        <div className="container-wide py-12">
          <AnimatedSection className="text-center">
            <p className="text-navy-600 text-sm mb-8">
              Built on the platform behind NuVeda's CALF&trade; — trusted by <strong className="text-navy-900">50+ organizations</strong>, <strong className="text-navy-900">100K+ learners</strong>, across <strong className="text-navy-900">60+ countries</strong>
            </p>
            <LogoStrip />
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection>
            <TestimonialCard
              quote="We reduced new sales rep ramp time by 50% using NuCoach's AI buyer simulations. The quantified skill tracking gives our managers data they never had before."
              name="Mark Chen"
              role="VP of Sales Enablement"
              company="Crestcom International"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(33,134,235,0.2),_transparent_50%)]" />
        <div className="container-wide relative py-20 md:py-28 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to transform your training?
            </h2>
            <p className="text-lg text-navy-200 mb-8 max-w-xl mx-auto">
              Schedule a personalized demo with our product specialist and see how NuCoach can accelerate your organization's capability growth.
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
    </main>
  );
}

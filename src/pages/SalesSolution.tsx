import { Link } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp, Phone, Shield, Handshake, Zap } from 'lucide-react';
import { AnimatedSection, StatCounter, TestimonialCard, ContactForm } from '../components/UI';

export default function SalesSolution() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-wide relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-label !text-accent-300 mb-4">For CROs & VP Sales</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Sales Enablement That Sticks
              </h1>
              <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-2xl">
                Give every seller unlimited practice with AI buyer personas. Shorten ramp time, boost win rates, and ensure training transfers to live calls.
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
            <h2 className="section-title mb-4">The Sales Readiness Problem</h2>
            <p className="section-subtitle mx-auto">New reps take too long to ramp, training doesn't transfer to real calls, and win rates plateau without ongoing practice. Here's what's costing you revenue.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="card h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">New Reps Take 6+ Months to Ramp</h3>
                <p className="text-navy-600 leading-relaxed">
                  New sales reps don't reach full productivity for 6–9 months. With high turnover, you're constantly starting over. Every month of slow ramp is revenue lost and deal velocity slowed.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Win Rates Plateau Without Coaching</h3>
                <p className="text-navy-600 leading-relaxed">
                  Your seasoned reps hit a ceiling. They need personalized coaching on discovery, objection handling, and deal strategy — but you can't clone your top performers fast enough. Win rates stagnate.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                  <Phone className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Training Doesn't Transfer to Live Calls</h3>
                <p className="text-navy-600 leading-relaxed">
                  Role-plays in training are nice, but they don't feel real. When reps hit a difficult prospect, they freeze. Without repeated practice with realistic scenarios, knowledge doesn't translate to performance.
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
            <p className="section-label mb-3">How It Works</p>
            <h2 className="section-title mb-4">Sales Scenarios Your Reps Need</h2>
            <p className="section-subtitle mx-auto">NuCoach's AI buyer personas adapt in real-time, creating realistic practice that transfers to deals.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="card h-full">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Discovery Call Practice</h3>
                <p className="text-navy-600 leading-relaxed">
                  Practice opening calls with different buyer personas across your target industries. Learn to ask better discovery questions, uncover pain points, and set the stage for moving forward.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card h-full">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Objection Handling & Negotiation</h3>
                <p className="text-navy-600 leading-relaxed">
                  Handle tough objections without getting flustered. Practice negotiation scenarios, price pushback, and competitive positioning. Build the confidence to close difficult deals.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card h-full">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Deal Coaching & Pipeline Reviews</h3>
                <p className="text-navy-600 leading-relaxed">
                  Get personalized coaching on your deals in progress. AI analyzes your pipeline, identifies at-risk deals, and guides reps on next steps to increase win probability.
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
            <p className="section-label mb-3">Proven Results</p>
            <h2 className="section-title mb-4">Sales Performance Improvements</h2>
            <p className="section-subtitle mx-auto mb-12">Sales teams using NuCoach see faster ramp time, higher win rates, and measurable deal velocity improvements.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <StatCounter end={50} suffix="%" label="Faster rep ramp" />
              <StatCounter end={22} suffix="%" label="Win rate lift" />
              <StatCounter end={3} suffix="x" label="More practice reps" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-3">Customer Success</p>
            <h2 className="section-title mb-4">What Sales Leaders Are Seeing</h2>
          </AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <TestimonialCard
                quote="We reduced new sales rep ramp time by 50% using NuCoach's AI buyer simulations. The quantified skill tracking gives our managers data they never had before. Our win rates are up, and reps are closing deals faster."
                name="Mark Chen"
                role="VP Sales Enablement"
                company="Crestcom"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">Getting Started</p>
            <h2 className="section-title mb-4">Your Sales Enablement Roadmap</h2>
            <p className="section-subtitle mx-auto">A typical sales pilot runs 2–4 weeks with a cohort of 10–30 reps and focuses on your most critical sales scenarios.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Assess',
                description: 'We work with your sales leadership to identify the biggest skill gaps and design AI buyer personas that match your target market and sales process.',
              },
              {
                step: 2,
                title: 'Practice',
                description: 'Reps practice unlimited discovery calls, objection scenarios, and deal coaching with AI. Each session generates insights on skill development.',
              },
              {
                step: 3,
                title: 'Measure',
                description: 'Track improvement in discovery questions, objection handling, and negotiation skills through NuCoach analytics. Compare against benchmarks.',
              },
              {
                step: 4,
                title: 'Scale',
                description: 'Roll out to your full sales organization or add new scenarios. Integrate NuCoach into onboarding and continuous development.',
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

      {/* CTA with Form */}
      <section className="section-padding bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to accelerate sales performance?
              </h2>
              <p className="text-lg text-navy-200 mb-8 leading-relaxed">
                Launch a sales enablement pilot and see faster ramp time, higher win rates, and measurable ROI in just 2–4 weeks.
              </p>
              <ul className="space-y-3">
                {[
                  'AI buyer personas tailored to your industry and sales process',
                  'Unlimited practice for discovery, objections, and deal coaching',
                  'Measurable skill improvements with manager dashboards',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy-100">
                    <Zap className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Book Your Demo</h3>
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
              Ready to see the numbers?
            </h2>
            <p className="text-lg text-navy-600 mb-8 max-w-xl mx-auto">
              Schedule a brief demo and see how NuCoach's AI simulations improve rep ramp time and deal win rates.
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

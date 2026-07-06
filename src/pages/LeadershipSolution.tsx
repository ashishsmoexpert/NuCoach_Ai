import { Link } from 'react-router-dom';
import { ArrowRight, Users, DollarSign, TrendingUp, MessageSquare, Users2, Zap, BarChart3 } from 'lucide-react';
import { AnimatedSection, StatCounter, TestimonialCard, ContactForm } from '../components/UI';

export default function LeadershipSolution() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-wide relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-label !text-accent-300 mb-4">For CHROs & CLOs</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Leadership Development at Scale
              </h1>
              <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-2xl">
                Build confident, capable leaders faster with AI-powered coaching simulations. Accelerate manager readiness, develop leadership pipelines, and measure skill growth without adding headcount to your L&D team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-base">
                  Start a Pilot <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20">
                  Book a Demo
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
            <h2 className="section-title mb-4">The Leadership Development Gap</h2>
            <p className="section-subtitle mx-auto">Leadership readiness takes time and resources — and traditional coaching doesn't scale. Here's what's keeping CHROs up at night.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="card h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                  <Users className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Manager Readiness Takes 12+ Months</h3>
                <p className="text-navy-600 leading-relaxed">
                  New managers need 12–18 months of coaching and trial-and-error before they're truly confident in tough conversations, performance management, and strategic decision-making. You can't wait that long to see ROI.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                  <DollarSign className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Coaching Is Expensive & Unscalable</h3>
                <p className="text-navy-600 leading-relaxed">
                  Executive coaches cost $200–$400 per hour. Scaling coaching to 100+ managers? The budget becomes prohibitive. And your internal talent can't keep up — L&D teams are already stretched thin.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">No Measurable Proof of Skill Growth</h3>
                <p className="text-navy-600 leading-relaxed">
                  You invest in leadership development, but how do you know it's working? Without quantified outcomes, it's hard to justify ROI, prove impact, or guide future investment decisions.
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
            <h2 className="section-title mb-4">Leadership Scenarios Built for Your Challenges</h2>
            <p className="section-subtitle mx-auto">NuCoach's AI simulations target the real conversations your leaders need to master.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection>
              <div className="card h-full">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Tough Conversations & Performance Reviews</h3>
                <p className="text-navy-600 leading-relaxed">
                  Practice delivering difficult feedback, navigating defensive reactions, and coaching employees through performance improvement plans. Build the emotional intelligence your managers need to lead with empathy and clarity.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="card h-full">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                  <Users2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">DE&I and Inclusive Leadership</h3>
                <p className="text-navy-600 leading-relaxed">
                  Develop cultural awareness, navigate inclusive hiring, and practice leading diverse teams. Scenario-based learning embeds your organization's values and gives managers confidence in sensitive conversations.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="card h-full">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">Executive Presence & Strategic Communication</h3>
                <p className="text-navy-600 leading-relaxed">
                  Train senior leaders to communicate strategy, influence stakeholders, and project executive presence in high-stakes meetings. Master the communication patterns that define effective leadership.
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
            <p className="section-label mb-3">Measured Impact</p>
            <h2 className="section-title mb-4">Leadership Development ROI</h2>
            <p className="section-subtitle mx-auto mb-12">Organizations using NuCoach for leadership development see significant improvements in manager readiness and capability.</p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <StatCounter end={3} suffix="x" label="Faster manager readiness" />
              <StatCounter end={40} suffix="%" label="Coaching cost reduction" />
              <StatCounter end={85} suffix="%" label="Skill adoption rate" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-3">Success Stories</p>
            <h2 className="section-title mb-4">What CHROs Are Saying</h2>
          </AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <AnimatedSection>
              <TestimonialCard
                quote="NuCoach transformed how we develop leaders. The AI roleplay scenarios feel incredibly real, and our managers are now having better conversations from week one. We've cut our time-to-readiness in half and freed up our L&D team to focus on strategic initiatives."
                name="Priya Sharma"
                role="Chief People Officer"
                company="Ageas Federal"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">Getting Started</p>
            <h2 className="section-title mb-4">Your Path to Scalable Leadership Development</h2>
            <p className="section-subtitle mx-auto">A typical leadership development pilot takes 4–6 weeks with a cohort of 20–50 managers.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: 'Assess',
                description: 'We interview your leadership team to understand critical gaps and design AI scenarios that mirror your real organizational challenges.',
              },
              {
                step: 2,
                title: 'Deploy',
                description: 'Launch the pilot with a cohort of managers. They practice with AI personas, receive real-time feedback, and build skill confidence.',
              },
              {
                step: 3,
                title: 'Measure',
                description: 'Track skill progression through NuCoach analytics. See measurable improvements in competency scores and readiness metrics.',
              },
              {
                step: 4,
                title: 'Scale',
                description: 'Expand to all managers and integrate NuCoach into your ongoing leadership development roadmap for sustained capability growth.',
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
                Ready to develop leaders at scale?
              </h2>
              <p className="text-lg text-navy-200 mb-8 leading-relaxed">
                Start a pilot with your next cohort of managers and see measurable improvements in 4–6 weeks. No long-term commitment required.
              </p>
              <ul className="space-y-3">
                {[
                  'Customized leadership scenarios for your organization',
                  'Real-time coaching feedback and skill tracking',
                  'Pilot results in 4–6 weeks with quantified ROI',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy-100">
                    <BarChart3 className="w-5 h-5 text-accent-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Start Your Pilot</h3>
                <ContactForm formType="pilot" />
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
              Questions? Let's talk.
            </h2>
            <p className="text-lg text-navy-600 mb-8 max-w-xl mx-auto">
              Schedule a brief call with our team to discuss your leadership development challenges and explore how NuCoach can help.
            </p>
            <Link to="/contact" className="btn-primary text-base">
              Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

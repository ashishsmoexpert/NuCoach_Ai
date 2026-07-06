import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { AnimatedSection, ContactForm, TestimonialCard, FAQ } from '../components/UI';

const pilotSteps = [
  {
    number: 1,
    title: 'Define Scope',
    description: 'Work with our team to identify the skills you want to develop, select your cohort (2–4 weeks, 15–50 learners), and customize AI scenarios to your real business challenges.',
  },
  {
    number: 2,
    title: 'Deploy & Practice',
    description: 'Learners engage with AI roleplay scenarios customized to your industry, role, and use case. They practice tough conversations, receive real-time feedback, and build muscle memory through deliberate repetition.',
  },
  {
    number: 3,
    title: 'Measure Results',
    description: 'After the pilot, you receive a comprehensive skill growth report showing quantified improvement, adoption metrics, and clear recommendations for full deployment.',
  },
];

const pilotIncludes = [
  'Custom AI scenarios tailored to your business',
  'Dedicated success manager for 24/7 support',
  'Pre/post skill assessments to measure impact',
  'Real-time analytics dashboard with insights',
  'Full platform training and onboarding',
];

const faqItems = [
  {
    question: 'What does a pilot cost?',
    answer: "Pilot pricing is flexible and based on cohort size (15–50 learners) and duration (typically 2–4 weeks). Contact us for a tailored proposal — there's no obligation to commit to a full deployment after the pilot.",
  },
  {
    question: 'How long does a pilot take?',
    answer: 'A typical pilot runs 2–4 weeks, giving learners time to engage with multiple roleplay scenarios, receive coaching feedback, and demonstrate measurable skill growth.',
  },
  {
    question: 'What happens after the pilot?',
    answer: "You'll receive a comprehensive report with quantified skill improvement, adoption metrics, and clear ROI analysis. From there, you decide whether to expand to a full deployment, and we support that transition every step of the way.",
  },
  {
    question: 'Can we customize scenarios for our organization?',
    answer: 'Absolutely. Our team works with you to design roleplay scenarios that reflect your industry, role competencies, company terminology, and real business challenges — ensuring maximum relevance and engagement.',
  },
];

export default function PilotPage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-wide relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-label !text-accent-300 mb-4">Pilot Program</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Start a Pilot
              </h1>
              <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-2xl">
                Experience NuCoach with your team — no long-term commitment required. See real skill growth in 2–4 weeks.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* How the Pilot Works */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">The Process</p>
            <h2 className="section-title mb-4">How the Pilot Works</h2>
            <p className="section-subtitle mx-auto">Three simple steps to evaluate NuCoach for your organization.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {pilotSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 100}>
                <div className="relative">
                  <div className="absolute -top-8 -left-4 w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center text-white text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="pt-4 pl-4">
                    <h3 className="text-xl font-bold text-navy-900 mb-3">{step.title}</h3>
                    <p className="text-navy-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-3">Package</p>
            <h2 className="section-title mb-4">What's Included in Your Pilot</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-4">
              {pilotIncludes.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-navy-100">
                  <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                  <p className="text-navy-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Two-Column: Form & Supporting Content */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column: Form */}
            <AnimatedSection>
              <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100">
                <h2 className="text-2xl font-bold text-navy-900 mb-2">Apply for the Pilot</h2>
                <p className="text-navy-600 mb-6">Tell us about your team and goals. We'll respond within one business day with a tailored pilot proposal.</p>
                <ContactForm formType="pilot" />
              </div>
            </AnimatedSection>

            {/* Right Column: Supporting Content */}
            <AnimatedSection delay={100}>
              <div>
                <div className="mb-10">
                  <TestimonialCard
                    quote="The pilot gave us confidence in NuCoach's approach. Seeing measurable skill growth in 3 weeks made the business case for a full rollout crystal clear."
                    name="Priya Sharma"
                    role="Chief People Officer"
                    company="Ageas Federal Life Insurance"
                  />
                </div>

                <div className="bg-gradient-accent rounded-2xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-4">What Happens After You Submit?</h3>
                  <ul className="space-y-3 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-accent-200">1.</span>
                      <span>We review your organization's needs and use case.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-accent-200">2.</span>
                      <span>Our team calls you to discuss goals, cohort size, and timeline — typically the same day.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-accent-200">3.</span>
                      <span>We send a custom proposal with pricing and deployment plan.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-accent-200">4.</span>
                      <span>Once approved, your pilot can launch within 1–2 weeks.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-3">Questions?</p>
            <h2 className="section-title mb-4">Pilot FAQs</h2>
          </AnimatedSection>
          <AnimatedSection>
            <FAQ items={faqItems} />
          </AnimatedSection>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-white border-t border-navy-100">
        <div className="container-wide text-center">
          <AnimatedSection>
            <p className="text-navy-600 mb-4">Prefer to see it in action first?</p>
            <Link to="/demo" className="btn-primary inline-flex items-center">
              Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

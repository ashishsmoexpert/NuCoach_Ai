import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, TrendingUp, Target, Brain, Sparkles, Zap, ChevronRight } from 'lucide-react';
import { AnimatedSection, StatCounter, FAQ, TestimonialCard, LogoStrip } from '../components/UI';

const personas = [
  {
    id: 'chro',
    label: 'CHRO / CLO',
    headline: 'Develop leaders at scale with AI-powered coaching',
    subtext: 'Accelerate manager readiness, build leadership pipelines, and measure skill growth — all without adding headcount to your L&D team.',
    stats: [
      { value: '3x', label: 'faster manager readiness' },
      { value: '40%', label: 'reduction in coaching costs' },
      { value: '85%', label: 'skill adoption rate' },
    ],
    features: [
      'AI roleplay simulations for tough conversations, performance reviews, and DE&Q scenarios',
      'Personalized development paths that adapt to each leader\'s gaps',
      'Real-time analytics on skill progression across your organization',
    ],
  },
  {
    id: 'cro',
    label: 'CRO',
    headline: 'Shorten rep ramp time and lift win rates',
    subtext: 'Give every seller unlimited practice with AI buyer personas, objection drills, and deal coaching — so they perform from day one.',
    stats: [
      { value: '50%', label: 'faster rep ramp time' },
      { value: '22%', label: 'increase in win rates' },
      { value: '3x', label: 'more practice reps per week' },
    ],
    features: [
      'AI buyer personas that adapt objections based on industry, role, and deal stage',
      'Scenario-based negotiation and discovery call practice',
      'Manager dashboards showing readiness scores before reps go live',
    ],
  },
  {
    id: 'cxo',
    label: 'CXO',
    headline: 'Maximize ROI on every training dollar',
    subtext: 'Replace one-size-fits-all training with measurable, AI-driven capability building that scales across every function and geography.',
    stats: [
      { value: '60%', label: 'lower cost per learner' },
      { value: '4x', label: 'training coverage' },
      { value: '100K+', label: 'learners on CALF™ platform' },
    ],
    features: [
      'Enterprise-grade platform built on NuVeda\'s CALF™ — trusted across 60+ countries',
      'SSO/SCIM, HRIS/LMS/CRM integrations, and data residency compliance',
      'Unified analytics across all programs, cohorts, and business units',
    ],
  },
  {
    id: 'partner',
    label: 'HR Consulting / Training',
    headline: 'Scale your coaching practice with AI',
    subtext: 'Offer AI-powered simulations to your clients without building technology — grow revenue, reach, and differentiation.',
    stats: [
      { value: '2x', label: 'client engagement' },
      { value: '40%', label: 'revenue share' },
      { value: '0', label: 'tech investment required' },
    ],
    features: [
      'White-label AI simulations branded to your consulting practice',
      'Co-selling and co-marketing support from the NuCoach team',
      'Rapid pilot deployment — get your first client live in weeks',
    ],
  },
];

const howItWorksSteps = [
  {
    icon: Target,
    title: 'Assess',
    description: 'AI-driven skill assessments identify each person\'s strengths and gaps across leadership, sales, and communication competencies.',
    visual: 'Assessment Dashboard',
  },
  {
    icon: Brain,
    title: 'Analyze',
    description: 'Machine learning maps skill trajectories, benchmarks against role expectations, and recommends personalized development paths.',
    visual: 'Analytics Engine',
  },
  {
    icon: TrendingUp,
    title: 'Grow',
    description: 'Learners practice with adaptive AI roleplay, receive real-time coaching feedback, and build lasting capability through deliberate repetition.',
    visual: 'Growth Tracker',
  },
];

const faqItems = [
  {
    question: 'How does NuCoach handle data privacy and security?',
    answer: 'NuCoach is built on NuVeda\'s enterprise-grade CALF™ platform with SOC 2 Type II compliance, GDPR adherence, and configurable data residency. All roleplay sessions are encrypted end-to-end, and personal data is never used to train our AI models. We support SSO/SCIM and integrate with your existing security infrastructure.',
  },
  {
    question: 'What integrations are available?',
    answer: 'NuCoach integrates with major HRIS (Workday, BambooHR, SAP SuccessFactors), LMS (Cornerstone, Docebo, SAP Litmos), CRM (Salesforce, HubSpot), and SSO/SCIM providers (Okta, Azure AD). Custom integrations are available for enterprise customers.',
  },
  {
    question: 'How long does a pilot take and what does it cost?',
    answer: 'A typical pilot runs 2–4 weeks with a cohort of 15–50 learners. We offer flexible pricing based on cohort size and use case. Contact us for a tailored pilot proposal — there\'s no obligation to commit to a full deployment after the pilot.',
  },
  {
    question: 'Can simulations be customized for our organization?',
    answer: 'Absolutely. NuCoach simulations are configurable for your industry, role competencies, company terminology, and real scenarios. Our team works with you to design roleplay scenarios that mirror your actual business challenges — from sales objections to leadership conversations.',
  },
  {
    question: 'How is NuCoach different from traditional e-learning?',
    answer: 'Traditional e-learning is passive — watch, read, quiz. NuCoach is active learning: learners practice real conversations with AI personas, receive adaptive coaching feedback, and build muscle memory through deliberate repetition. The result is skill transfer that actually sticks, measured in quantified outcomes.',
  },
  {
    question: 'What kind of support do partners receive?',
    answer: 'Partners receive full onboarding, co-selling support, co-marketing resources, technical training, and a dedicated partner manager. We offer tiered revenue sharing and help you deploy your first client pilot within weeks.',
  },
];

export default function HomePage() {
  const [activePersona, setActivePersona] = useState(0);
  const persona = personas[activePersona];

  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-wide relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-label !text-accent-300 mb-4">Smarter Coaching. Measurable Growth.</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                AI-driven roleplay & simulation for{' '}
                <span className="gradient-text">enterprise coaching</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-2xl">
                NuCoach uses AI roleplay and adaptive simulations to accelerate leadership development, boost sales performance, and measure skill growth — at enterprise scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/demo" className="btn-primary text-base">
                  Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/pilot" className="btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20">
                  Start a Pilot
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Persona Switcher */}
          <AnimatedSection delay={200} className="mt-16">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {personas.map((p, i) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePersona(i)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activePersona === i
                        ? 'bg-accent-500 text-white shadow-lg shadow-accent-500/25'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <div className="min-h-[200px]">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">{persona.headline}</h2>
                <p className="text-navy-200 mb-6 leading-relaxed">{persona.subtext}</p>
                <div className="grid grid-cols-3 gap-4 md:gap-8 mb-6">
                  {persona.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl md:text-3xl font-bold text-accent-300">{stat.value}</div>
                      <p className="text-sm text-navy-300 mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-2">
                  {persona.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-navy-200">
                      <Sparkles className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-navy-50 border-b border-navy-100">
        <div className="container-wide py-10">
          <AnimatedSection>
            <p className="text-center text-navy-500 text-sm mb-6">
              Built on the platform behind NuVeda's CALF&trade; — trusted by <strong className="text-navy-900">50+ organizations</strong>, <strong className="text-navy-900">100K+ learners</strong>, across <strong className="text-navy-900">60+ countries</strong>
            </p>
            <LogoStrip />
          </AnimatedSection>
        </div>
      </section>

      {/* Features — How NuCoach Powers Organizations */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">Platform Capabilities</p>
            <h2 className="section-title mb-4">How NuCoach Powers Organizations</h2>
            <p className="section-subtitle mx-auto">Replace generic training with AI-driven coaching that adapts to every individual and measures real skill growth.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Accelerate Managers',
                description: 'AI roleplay for tough conversations, performance reviews, and leadership moments — so new managers lead with confidence from day one.',
                visual: 'Manager coaching simulation with adaptive AI personas',
              },
              {
                icon: Zap,
                title: 'Scale Culture',
                description: 'Deliver consistent, high-quality coaching across every team, geography, and business unit — without needing more coaches.',
                visual: 'Enterprise-wide coaching deployment dashboard',
              },
              {
                icon: TrendingUp,
                title: 'Lift Capability',
                description: 'Measure skill progression with real data, not attendance. Quantified outcomes prove ROI and guide investment decisions.',
                visual: 'Skill growth analytics with benchmark tracking',
              },
            ].map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 100}>
                <div className="card h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{feature.title}</h3>
                  <p className="text-navy-600 leading-relaxed mb-4 flex-1">{feature.description}</p>
                  <div className="bg-navy-50 rounded-xl p-4 border border-navy-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
                        <Brain className="w-4 h-4 text-accent-600" />
                      </div>
                      <p className="text-xs text-navy-500">{feature.visual}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">The Process</p>
            <h2 className="section-title mb-4">How NuCoach Works</h2>
            <p className="section-subtitle mx-auto">A three-phase approach that turns coaching from a cost center into a measurable growth engine.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {howItWorksSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 150}>
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-2xl gradient-accent flex items-center justify-center">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy-900 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{step.description}</p>
                  {i < 2 && (
                    <div className="hidden md:flex items-center justify-center mt-6">
                      <ChevronRight className="w-6 h-6 text-accent-400" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300} className="mt-12 text-center">
            <Link to="/how-it-works" className="btn-primary">
              See How It Works <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-3">Impact</p>
            <h2 className="section-title mb-4">Why Teams Choose NuCoach</h2>
          </AnimatedSection>
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

      {/* Testimonials */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-3">Proof</p>
            <h2 className="section-title mb-4">What Our Clients Say</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <TestimonialCard
                quote="NuCoach transformed how we develop leaders. The AI roleplay scenarios feel incredibly real, and our managers are now having better conversations from week one."
                name="Priya Sharma"
                role="Chief People Officer"
                company="Ageas Federal Life Insurance"
              />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <TestimonialCard
                quote="We reduced new sales rep ramp time by 50% using NuCoach's AI buyer simulations. The quantified skill tracking gives our managers data they never had before."
                name="Mark Chen"
                role="VP of Sales Enablement"
                company="Crestcom International"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partner Teaser */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <p className="section-label mb-3">Partners</p>
            <h2 className="section-title mb-4">Scale Your Coaching Practice with AI</h2>
            <p className="section-subtitle mx-auto mb-8">
              HR consultants and training companies use NuCoach to deliver AI-powered simulations under their own brand — no tech investment required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/partners" className="btn-primary">
                Become a Partner <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/partners" className="btn-ghost">
                Learn about partnership tiers
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
          </AnimatedSection>
          <AnimatedSection>
            <FAQ items={faqItems} />
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(33,134,235,0.2),_transparent_50%)]" />
        <div className="container-wide relative py-20 md:py-28 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to see AI coaching in action?
            </h2>
            <p className="text-lg text-navy-200 mb-8 max-w-xl mx-auto">
              Book a personalized demo and experience how NuCoach can transform your organization's capability growth.
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

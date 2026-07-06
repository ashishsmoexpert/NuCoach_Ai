import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, TrendingUp, Globe, Lock } from 'lucide-react';
import { AnimatedSection, StatCounter } from '../components/UI';

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We push the boundaries of what AI can do in coaching, constantly evolving our platform to stay ahead of the curve.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Impact',
    description: 'We believe in quantified outcomes. Every coaching session generates data that proves ROI and guides real decisions.',
  },
  {
    icon: Globe,
    title: 'Accessibility',
    description: 'World-class coaching should be available to everyone — not just a select few. We make AI coaching affordable at scale.',
  },
  {
    icon: Lock,
    title: 'Trust',
    description: 'Security, privacy, and compliance are non-negotiable. We handle sensitive learning data with enterprise-grade protection.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-wide relative pt-32 pb-20 md:pt-40 md:pb-28">
          <AnimatedSection className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
              About <span className="gradient-text">NuCoach</span>
            </h1>
            <p className="text-xl text-navy-200 leading-relaxed mb-8">
              The AI innovation arm of NuVeda Learning
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-12">
            <h2 className="section-title mb-6">Our Story</h2>
            <p className="text-lg text-navy-600 leading-relaxed mb-6">
              NuCoach was born from NuVeda Learning Pvt. Ltd. — an established AI-powered learning platform (CALF™) trusted by 50+ organizations, 100,000+ learners, across 60+ countries. NuCoach extends that proven platform into AI-driven roleplay and simulation for enterprise coaching.
            </p>
            <p className="text-lg text-navy-600 leading-relaxed">
              With deep expertise in learning science, AI, and enterprise-scale deployment, we saw an opportunity to transform how organizations develop their people. The result? A platform that makes world-class coaching accessible to every professional, at a fraction of traditional coaching costs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <div className="card bg-gradient-to-br from-accent-50 to-teal-50 border-2 border-accent-200">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-600 mb-3">Our Mission</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 leading-tight">
                To make world-class coaching accessible to every professional through AI
              </h2>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">Our Values</p>
            <h2 className="section-title mb-4">What Drives Us</h2>
            <p className="section-subtitle mx-auto">We're guided by these principles in everything we build.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 100}>
                <div className="card h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-navy-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CALF Stats */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">Built on CALF™</p>
            <h2 className="section-title mb-4">The Platform Behind NuCoach</h2>
            <p className="section-subtitle mx-auto">NuCoach runs on NuVeda's proven CALF™ platform — enterprise-grade, globally trusted, and continuously evolving.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              <StatCounter end={50} suffix="+" label="Organizations served" />
              <StatCounter end={100} suffix="K+" label="Learners on CALF™" />
              <StatCounter end={60} suffix="+" label="Countries reached" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Teaser */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <AnimatedSection className="text-center">
            <p className="section-label mb-4">Our Team</p>
            <h2 className="section-title mb-6">Led by Learning Science and AI Experts</h2>
            <p className="text-lg text-navy-600 leading-relaxed mb-8">
              Our team combines deep expertise in learning science, artificial intelligence, enterprise software, and organizational development. We're passionate about using technology to unlock human potential at scale.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(33,134,235,0.2),_transparent_50%)]" />
        <div className="container-wide relative py-20 md:py-28 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to transform your coaching?
            </h2>
            <p className="text-lg text-navy-200 mb-8 max-w-xl mx-auto">
              Book a personalized demo and experience NuCoach in action.
            </p>
            <Link to="/demo" className="btn-primary text-base">
              Book a Demo <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

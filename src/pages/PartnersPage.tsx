import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, X } from 'lucide-react';
import { AnimatedSection, ContactForm } from '../components/UI';

const partnerTypes = [
  {
    id: 'consultants',
    title: 'HR Consultants',
    description: 'Offer AI coaching under your brand, differentiate with technology, and grow client engagement.',
    benefits: [
      'White-label NuCoach simulations branded to your practice',
      'Co-selling and co-marketing support from our team',
      'Revenue share on all client deals (tiered by volume)',
      'Rapid deployment — get your first client live in weeks',
    ],
  },
  {
    id: 'training',
    title: 'Training Companies',
    description: 'Add AI roleplay to your programs, scale without adding facilitators, and deliver measurable outcomes.',
    benefits: [
      'Integrate NuCoach into your training curricula',
      'Scale your offerings without hiring more coaches',
      'Measurable skill outcomes to prove client ROI',
      'Shared success metrics with your clients',
    ],
  },
  {
    id: 'technology',
    title: 'Technology Partners',
    description: 'Integrate NuCoach into your platform, co-build solutions, and pursue joint go-to-market opportunities.',
    benefits: [
      'API access for deep platform integration',
      'Co-build solutions tailored to your customer base',
      'Joint go-to-market campaigns',
      'Dedicated technical partnership manager',
    ],
  },
];

const partnerTiers = [
  {
    feature: 'Revenue Share',
    Essential: '20%',
    Growth: '30%',
    Premier: '40%',
  },
  {
    feature: 'Co-Selling Support',
    Essential: 'No',
    Growth: 'Yes',
    Premier: 'Yes',
  },
  {
    feature: 'Co-Marketing Support',
    Essential: 'No',
    Growth: 'Basics',
    Premier: 'Full',
  },
  {
    feature: 'Dedicated Partner Manager',
    Essential: 'No',
    Growth: 'No',
    Premier: 'Yes',
  },
  {
    feature: 'White-Label Option',
    Essential: 'No',
    Growth: 'No',
    Premier: 'Yes',
  },
  {
    feature: 'Priority Support',
    Essential: 'No',
    Growth: 'Yes',
    Premier: 'Yes',
  },
];

export default function PartnersPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activePartner = partnerTypes[activeTab];

  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-wide relative pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="max-w-3xl">
            <AnimatedSection>
              <p className="section-label !text-accent-300 mb-4">Partner Program</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
                Become a NuCoach Partner
              </h1>
              <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-2xl">
                Scale your coaching practice with AI-powered simulations. No technology investment required.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partner Types Accordion */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="section-label mb-3">Three Ways to Partner</p>
            <h2 className="section-title mb-4">Find Your Partnership Path</h2>
            <p className="section-subtitle mx-auto">Whether you're an HR consultant, training company, or technology platform, there's a partnership model that fits your business.</p>
          </AnimatedSection>

          {/* Tab Buttons */}
          <AnimatedSection delay={100} className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              {partnerTypes.map((partner, i) => (
                <button
                  key={partner.id}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all text-center sm:text-left ${
                    activeTab === i
                      ? 'bg-gradient-accent text-white shadow-lg shadow-accent-500/25'
                      : 'bg-navy-50 text-navy-700 border border-navy-200 hover:border-accent-500'
                  }`}
                >
                  {partner.title}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100 min-h-[300px]">
              <h3 className="text-2xl font-bold text-navy-900 mb-3">{activePartner.title}</h3>
              <p className="text-navy-600 mb-6 text-lg">{activePartner.description}</p>
              <ul className="space-y-3">
                {activePartner.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-navy-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partnership Tiers Table */}
      <section className="section-padding bg-navy-50">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12">
            <p className="section-label mb-3">Transparent Pricing</p>
            <h2 className="section-title mb-4">Partnership Tiers</h2>
            <p className="section-subtitle mx-auto">Choose the tier that matches your goals and scale as you grow.</p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-navy-200">
                    <th className="text-left py-4 px-4 font-bold text-navy-900">Feature</th>
                    <th className="text-center py-4 px-4">
                      <div className="font-bold text-navy-900 mb-1">Essential</div>
                      <div className="text-xs text-navy-500">Getting Started</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="font-bold text-navy-900 mb-1">Growth</div>
                      <div className="text-xs text-navy-500">Most Popular</div>
                    </th>
                    <th className="text-center py-4 px-4">
                      <div className="font-bold text-navy-900 mb-1">Premier</div>
                      <div className="text-xs text-navy-500">Enterprise</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {partnerTiers.map((row, i) => (
                    <tr key={i} className={`border-b border-navy-100 ${i === partnerTiers.length - 1 ? '' : ''}`}>
                      <td className="py-4 px-4 text-navy-900 font-semibold">{row.feature}</td>
                      <td className="py-4 px-4 text-center text-navy-700">
                        {row.Essential === 'Yes' ? (
                          <Check className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : row.Essential === 'No' ? (
                          <X className="w-5 h-5 text-navy-300 mx-auto" />
                        ) : (
                          <span className="text-sm font-medium text-navy-900">{row.Essential}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-navy-700">
                        {row.Growth === 'Yes' ? (
                          <Check className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : row.Growth === 'No' ? (
                          <X className="w-5 h-5 text-navy-300 mx-auto" />
                        ) : (
                          <span className="text-sm font-medium text-navy-900">{row.Growth}</span>
                        )}
                      </td>
                      <td className="py-4 px-4 text-center text-navy-700 bg-accent-50 bg-opacity-50">
                        {row.Premier === 'Yes' ? (
                          <Check className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : row.Premier === 'No' ? (
                          <X className="w-5 h-5 text-navy-300 mx-auto" />
                        ) : (
                          <span className="text-sm font-medium text-navy-900">{row.Premier}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <h2 className="text-2xl font-bold text-navy-900 mb-2">Apply to Partner</h2>
                <p className="text-navy-600 mb-6">Tell us about your organization and partnership interests. Our team will review and reach out within two business days.</p>
                <ContactForm formType="partner" />
              </div>
            </AnimatedSection>

            {/* Right Column: Supporting Content */}
            <AnimatedSection delay={100}>
              <div>
                <div className="bg-gradient-accent rounded-2xl p-8 text-white mb-8">
                  <h3 className="text-xl font-bold mb-4">What Happens After You Apply?</h3>
                  <ul className="space-y-3 text-sm leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-accent-200">1.</span>
                      <span>We review your organization and partnership fit.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-accent-200">2.</span>
                      <span>Our partnerships team schedules a discovery call to discuss your goals and customer base.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-accent-200">3.</span>
                      <span>We propose a partnership tier and provide a detailed partner agreement.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-bold text-accent-200">4.</span>
                      <span>Upon execution, you get a dedicated partner manager, onboarding, and go-to-market support.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
                  <h3 className="font-bold text-navy-900 mb-3">Why Partners Love NuCoach</h3>
                  <ul className="space-y-2 text-sm text-navy-700">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Zero tech investment — leverage our platform</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Recurring revenue streams from white-label solutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Rapid time-to-value — deploy clients in weeks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span>Dedicated support and co-selling assistance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(33,134,235,0.2),_transparent_50%)]" />
        <div className="container-wide relative py-20 md:py-28 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Ready to scale your coaching practice?
            </h2>
            <p className="text-lg text-navy-200 mb-8 max-w-xl mx-auto">
              Apply to become a NuCoach partner and unlock new revenue streams, client differentiation, and go-to-market support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/partners" className="btn-primary text-base">
                Apply Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/demo" className="btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20">
                Schedule a Demo
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}

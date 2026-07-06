import { AnimatedSection } from '../components/UI';

const sections = [
  {
    title: 'Acceptance of Terms',
    content: 'By accessing and using the NuCoach platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to make changes to our Terms of Service at any time without notice. Continued use of the platform following the posting of revised Terms of Service means that you accept and agree to the changes.',
  },
  {
    title: 'Use of Service',
    content: 'You agree to use the NuCoach platform only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the platform. Prohibited behavior includes: harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, disrupting the normal flow of dialogue within our platform, and attempting to gain unauthorized access to our systems.',
  },
  {
    title: 'User Accounts',
    content: 'When you create an account with NuCoach, you are responsible for providing accurate, current, and complete information. You are also responsible for maintaining the confidentiality of your password and account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to terminate accounts that violate these terms.',
  },
  {
    title: 'Intellectual Property Rights',
    content: 'Unless otherwise stated, NuCoach owns the intellectual property rights for all material on the platform. All intellectual property rights are reserved. You may access this for your personal use subject to restrictions set in these terms and conditions. You must not: republish material from NuCoach, sell, rent, or sub-license material from the platform, reproduce, duplicate, or copy material from NuCoach for commercial purposes, or redistribute content from NuCoach unless content is specifically made for redistribution.',
  },
  {
    title: 'Limitation of Liability',
    content: 'The information on the NuCoach platform is provided on an "as-is" basis. NuCoach makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, NuCoach does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its platform.',
  },
  {
    title: 'Governing Law',
    content: 'These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in Bangalore, India.',
  },
  {
    title: 'Contact',
    content: 'If you have any questions about these Terms of Service, please contact us at hello@nucoach.ai or write to us at NuVeda Learning Pvt. Ltd., Bangalore, India. We will respond to your inquiry within 10 business days.',
  },
];

export default function TermsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-narrow relative pt-20 pb-12 md:pt-28 md:pb-16">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-navy-200">Last updated: June 2026</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-narrow space-y-12">
          {sections.map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 50}>
              <div>
                <h2 className="text-2xl font-bold text-navy-900 mb-4">{section.title}</h2>
                <p className="text-navy-600 leading-relaxed">{section.content}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
}

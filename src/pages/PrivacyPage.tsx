import { AnimatedSection } from '../components/UI';

const sections = [
  {
    title: 'Information We Collect',
    content: 'We collect information that you provide directly to us, such as when you sign up for an account, book a demo, or contact us. This may include your name, email address, company information, and other details necessary to provide our services. We also automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, and usage data.',
  },
  {
    title: 'How We Use Your Information',
    content: 'We use the information we collect to provide, maintain, and improve our services, communicate with you, respond to your inquiries, send you updates and marketing materials (with your consent), and comply with legal obligations. We may also use aggregated and anonymized data for analytics and research purposes to better understand how our platform is being used and to enhance user experience.',
  },
  {
    title: 'Data Sharing',
    content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may also disclose information when required by law or to protect our rights, privacy, safety, or property.',
  },
  {
    title: 'Data Security',
    content: 'We implement industry-standard security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of your information.',
  },
  {
    title: 'Your Rights',
    content: 'Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or export your data. If you wish to exercise any of these rights, please contact us at hello@nucoach.ai. We will respond to your request within 30 days.',
  },
  {
    title: 'Cookies',
    content: 'Our platform uses cookies and similar tracking technologies to enhance your experience, remember your preferences, and analyze usage patterns. You can control cookie preferences through your browser settings. Please note that disabling certain cookies may affect the functionality of our platform.',
  },
  {
    title: 'Contact Us',
    content: 'If you have any questions about this Privacy Policy or our privacy practices, please contact us at hello@nucoach.ai or write to us at NuVeda Learning Pvt. Ltd., Bangalore, India.',
  },
];

export default function PrivacyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(33,134,235,0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(39,171,131,0.1),_transparent_50%)]" />
        <div className="container-narrow relative pt-20 pb-12 md:pt-28 md:pb-16">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
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

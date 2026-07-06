import { Link } from 'react-router-dom';
import { Brain, Linkedin, Twitter, Youtube, Mail } from 'lucide-react';

const footerLinks = {
  Solutions: [
    { label: 'Leadership Development', href: '/solutions/leadership' },
    { label: 'Sales Enablement', href: '/solutions/sales' },
    { label: 'Enterprise Capability', href: '/solutions/enterprise' },
  ],
  Platform: [
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Results', href: '/results' },
    { label: 'Book a Demo', href: '/demo' },
    { label: 'Start a Pilot', href: '/pilot' },
  ],
  Partners: [
    { label: 'Become a Partner', href: '/partners' },
    { label: 'HR Consultants', href: '/partners' },
    { label: 'Training Companies', href: '/partners' },
  ],
  Company: [
    { label: 'About NuCoach', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-wide pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">NuCoach</span>
            </Link>
            <p className="text-sm text-navy-300 leading-relaxed mb-4">
              AI-driven roleplay & simulation platform for enterprise coaching, leadership development, and sales enablement.
            </p>
            <p className="text-xs text-navy-400">
              Built by NuVeda Learning Pvt. Ltd.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-navy-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-navy-400">
            &copy; 2026 NuVeda Learning Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-navy-400 hover:text-white transition-colors" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="mailto:hello@nucoach.ai" className="text-navy-400 hover:text-white transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

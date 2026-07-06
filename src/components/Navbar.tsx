import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain } from 'lucide-react';
import { useStickyNav } from '../hooks/useAnimations';

const navLinks = [
  { label: 'Solutions', href: '/solutions/leadership', hasDropdown: true,
    children: [
      { label: 'Leadership Development', href: '/solutions/leadership' },
      { label: 'Sales Enablement', href: '/solutions/sales' },
      { label: 'Enterprise Capability', href: '/solutions/enterprise' },
    ]
  },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Results', href: '/results' },
  { label: 'Partners', href: '/partners' },
  { label: 'About', href: '/about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const isScrolled = useStickyNav();
  const location = useLocation();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-navy-100' : 'bg-transparent'
    }`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg gradient-accent flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-navy-900' : 'text-white'
            }`}>
              NuCoach
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    to={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isScrolled
                        ? 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    } ${location.pathname.startsWith('/solutions') ? (isScrolled ? 'text-accent-600' : 'text-white') : ''}`}
                  >
                    {link.label}
                  </Link>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-navy-100 py-2 animate-fade-in">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50 hover:text-accent-600 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isScrolled
                      ? 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  } ${location.pathname === link.href ? (isScrolled ? 'text-accent-600' : 'text-white') : ''}`}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/pilot" className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              isScrolled ? 'text-navy-600 hover:text-navy-900' : 'text-white/80 hover:text-white'
            }`}>
              Start a Pilot
            </Link>
            <Link to="/demo" className="btn-primary text-sm !px-6 !py-2.5">
              Book a Demo
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X className={`w-6 h-6 ${isScrolled ? 'text-navy-900' : 'text-white'}`} />
              : <Menu className={`w-6 h-6 ${isScrolled ? 'text-navy-900' : 'text-white'}`} />
            }
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-navy-100 shadow-xl animate-fade-in">
          <div className="container-wide py-4 space-y-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.label}>
                  <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy-400 mt-2">Solutions</p>
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50 rounded-lg"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50 rounded-lg"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="pt-4 border-t border-navy-100 space-y-2">
              <Link to="/pilot" className="block px-4 py-2.5 text-sm text-navy-700 hover:bg-navy-50 rounded-lg" onClick={() => setMobileOpen(false)}>
                Start a Pilot
              </Link>
              <Link to="/demo" className="btn-primary w-full text-sm text-center" onClick={() => setMobileOpen(false)}>
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

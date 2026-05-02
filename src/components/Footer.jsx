import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-on-background text-white/90 mt-20 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 py-16 w-full max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="text-2xl font-bold flex items-center gap-3">
            <img src="/logo.png" alt="IIT Madras Logo" className="h-10 w-auto object-contain brightness-0 invert" />
            <span>CampusMarket</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Your secure, campus-only marketplace for buying and selling textbooks, electronics, and college essentials. Built for students, by students.
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="flex flex-col gap-6">
          <span className="text-white font-bold text-lg uppercase tracking-wider text-sm">Platform</span>
          <nav className="flex flex-col gap-4 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">How it works</a>
            <a href="#" className="hover:text-white transition-colors">Safety Tips</a>
            <a href="#" className="hover:text-white transition-colors">Community Guidelines</a>
          </nav>
        </div>

        {/* Links Column 2 */}
        <div className="flex flex-col gap-6">
          <span className="text-white font-bold text-lg uppercase tracking-wider text-sm">Support</span>
          <nav className="flex flex-col gap-4 text-white/50 text-sm">
            <a href="#" className="hover:text-white transition-colors">Help Center</a>
            <a href="#" className="hover:text-white transition-colors">Report an Issue</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </nav>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-6">
          <span className="text-white font-bold text-lg uppercase tracking-wider text-sm">Stay Updated</span>
          <p className="text-white/50 text-sm">Get notified about new listings in your categories.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your student email" 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-primary-container transition-all"
            />
            <button className="bg-primary px-4 py-3 rounded-xl hover:bg-primary-container transition-all">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-white/40 text-xs">
          <span>© 2024 CampusMarket Team. Powered by University WebOps.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">share</span></a>
            <a href="#" className="hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">mail</span></a>
            <a href="#" className="hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">hub</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

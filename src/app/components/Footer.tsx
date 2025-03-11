const Footer = () => {
    return (
        <footer className="w-full bg-neutral-900 text-white py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 justify-between">
                    {/* Contact Information Column - Left aligned */}
                    <div className="space-y-4 text-center md:text-left">
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <div className="space-y-3">
                            <p className="font-medium text-white">i-sieve technologies LIMITED</p>
                            <div className="space-y-2">
                                <a href="mailto:info@isievetech.com"
                                    className="block text-neutral-300 hover:text-white transition-colors">
                                    info@isievetech.com
                                </a>
                                <address className="not-italic text-neutral-300 leading-relaxed">
                                    1 Francis st. Dundalk<br />
                                    Louth A91 XK38<br />
                                    Ireland
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links Column - Center aligned */}
                    <div className="space-y-4 flex flex-col items-center text-center">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#solutions" className="text-neutral-300 hover:text-white transition-colors">
                                    Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-neutral-300 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-neutral-300 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#privacy" className="text-neutral-300 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links Column - Right aligned */}
                    <div className="space-y-4 text-center md:text-right">
                        <h3 className="text-lg font-semibold">Connect With Us</h3>
                        <div className="space-y-4">
                            <div className="flex justify-center md:justify-end space-x-4">
                                <a href="https://linkedin.com/company/isievetech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-neutral-300 hover:text-white transition-colors">
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-neutral-800">
                    <p className="text-sm text-neutral-400 text-center">
                        © {new Date().getFullYear()} ISieveTech. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
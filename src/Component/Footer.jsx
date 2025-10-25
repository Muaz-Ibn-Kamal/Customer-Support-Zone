import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-8 py-12">
      <Container>
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-semibold mb-2">
              CS — Ticket System
            </h3>
            <p className="text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Sales</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-2">Services</h4>
            <ul className="space-y-1 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-white font-semibold mb-2">Information</h4>
            <ul className="space-y-1 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Join Us</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <ul className="space-y-2 text-sm">
              {/* X (Twitter) */}
              <li className="flex items-center gap-2 hover:text-white transition">
                <span className="bg-white rounded-full p-1 text-black">
                  <Twitter size={14} />
                </span>
                @CS — Ticket System
              </li>

              {/* LinkedIn */}
              <li className="flex items-center gap-2 hover:text-white transition">
                <span className="bg-white rounded-full p-1 text-black">
                  <Linkedin size={14} />
                </span>
                @CS — Ticket System
              </li>

              {/* Facebook */}
              <li className="flex items-center gap-2 hover:text-white transition">
                <span className="bg-white rounded-full p-1 text-black">
                  <Facebook size={14} />
                </span>
                @CS — Ticket System
              </li>

              {/* Email */}
              <li className="flex items-center gap-2 hover:text-white transition">
                <span className="bg-white rounded-full p-1 text-black">
                  <Mail size={14} />
                </span>
                support@csz.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © 2025 <span className="text-white font-semibold">CS — Ticket System</span>. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
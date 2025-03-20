import React from "react";

// Define a type for each link object
interface Link {
  href: string;
  text: string;
}

// FooterSection component to handle each section (Company, Support, Follow Us)
const FooterSection = ({ title, links }: { title: string; links: Link[] }) => (
  <div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <ul className="mt-4 space-y-2 text-sm">
      {links && links.length > 0 ? (
        links.map((link, index) => (
          <li key={index}>
            <a href={link.href} className="hover:text-orange-500">
              {link.text}
            </a>
          </li>
        ))
      ) : (
        <li>No links available</li>
      )}
    </ul>
  </div>
);

const Footer = () => {
  // Links for each section in arrays
  const companyLinks = [
    { href: "#", text: "About Us" },
    { href: "#", text: "Careers" },
    { href: "#", text: "Press" },
    { href: "#", text: "Blog" },
  ];

  const supportLinks = [
    { href: "#", text: "Help Center" },
    { href: "#", text: "Contact Support" },
    { href: "#", text: "FAQs" },
  ];

  const followUsLinks = [
    { href: "#", text: "Facebook" },
    { href: "#", text: "Twitter" },
    { href: "#", text: "LinkedIn" },
    { href: "#", text: "Instagram" },
  ];

  return (
    <div className="bg-charcoal-800 text-white py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Using FooterSection component for each section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <FooterSection title="Company" links={companyLinks} />
          <FooterSection title="Support" links={supportLinks} />
          <FooterSection title="Follow Us" links={followUsLinks} />
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; 2025 Your Company, All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

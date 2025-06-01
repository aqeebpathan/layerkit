import Link from "next/link";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="px-4 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <Logo />
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.label}
                  className="text-sm text-white/50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerLinks = [
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Term & conditions" },
];

export default Footer;

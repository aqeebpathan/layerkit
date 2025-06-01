"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import Logo from "@/components/Logo";
import Button from "@/components/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <>
      <section className="fixed top-0 z-50 w-full py-4 lg:py-8">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-[27px] border border-white/15 bg-neutral-950/70 backdrop-blur md:rounded-full">
            <div className="grid grid-cols-2 items-center p-2 px-4 md:pr-2 lg:grid-cols-3">
              <div>
                <Logo />
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <nav className="flex gap-6 font-medium">
                  {navLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.label}
                      className="transition-colors duration-150 hover:text-lime-400"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="flex justify-end gap-2">
                <svg
                  role="button"
                  aria-label="Toggle Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-menu md:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <line
                    x1="3"
                    y1="6"
                    x2="21"
                    y2="6"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "-translate-y-1 rotate-45",
                    )}
                  ></line>
                  <line
                    x1="3"
                    y1="12"
                    x2="21"
                    y2="12"
                    className={twMerge("transition", isOpen && "opacity-0")}
                  ></line>
                  <line
                    x1="3"
                    y1="18"
                    x2="21"
                    y2="18"
                    className={twMerge(
                      "origin-left transition",
                      isOpen && "translate-y-1 -rotate-45",
                    )}
                  ></line>
                </svg>

                <Button variant="secondary" className="hidden md:inline">
                  Log In
                </Button>
                <Button variant="primary" className="hidden md:inline">
                  Sign Up
                </Button>
              </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  // transition={{ duration: 0.1 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-4 px-4 py-4">
                    {navLinks.map((link) => (
                      <Link
                        href={link.href}
                        key={link.label}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}

                    <Button variant="secondary" className="w-full md:hidden">
                      Log In
                    </Button>
                    <Button variant="primary" className="w-full md:hidden">
                      Sign Up
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[86px]"></div>
    </>
  );
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Integretions", href: "#integretions" },
  { label: "FAQ?s", href: "#faqs" },
];

export default Navbar;

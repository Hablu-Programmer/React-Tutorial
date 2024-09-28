import { nevItems } from "@/lib/db";
import { useEffect, useState } from "react";
import { Button, Container } from "~/common";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    // Add or remove the 'no-scroll' class to the body to prevent background scrolling
    const bodyClass = document.body.classList;

    if (isMenuOpen) {
      bodyClass.add("no-scroll");
    } else {
      bodyClass.remove("no-scroll");
    }

    // Cleanup when the component is unmounted or menu is closed
    return () => bodyClass.remove("no-scroll");
  }, [isMenuOpen]);

  const Logo = () => (
    <h1 className="font-space-grotesk text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold">
      GoverningDocs
    </h1>
  );

  return (
    <nav className="py-5 sm:py-8 xl:py-11 relative">
      <Container className="px-1.5 sm:px-5 xl:px-[26px]">
        <div className="flex justify-between items-center gap-2.5 px-2 pl-2.5 sm:px-5 xl:px-[30px] py-2 sm:py-3.5 xl:py-5 bg-white rounded-full">
          <Logo />

          {/* Navigation items for large screens */}
          <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-4">
            {nevItems.map(({ href, label }, i) => (
              <a href={href} key={i}>
                <p className="text-accent text-sm xl:text-base hover:text-primary transition-colors duration-150">
                  {label}
                </p>
              </a>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2.5">
            {/* Hamburger button for mobile */}
            <button
              className="lg:hidden block text-accent"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
              </div>
            </button>

            <Button>Get Started Today</Button>
          </div>
        </div>

        {/* Scrollable Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 overflow-y-auto p-6">
            <div className="flex justify-between items-center pb-6">
              <Logo />

              {/* Close Button */}
              <button
                className="self-end text-black text-2xl"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                &times;
              </button>
            </div>

            {/* Menu Items */}
            <div className="space-y-4">
              {nevItems.map(({ href, label }, i) => (
                <a
                  href={href}
                  key={i}
                  className="block text-lg text-accent hover:text-primary transition-colors duration-150"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

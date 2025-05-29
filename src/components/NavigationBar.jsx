import React, { useState, useEffect } from "react";
import { GradientDivider, OuterSpaceDivider } from "./decorations";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
];

export function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navbarBackground = isScrolled || isOpen
    ? "bg-outer-space/20 backdrop-blur-sm"
    : "bg-transparent";

  return (
    <nav
      className={`fixed w-full z-20 top-0 start-0 transition-colors duration-500 ease-in-out ${navbarBackground}`}
    >
      <div className="flex items-center justify-between w-full px-10 py-4">
        {/* Title */}
        <div className="flex items-center space-x-2">
          <img src="/assets/star.png" alt="Star" className="w-10 h-10" />
          <a href="#home" className="text-3xl font-neuepower font-[700]">
            Daniel Olaes
          </a>
        </div>

        {/* Nav + Hamburger */}
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="font-neuepower font-[500] relative transition-all duration-200 ease-in-out 
          before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-[1px] 
          before:bg-gradient-to-r before:from-lilac before:via-wisteria before:to-tropical-indigo 
          before:duration-200 before:ease-in-out hover:before:w-full 
          hover:text-transparent bg-clip-text bg-gradient-to-r from-lilac via-wisteria to-tropical-indigo"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="group inline-flex items-center p-2 w-10 h-10 justify-center md:hidden 
    text-outer-space transition-all duration-200 ease-in-out 
    focus:ring-gradient-to-r focus:from-lilac focus:via-wisteria focus:to-tropical-indigo"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <defs>
                <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#CE8DB8" /> {/* lilac */}
                  <stop offset="50%" stopColor="#BA9FDD" /> {/* wisteria */}
                  <stop offset="100%" stopColor="#9697D9" /> {/* tropical indigo */}
                </linearGradient>
              </defs>
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
                className="transition-all duration-300 ease-in-out group-hover:stroke-[url(#gradientStroke)]"
              />
            </svg>
          </button>

        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-1000 ease-in-out transform origin-top
    ${isOpen ? "max-h-[500px] opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-95"}
  `}
      >
        <ul className="flex flex-col p-4 space-y-2 font-medium rounded-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="font-neuepower font-[500] block py-2 px-3 relative transition-all duration-200 ease-in-out 
            before:absolute before:left-0 before:-bottom-2 before:w-0 before:h-[1px] 
            before:bg-gradient-to-r before:from-lilac before:via-wisteria before:to-tropical-indigo 
            before:duration-200 before:ease-in-out hover:before:w-full 
            hover:text-transparent bg-clip-text bg-gradient-to-r from-lilac via-wisteria to-tropical-indigo"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <GradientDivider isScrolled={isScrolled} isOpen={isOpen} />
      <OuterSpaceDivider isScrolled={isScrolled} isOpen={isOpen} />
    </nav>
  );
}

export default NavigationBar;
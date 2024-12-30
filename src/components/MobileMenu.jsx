import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const MobileMenu = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div>
      <div
        className="container mx-auto flex justify-end items-center 
      py-4 px-6 md:px-20 lg:px-32 bg-transparent"
      >
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="menu-icon"
        />
      </div>
      <div
        className={`md:hidden
         ${showMobileMenu ? "fixed w-full" : "h-0 w-0"}
        right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-4"
            alt="cross icon"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            href="#Header"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            href="#About"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            href="#Projects"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "About", href: "#" },
    { name: "Skills", href: "#" },
    { name: "Projects", href: "#" },
    { name: "Experience", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <>
      <div>
        <header className="absolute inset-x-0 top-0 z-50 h-[80px]">
          <nav className="flex items-center justify-between p-6 lg:px-8 bg-black">
            <div className="flex lg:flex-1 sm:gap-4 gap-2 lg:gap-6 md:text-[25px] text-[20px] text-white">
              <FaGithub />
              <FaInstagram />
              <FaLinkedin />
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <RxHamburgerMenu
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="md:text-[18px] text-[15px] font-semibold leading-6 text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="font-semibold leading-6 text-white md:text-[25px] text-[20px]"
              >
                <SiGmail />
              </a>
            </div>
          </nav>
          {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div className="fixed inset-y-0 right-0 z-50 w-[30%] overflow-y-auto bg-gray-900 text-white px-6 py-6 sm:max-w-sm">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <RxCross2 className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
                <div className="mt-6 flow-root">
                  <div className="-my-6">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-50"
                      >
                        <SiGmail />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Navbar;

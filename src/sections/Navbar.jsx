import React from "react";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justfify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Vikrant
          </a>
          <button>
            <img src="assets/menu.svg" className="w-6 h-6" alt="toggle" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

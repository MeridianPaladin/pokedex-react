import React from "react";
import Link from "next/link";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="h-10 hover:h-11 duration-200 cursor-pointer"
      >
        <img src="/img/pokeBall-icon.svg" className="h-full" />
      </button>
      <div
        className={`${
          isOpen ? " translate-x-0" : "translate-x-full"
        } transform fixed top-0 right-0 bottom-0 md:w-[250px] z-20 p-6 flex flex-col md:items-end bg-dark4/90 text-white w-full items-center gap-6 overflow-auto ease-in-out transition-all duration-300`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="text-2xl mb-2 self-end"
        >
          x
        </button>
        <Link href="/">Home</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/generations">Generations</Link>
      </div>
    </div>
  );
};

export default BurgerMenu;

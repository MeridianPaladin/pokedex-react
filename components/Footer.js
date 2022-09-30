import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-14 flex justify-between items-center p-4 bg-black text-white rounded-t-xl -mt-6 relative">
      <div>
        <p>
          Developed by <b>MeridianPaladin</b>
        </p>
      </div>
      <div className="flex items-center">
        <a href="https://github.com/MeridianPaladin/pokedex-react.git" target="_blank">
          <img src="/img/github-logo.png" className="h-5 w-5 mr-2" />
        </a>

        <p className="text-yellow-500 font-bold">v1.1</p>
      </div>
    </div>
  );
};

export default Footer;

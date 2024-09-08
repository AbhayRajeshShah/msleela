import React from "react";

const Main4 = () => {
  return (
    <div className="bg-black py-10 flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
          UX Research
        </button>
        <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
          UI Design
        </button>
        <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
          Branding
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 justify-center">
        <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
          Prototyping
        </button>
        <button className="tracking-widest bg-[#151515] text-white px-10 py-3 sm:px-14 sm:py-4 lg:px-16 lg:py-4 rounded-[1.5rem] shadow-[3px_3px_4px_0px_rgba(140,55,207,1)] border border-white text-sm sm:text-base lg:text-lg">
          Marketing
        </button>
      </div>
    </div>
  );
};

export default Main4;



import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TEMPLATE } from "./TemplateListSection";

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className="relative p-6 shadow-lg rounded-lg bg-white flex flex-col gap-4 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden min-h-[300px] h-auto">
        
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-purple-500 opacity-0 hover:opacity-30 transition-opacity duration-700"></div>

        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center relative z-10">
          <Image src={item.icon} alt="icon" width={40} height={40} className="rounded-full" />
        </div>

        {/* Title */}
        <h2 className="font-bold text-xl text-gray-900 relative z-10 text-center flex-grow">{item.name}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3 relative z-10 flex-grow">
          {item.desc}
        </p>

        {/* Subtle Border Highlight */}
        <div className="absolute inset-0 border border-transparent rounded-lg hover:border-indigo-400 transition-all duration-500"></div>
      </div>
    </Link>
  );
}

export default TemplateCard;



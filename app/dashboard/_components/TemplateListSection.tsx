


import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";
import Footer from "./Footer"; // 

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPromt: string;
  form: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({ userSearchInput }: any) {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className="min-h-screen p-6 sm:p-10 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800">
        Explore Our Templates
      </h1>

      {/* Single Div for all Template Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {templateList.map((item: TEMPLATE, index: number) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <TemplateCard {...item} />
          </div>
        ))}
      </div>

     
    </div>
  );
}

export default TemplateListSection;

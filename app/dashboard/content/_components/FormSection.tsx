

"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import { Icon, Loader2Icon } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: any;
    loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
    const [formData, setFormData] = useState<any>({});

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        userFormInput(formData);
    };

    return (
        <div className="p-6 shadow-lg border rounded-lg bg-white max-w-md mx-auto transition-transform transform hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
                <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70} className="rounded-full shadow-md" />
                <div>
                    <h2 className="font-bold text-2xl text-primary">{selectedTemplate?.name}</h2>
                    <p className="text-gray-600 text-sm">{selectedTemplate?.desc}</p>
                </div>
            </div>

            <form className="mt-4" onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div key={index} className="my-4">
                        <label className="font-semibold text-gray-700">{item.label}</label>
                        {item.field === 'input' ? (
                            <Input
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                                className="border rounded-md p-2 mt-1 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        ) : item.field === 'textarea' ? (
                            <Textarea
                                name={item.name}
                                required={item?.required}
                                onChange={handleInputChange}
                                className="border rounded-md p-2 mt-1 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        ) : null}
                    </div>
                ))}
                <Button type="submit" className="w-full py-3 mt-4 bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300" disabled={loading}>
                    {loading && <Loader2Icon className="animate-spin mr-2" />}
                    Generate Content
                </Button>
            </form>
        </div>
    );
}

export default FormSection;



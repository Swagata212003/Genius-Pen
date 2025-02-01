"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";


function SideNav (){

    const MenuList=[
        {
        name:'Home',
        icon:Home,
        path:'/dashboard'
        },
        {
            name:'History',
            icon:FileClock,
            path:'/dashboard/history'
            },
       
        {
                    name:'Setting',
                    icon:Settings,
                    path:'/dashboard/settings'
                    },
    ]

    const path=usePathname();
    useEffect(() =>{
        console.log(path);
    },[])

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <div className='flex justify-center'>
            <Image src="data:image/jpeg;base64,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" alt='logo.svg' width={120} height={100}/>
        </div>
            <hr className='my-6 border'/>
            <div className='mt-3'>
                {MenuList.map((menu,index) =>(
                    <Link href={menu.path}>
                    <div className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
                    ${path==menu.path&&'bg-primary text-white'}
                    `}>
                        <menu.icon className='h-6 w-6'/>
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                    </Link>
                ))}
            </div>
            <div className="absolute bottom-10 left-0 w-full">
            </div>
        </div>
    )
}

export default SideNav;





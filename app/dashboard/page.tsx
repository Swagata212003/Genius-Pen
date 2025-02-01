// "use client"
// import React, { useState } from "react";
// import SearchSection from "./_components/SearchSection";
// import TemplateListSection from "./_components/TemplateListSection";
// function Dashboard (){
//     const [userSearchInput, setUserSearchInput]=useState<string>()
//     return (
//         <div>
//             <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
//             <TemplateListSection userSearchInput={userSearchInput}/>
//         </div>
//     )
// }

// export default Dashboard;


"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import TemplateListSection from "./_components/TemplateListSection";
import Footer from "./_components/Footer"; // Import the Footer component

function Dashboard() {
    const [userSearchInput, setUserSearchInput] = useState<string>("");

    return (
        <div className="flex flex-col min-h-screen"> {/* Make sure the layout can grow */}
            <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
            <TemplateListSection userSearchInput={userSearchInput} />
            <Footer /> {/* Add the Footer here */}
        </div>
    );
}

export default Dashboard;

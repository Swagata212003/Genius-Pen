// import { UserProfile } from "@clerk/nextjs";
// import exp from "constants";
// import React from "react";


// function Settings() {
//     return(
//             <div className="flex items-center justify-center h-full">
//                  <UserProfile/>
//             </div>
       
//     )
           
//     }
// export default Settings;

import { UserProfile } from "@clerk/nextjs";
import React from "react";

function Settings() {
    return (
        <div className="flex items-center justify-center h-full">
            <UserProfile routing="hash" /> {/* Enable hash-based routing */}
        </div>
    );
}

export default Settings;

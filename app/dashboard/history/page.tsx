



// "use client"; 

// import React, { useEffect, useState } from "react";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import moment from "moment";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ArrowLeft, ClipboardCopy } from "lucide-react";

// export interface HistoryRecord {
//   id: number;
//   formData: string;
//   aiResponse: string;
//   templateSlug: string;
//   createdBy: string;
//   createdAt: string;
// }

// function HistorySection() {
//   const [history, setHistory] = useState<HistoryRecord[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedId, setExpandedId] = useState<number | null>(null); // Track which response is expanded

//   const fetchHistory = async () => {
//     setLoading(true);
//     try {
//       const records = await db.select().from(AIOutput); // Fetch records from DB
//       setHistory(records);
//     } catch (error) {
//       console.error("Error fetching history:", error);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchHistory();
//   }, []);

//   const MAX_RESPONSE_LENGTH = 100; // Maximum length of the AI response to display

//   const toggleResponse = (id: number) => {
//     setExpandedId(expandedId === id ? null : id);
//   };

//   const copyToClipboard = (text: string) => {
//     navigator.clipboard.writeText(text);
//   };

//   return (
//     <div className="p-10 max-w-7xl mx-auto">
//       {/* Back Button */}
//       <div className="mb-8">
//         <Link href="/dashboard">
//           <Button variant="outline" className="flex items-center gap-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//             <ArrowLeft className="w-4 h-4" />
//             Back to Dashboard
//           </Button>
//         </Link>
//       </div>

//       {/* Header */}
//       <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">AI Content History</h2>

//       {/* Loading State */}
//       {loading ? (
//         <p className="text-xl text-gray-500">Fetching your history...</p>
//       ) : history.length > 0 ? (
//         <div className="space-y-6">
//           {history.map((record) => (
//             <div key={record.id} className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
//               {/* Template Info */}
//               <div className="flex-1">
//                 <h3 className="text-lg font-semibold text-indigo-600 mb-2">{record.templateSlug}</h3>
//                 <p className="text-sm text-gray-500"><span className="font-medium">Form Data:</span> {record.formData}</p>
//                 <p className="text-sm text-gray-500"><span className="font-medium">Created By:</span> {record.createdBy}</p>
//                 <p className="text-sm text-gray-500"><span className="font-medium">Created At:</span> {moment(record.createdAt, 'DD/MM/yyyy').format('MMMM Do YYYY, h:mm:ss a')}</p>
//               </div>

//               {/* AI Response */}
//               <div className="flex-1">
//                 {expandedId === record.id ? (
//                   <div className="text-gray-800">
//                     {record.aiResponse}
//                     <span 
//                       className="text-indigo-500 cursor-pointer ml-2 hover:text-indigo-700 transition-all duration-200" 
//                       onClick={() => toggleResponse(record.id)}
//                     >
//                       {" "}Read Less
//                     </span>
//                   </div>
//                 ) : (
//                   <div className="text-gray-800">
//                     {record.aiResponse.length > MAX_RESPONSE_LENGTH
//                       ? `${record.aiResponse.substring(0, MAX_RESPONSE_LENGTH)}...`
//                       : record.aiResponse}
//                     {record.aiResponse.length > MAX_RESPONSE_LENGTH && (
//                       <span 
//                         className="text-indigo-500 cursor-pointer ml-2 hover:text-indigo-700 transition-all duration-200" 
//                         onClick={() => toggleResponse(record.id)}
//                       >
//                         {" "}Read More
//                       </span>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Copy to Clipboard */}
//               <div className="flex-shrink-0">
//                 <button
//                   className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-200"
//                   onClick={() => copyToClipboard(record.aiResponse)}
//                 >
//                   <ClipboardCopy className="w-5 h-5" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-xl text-gray-500">No history records found.</p>
//       )}
//     </div>
//   );
// }

// export default HistorySection;

"use client";

import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import moment from "moment";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, ClipboardCopy } from "lucide-react";

export interface HistoryRecord {
  id: number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

function HistorySection() {
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<number | null>(null); // Track which response is expanded
  const [page, setPage] = useState(1); // Track current page
  const [totalRecords, setTotalRecords] = useState(0); // Track total records for pagination
  const PAGE_SIZE = 10; // Number of records to fetch per page

  // Function to fetch history records with pagination
  const fetchHistory = async (pageNumber: number) => {
    setLoading(true);
    try {
      const records = await db
        .select()
        .from(AIOutput)
        .limit(PAGE_SIZE)
        .offset((pageNumber - 1) * PAGE_SIZE); // Adjust offset based on the current page
      setHistory(records);

      // Fetch total records for pagination purposes (if supported by your database)
      const totalRecordsResponse = await db.count().from(AIOutput);
      setTotalRecords(totalRecordsResponse);
    } catch (error) {
      console.error("Error fetching history:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory(page);
  }, [page]); // Fetch data whenever the page changes

  const MAX_RESPONSE_LENGTH = 100; // Maximum length of the AI response to display

  const toggleResponse = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="p-10 max-w-7xl mx-auto">
      {/* Back Button */}
      <div className="mb-8">
        <Link href="/dashboard">
          <Button variant="outline" className="flex items-center gap-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>
        </Link>
      </div>

      {/* Header */}
      <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">AI Content History</h2>

      {/* Loading State */}
      {loading ? (
        <p className="text-xl text-gray-500">Fetching your history...</p>
      ) : history.length > 0 ? (
        <div className="space-y-6">
          {history.map((record) => (
            <div key={record.id} className="bg-white shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start md:items-center border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
              {/* Template Info */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-indigo-600 mb-2">{record.templateSlug}</h3>
                <p className="text-sm text-gray-500"><span className="font-medium">Form Data:</span> {record.formData}</p>
                <p className="text-sm text-gray-500"><span className="font-medium">Created By:</span> {record.createdBy}</p>
                <p className="text-sm text-gray-500"><span className="font-medium">Created At:</span> {moment(record.createdAt, 'DD/MM/yyyy').format('MMMM Do YYYY, h:mm:ss a')}</p>
              </div>

              {/* AI Response */}
              <div className="flex-1">
                {expandedId === record.id ? (
                  <div className="text-gray-800">
                    {record.aiResponse}
                    <span 
                      className="text-indigo-500 cursor-pointer ml-2 hover:text-indigo-700 transition-all duration-200" 
                      onClick={() => toggleResponse(record.id)}
                    >
                      {" "}Read Less
                    </span>
                  </div>
                ) : (
                  <div className="text-gray-800">
                    {record.aiResponse.length > MAX_RESPONSE_LENGTH
                      ? `${record.aiResponse.substring(0, MAX_RESPONSE_LENGTH)}...`
                      : record.aiResponse}
                    {record.aiResponse.length > MAX_RESPONSE_LENGTH && (
                      <span 
                        className="text-indigo-500 cursor-pointer ml-2 hover:text-indigo-700 transition-all duration-200" 
                        onClick={() => toggleResponse(record.id)}
                      >
                        {" "}Read More
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Copy to Clipboard */}
              <div className="flex-shrink-0">
                <button
                  className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-all duration-200"
                  onClick={() => copyToClipboard(record.aiResponse)}
                >
                  <ClipboardCopy className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-gray-500">No history records found.</p>
      )}

     
    </div>
  );
}

export default HistorySection;




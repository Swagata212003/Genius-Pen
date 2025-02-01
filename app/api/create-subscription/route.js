
// import Razorpay from 'razorpay'
// export async function POST(req,res){
//         let instance = new Razorpay({
//             key_id:process.env.RAZORPAY_KEY_ID,
//             key_secret:process.env.RAZORPAY_SECRET_KEY
//         })

//         const result=await instance.subscriptions.create({plan_id:process.env,SUBSCRIPITION_PLAN_ID,
//             customer_notify:1,
//             quantity:1,
//             total_count:1,
//             addons:{
//                 key1:'Note'
//             }
//         });
//         return NextResponse.json(result);
// }

// import Razorpay from 'razorpay';
// import { NextResponse } from 'next/server';  // Correct import for Next.js response

// export async function POST(req, res) {
//     // Initialize Razorpay instance with environment variables
//     const instance = new Razorpay({
//         key_id: process.env.RAZORPAY_KEY_ID,
//         key_secret: process.env.RAZORPAY_SECRET_KEY
//     });

//     try {
//         // Create a subscription
//         const result = await instance.subscriptions.create({
//             plan_id: process.env.SUBSCRIPITION_PLAN_ID, // Fixed the typo
//             customer_notify: 1,
//             quantity: 1,
//             total_count: 1,
//             addons: [
//                 {
//                     item: {
//                         name: 'Note',
//                         amount: 100,
//                         currency: 'INR'
//                     }
//                 }
//             ]
//         });

//         // Return the result as a JSON response
//         return NextResponse.json(result);
//     } catch (error) {
//         console.error('Error creating subscription:', error);
//         // Return an error response
//         return NextResponse.json({ error: 'Failed to create subscription' }, { status: 500 });
//     }
}

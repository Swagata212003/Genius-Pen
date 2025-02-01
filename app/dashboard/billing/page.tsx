// "use client"
// import { Button } from '@/components/ui/button';
// import React from 'react';
// import axios from 'axios'

// function Billing() {
//     const CreateSubscription=()=>{
//             axios.post('/api/create-subscription',{}).then(resp=>{
//                 console.log(resp.data);
//             })
//     }
//     return (
//         <div style={styles.container}>
//             {/* Free Plan Card */}
//             <div style={styles.card}>
//                 <h2 style={styles.cardTitle}>Free Plan</h2>
//                 <p style={styles.cardPrice}>$0 / month</p>
//                 <ul style={styles.featuresList}>
//                     <li>✔ 1 User</li>
//                     <li>✔ Basic Features</li>
//                     <li>✔ Limited Support</li>
//                 </ul>
//                 <Button
//                 >Currently Active plan</Button>
//             </div>

//             {/* Paid Plan Card */}
//             <div style={{ ...styles.card, ...styles.paidCard }}>
//                 <h2 style={styles.cardTitle}>Paid Plan</h2>
//                 <p style={styles.cardPrice}>$49 / month</p>
//                 <ul style={styles.featuresList}>
//                     <li>✔ 10 Users</li>
//                     <li>✔ Premium Features</li>
//                     <li>✔ 24/7 Support</li>
//                 </ul>
//                 <button onClick={()=>CreateSubscription()}
//                 style={styles.button} style={styles.button}>Choose Paid</button>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'space-around',
//         padding: '20px',
//     },
//     card: {
//         width: '300px',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         textAlign: 'center',
//         backgroundColor: '#f9f9f9',
//     },
//     paidCard: {
//         backgroundColor: '#ffe4e1',
//     },
//     cardTitle: {
//         fontSize: '24px',
//         margin: '10px 0',
//     },
//     cardPrice: {
//         fontSize: '20px',
//         fontWeight: 'bold',
//         margin: '10px 0',
//     },
//     featuresList: {
//         listStyleType: 'none',
//         padding: 0,
//         margin: '20px 0',
//         fontSize: '16px',
//     },
//     button: {
//         backgroundColor: '#007bff',
//         color: 'white',
//         padding: '10px 20px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
// };

// export default Billing;


// "use client";
// import { Button } from '@/components/ui/button';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { error } from 'console';
// import { Loader2Icon } from 'lucide-react';
// import payments from 'razorpay/dist/types/payments';
// import { UserSubscription } from '@/utils/schema';
// import { EmailAddress } from '@clerk/nextjs/server';
// import moment from 'moment';
// import { useUser } from '@clerk/nextjs';
// import { db } from '@/utils/db';

// function Billing() {

//     const [loading, setLoading] = useState(false);
//     const {user} = useUser();
//     const CreateSubscription = () => {
//         axios.post('/api/create-subscription', {})
//             .then(resp => {
//                 console.log('Subscription created:', resp.data);
//             })
//             .catch(error => {
//                 console.error('Error creating subscription:', error.response?.data || error.message);
//                 OnPayment(resp.data.id)
//             },(error)=>{
//                 setLoading(false);
//             });
//         }


//         const OnPayment=(subId:string)=>{
//             const options={
//                     "key":process.env.Next_public_RAZORPAY_KEY_ID,
//                     "subscription_id":subId,
//                     "name":'GeniusPen',
//                     description:'Monthly Subscription',
//                     handler:async(resp:any)=>{
//                         console.log(resp);
//                         if(resp){
//                             SaveSubscription(resp?.razorpay_payment_id)
//                         }
//                         setLoading(false);
//                     }
//             }

//             const rzp = new window.Razorpay(options);
//             rzp.open()
//         }

//         const SaveSubscription=async(paymentId:string)=>{
//             const result = await db.insert(UserSubscription).values({
//                 email:user?.primaryEmailAddress?.emailAddress,
//                 userName:user?fullName,
//                 active:true,
//                 paymentId:paymentId,
//                 joinDate:moment().format('DD/MM/YYYY')
//             });
//             console.log(result);
//         }

//     return (
//         <div style={styles.container}>
            
//             <script src="https://checkout.razorpay.com/v1/checkout.js"></script>

//             {/* Free Plan Card */}
//             <div style={styles.card}>
//                 <h2 style={styles.cardTitle}>Free Plan</h2>
//                 <p style={styles.cardPrice}>$0 / month</p>
//                 <ul style={styles.featuresList}>
//                     <li>✔ 1 User</li>
//                     <li>✔ Basic Features</li>
//                     <li>✔ Limited Support</li>
//                 </ul>
//                 <Button>Currently Active plan</Button>
//             </div>

//             {/* Paid Plan Card */}
//             <div style={{ ...styles.card, ...styles.paidCard }}>
//                 <h2 style={styles.cardTitle}>Paid Plan</h2>
//                 <p style={styles.cardPrice}>$49 / month</p>
//                 <ul style={styles.featuresList}>
//                     <li>✔ 10 Users</li>
//                     <li>✔ Premium Features</li>
//                     <li>✔ 24/7 Support</li>
//                 </ul>
//                 <button
//                 disabled={loading}
//                  onClick={CreateSubscription} style={styles.button}>
//                     {loading&&<Loader2Icon className='animate-spin'/>}
//                     Choose Paid</button>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'space-around',
//         padding: '20px',
//     },
//     card: {
//         width: '300px',
//         padding: '20px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         textAlign: 'center',
//         backgroundColor: '#f9f9f9',
//     },
//     paidCard: {
//         backgroundColor: '#ffe4e1',
//     },
//     cardTitle: {
//         fontSize: '24px',
//         margin: '10px 0',
//     },
//     cardPrice: {
//         fontSize: '20px',
//         fontWeight: 'bold',
//         margin: '10px 0',
//     },
//     featuresList: {
//         listStyleType: 'none',
//         padding: 0,
//         margin: '20px 0',
//         fontSize: '16px',
//     },
//     button: {
//         backgroundColor: '#007bff',
//         color: 'white',
//         padding: '10px 20px',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//     },
// };

// export default Billing;


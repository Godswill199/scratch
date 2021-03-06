import React from 'react'
import Payment from '../../imgs/pay.svg'
import PageDivider from '../objects/PageDivider'
import BackArrow from '../objects/BackArrow';

function payment() {
    return (
<div className="flex">

<div className="flex justify-between back-icon mx-4">
   <BackArrow to="/" hash="#game-categories-tab" className="text-black" />
                   
   </div>

<div class="max-w-full min-w-sm mx-48 my-8 rounded text-white shadow-lg my-2">
  <div>
  <img class="w-4/5" src={Payment} alt="Sunset in the mountains" />

 
  <div className="justify-between my-8">
    <a href="https://selar.co/m/scratch9ja" className="custom-btn with-icon">
       <span>Pay with Card</span>
 </a>

 <a href="https://flutterwave.com/store/scratch9ja?_ga=2.69593744.1660268240.1618829312-1201728733.1618829312" className="custom-btn with-icon mx-4 ">
       <span>Pay via USSD</span>
 </a>

    </div>
  </div>
 
  <PageDivider />    
  <div class="px-6 py-4">
   
            
    <div class="font-bold text-xl mb-2">Kindly make a bank transfer to the account below</div>
     <div class=" text-lg mb-2"> <span className="text-red-700"> BANK:</span> Access Bank </div>
    <div class=" text-lg mb-2"> <span className="text-red-700"> ACCOUNT NUMBER:</span> 0063528722  </div>
    <div class=" text-lg mb-2"> <span className="text-red-700"> ACCOUNT NAME:</span> Hottub Pinault  </div>

  <PageDivider />   
    <div class=" text-lg mb-2">PS: After you make transfer; Kindly send a proof of payment to account@scratch9ja.com  </div>
  <p class="text-xl mb-2">
    Your full name 
  <br/>
      Name of Game Cards You Purchased? 
      <br/>
      Your delivery address - 
      <br/>
      Where you want to play(Online/Offline)
      <br/>
      Your valid/working phone number-
      <br/>
      Thank you. We look forward to you experiencing the fun and winning playing the Scratch9ja games.
   </p>
  </div>
</div>
</div>  
    )
}

export default payment

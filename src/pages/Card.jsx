import React from "react";
import shop from '../assets/shop.png'
import shop2 from '../assets/shop2.jpg'
import shop3 from '../assets/shop3.jpg'
import shop4 from '../assets/shop4.jpg'
import shop5 from '../assets/shop5.jpg'


const Card = () => {
  return (
    <div className="w-[93.75em] mx-auto m-5 relative">
      <div class="grid justify-start grid-cols-12 gap-4 ">
        <div className="bg-slate-100 hover:border-2 hover:border-yellow-500	 h-10 cursor-pointer	 rounded-2xl relative pt-[36px] pb-[81px] border-2 border-neutral-300"> 
           <img className="w-16 justify-items-center h-16 absolute top-1 left-5 object-cover border-2  border-neutral-900 rounded-full" src={shop} />
           <div className="absolute bottom-5  hover:text-yellow-400	 left-5"><p>All Items</p> </div>
        </div>
        <div className="bg-slate-100 hover:border-2 hover:border-yellow-500 rounded-2xl cursor-pointer	 border-2 relative border-neutral-300">
            <img className="w-16 h-16 object-cover border-2 absolute top-1 left-5 border-neutral-900 rounded-full" src={shop3} />
            <div className="absolute bottom-5 left-7 hover:text-yellow-400"><p>Pizza</p></div>
        </div>
        <div className="bg-slate-100 hover:border-2 hover:border-yellow-500 rounded-2xl cursor-pointer	  border-2 relative border-neutral-300">
            <img className="w-16 h-16 object-cover border-2 absolute top-1 left-5 border-neutral-900 rounded-full" src={shop4}/>
            <div className="absolute bottom-5 left-5 hover:text-yellow-400"><p>Set Menu</p></div>
        </div>
        <div className="bg-slate-100 hover:border-2 hover:border-yellow-500 rounded-2xl cursor-pointer	 border-2 relative border-neutral-300">
             <img className="w-16 h-16 object-cover border-2 absolute top-1 left-5 border-neutral-900 rounded-full" src={shop5}/>
             <div>
              <p className="absolute bottom-5 left-7 hover:text-yellow-400">Burger</p>
             </div>
        </div>
        <div className="bg-slate-100 hover:border-2 hover:border-yellow-500 cursor-pointer	 rounded-2xl border-2 relative border-neutral-300 ">
            <img className="w-16 h-16 object-cover justify-items-center absolute top-1 left-5 border-2 border-neutral-900 rounded-full" src={shop2} />
            <div className="absolute bottom-1 left-7 hover:text-yellow-400 ">Fries & Shake</div>
        </div>
      </div>
    </div>
  );
};

export default Card;

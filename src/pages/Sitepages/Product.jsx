import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCreditCard,
    faPaperPlane,
    faComment
  } from "@fortawesome/free-solid-svg-icons";
import product_1 from "../../assets/product_1.jpg"
const Product = () => {
    return (
        <div className='h-[2000px] w-full bg-slate-50 mb-5'>
                 <div className='max-w-7xl h-[1000px] mt-2 bg-white mx-auto'>
                       <div className='grid p-3 grid-cols-3 gap-3'>
                           <div>
                           <img src={product_1} />
                           </div>
                           <div className='col-span-2 h-4 p-4'>
                           <div className='flex justify-between border-b-2 border-slate-50'>
                              <p>BBQ Chicken Burger</p>
                              <p>BDT200.00</p>
                           </div>
                           <div className='flex gap-5 mt-3 '>
                            <h1 className='bg-white text-black border font-bold py-2 px-4 rounded'>Details</h1>
                            <h1 className='bg-white text-black border font-bold py-2 px-4 rounded'>Review</h1>
                           </div>
                           <p className='mt-3 border p-1 font-serif opacity-50'>
                           Burgers are considered an American food but are popular around the world. In Japan, teriyaki burgers are popular. In India, vegetarian burgers are created using potato and mint instead of a meat patty. 
                           Regardless of its content, a burger should always be properly cooked to be safe. Rare burgers carry the risk of bacterial infection and food poisoning.
                           First of all, typical hamburgers contain no ham. The patty is often made from ground beef. If you order a buffalo burger in the U.S., there's no buffalo in there, either. The patty is made from bison meat, which is generally considered healthier. Other options to make a burger are ground turkey or chicken meat. Vegetarian and vegan options include patties made of potatoes, black beans, or chickpeas.
                           Most burgers at restaurants or fast food outlets contain beef. The beef is ground and shaped into a patty. This patty is grilled and placed between the halves of a sesame seed bun. The process for making a burger from bison or turkey meat is similar.
                           Though burgers provide protein and other nutrients, they're not seen as a healthy food option. That's because they're high in saturated fat and cholesterol. They're also often bundled with sodas and french fries, which contain large amounts of sugar and saturated fats. 

                          Commercially sold hamburgers often contain a 4-ounce (120 grams) or 6-ounce (180 grams) patty of ground beef or other meat. Current recommendations are for adults to eat 70 grams or less of red meat a day. Beef, lamb, mutton, venison, pork, bison, and veal are all red meat, so a single burger exceeds this recommendation. 

                          The type of meat also affects how healthy your burger is. Most beef available is from corn-fed cows. Even lean cuts of beef have 7 grams or more of fat per 100 grams. 

                        Bison meat is healthier. Lean cuts of bison meat contain less than 2 grams of fat per 100-gram portions.
                        which is generally considered healthier. Other options to make a burger are ground turkey or chicken meat. Vegetarian and vegan options include patties made of potatoes, black beans, or chickpeas. Most burgers at restaurants or fast food outlets contain beef.which contain large amounts of sugar and saturated fats. Commercially sold hamburgers often contain a 4-ounce (120 grams) or 6-ounce (180 grams) patty of ground beef or other meat. Current recommendations are for adults to eat 70 grams or less of red meat a day. Beef, lamb, mutton, venison, pork, bison, and veal are all red meat, so a single burger exceeds this recommendation. The type of meat also affects how healthy your burger is.a 4-ounce (120 grams) or 6-ounce (180 grams) patty of ground beef or other meat. Current recommendations are for adults to eat 70 grams or less of red meat a day. Current recommendations are for adults to eat 70 grams or less of red meat a day. 
                           </p>
                        <button className='w-full text-center mt-3 h-14 border hover:bg-black hover:text-white border-black bg-white duration-75 text-slate-950 '> <FontAwesomeIcon icon={faCreditCard} /> <span className=' antialiased font-semibold	font-mono	'> Buy Now</span></button>
                        <div className='flex items-center justify-between p-3 bg-white border border-slate-600	 '>
                                 <p className='opacity-50'>Categories</p>
                                 <button className='bg-black text-white font-bold py-1 px-4 rounded-full'>Burger</button>
                        </div>
                        <div className='flex items-center justify-between p-3 bg-white border border-slate-600	 '>
                                 <p className='opacity-50'>Sales</p>
                                 <button className='bg-black text-white font-bold py-1 px-4 rounded-full'>9</button>
                        </div>
                        <div className='flex justify-between mt-2'>
                            <h1 className='bg-black px-5 grow-0 text-white p-3'>Remove (-1)</h1>
                            <div className='grow flex justify-center bg-white items-center'>0</div>
                            <h1 className='bg-black px-5 grow-0 text-white p-3'>Add (+1)</h1>
                        </div>
                           </div>
                       </div>
                 </div>
                 <div className='max-w-7xl p-4 h-64 mt-3 bg-white mx-auto'>
                  <div className='flex  gap-2 items-center justify-start  '>
                    <FontAwesomeIcon icon={faPaperPlane} />
                    <p>Leave a comment</p>
                  </div>
                  <textarea className='w-full p-4 mt-3 border border-slate-950 rounded-md'></textarea>
                  <button className='bg-black mt-2 text-white font-bold py-3 px-4  rounded'> <FontAwesomeIcon icon={faComment} /> Comment</button>
                  <p className='mt-2'> <FontAwesomeIcon icon={faComment} /> Comment </p>
                 </div>
                 
        </div>
    );
};

export default Product;
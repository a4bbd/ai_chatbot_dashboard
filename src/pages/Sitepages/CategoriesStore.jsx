import React from 'react';
import shop from "../../assets/shop.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartPlus,
    faCreditCard
  } from "@fortawesome/free-solid-svg-icons";
import {cartItem} from "../../dummy_data/dummy_data";
import {cateGoriesitem} from "../../dummy_data/dummy_data"
const CategoriesStore = () => {
    return (
        <div>
        <div className="category_container mt-8 gap-3 flex xscroll" >

      {cateGoriesitem.map((data)=>( <div className='border rounded-lg p-3 '>
               <a className=''>
                <img className='w-10 object-cover rounded container mx-auto h-10' src={data.src} /> 
                 <p className='text-blue-400 mt-2'>{data.title}</p>
               </a>
      </div> ))}  
    </div>

        <div className='flex flex-wrap mt-2 w-full gap-4'>
        {cartItem.map((data)=> ( <ul class="  bg-white   mt-1 ">
                  <li className="media gap-2  flex border border-slate-200 rounded-md align-items-center">                 
                     <a href="https://app.aichatbot.xyz/ecommerce/product/22"><img src={data.src} width="110" height="110" className="mr-2 h-full object-cover rounded-l-lg"  />
                     </a>
                    
                                        
                    <div class="media-body  pl-0 pr-2">
                      <div className="media-title mb-1">
                        <a href="https://app.aichatbot.xyz/ecommerce/product/22" className="text-dark text-xs leading-5">{data.title}</a>
                        <span class="mt-1 text-xs leading-5 block text-small">${data.price}</span>
                                      
                      </div>
                      <p style={{fontSize:"11px",color:"#98a6ad"}} class="text-small  text-muted m-0 ">
                        This is the best chocolate this cake is ...                     
                      </p>
                      <div className='flex mt-2 mb-2 gap-10 justify-between'>
                      <a href="" className="btn  hover:text-white hover:bg-blue-400 transition duration-300 ease-in-out border-blue-400 text-blue-500 border p-1 rounded btn-sm btn-outline-primary add_to_cart" data-attributes="" data-product-id="22" data-action="add"><FontAwesomeIcon icon={faCartPlus} /> Add to cart</a>
                      <a href="" className=' bg-blue-500 text-white border p-1 rounded' ><FontAwesomeIcon icon={faCreditCard} /> Buy Now</a> </div>
                    </div>
                  </li>                
              </ul> ))}
        
        </div>
        </div>
    );
};

export default CategoriesStore;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck,faPenToSquare,faTrash,faPlus} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
const DeliveryPoints = () => {
    return (
        <div>
        <div className='flex justify-between'>
        <div class="page-title">
        <h4 style={{ color: "#212B36" }} className="font-bold text-lg">
          Delivery Points
        </h4>
        <h6 style={{ color: "#555" }} className="text-sm font-normal">
          Create Delivery Points
        </h6>
      </div>
      <div className="">
         
          
           <NavLink to={"/deliverypointfrom"}>  <button className="hover:bg-slate-700 bg-orange-400 text-white font-bold py-2 px-4 rounded">
              <FontAwesomeIcon icon={faPlus} className="w-7" />
              Add 
            </button> </NavLink>
          
        </div>
      </div>
        <div className='bg-white mt-6 rounded'>
          <table className="table-auto  border w-full">
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Details</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Food</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
      <td><span className=' pt-1 pb-1 pl-3 pr-3 border rounded-full'><FontAwesomeIcon className='text-green-500' icon={faCircleCheck} /> Active </span></td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
    </tr>
    <tr>
    <td>2</td>
    <td>Kitchan</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
      <td><span className=' pt-1 pb-1 pl-3 pr-3 border rounded-full'><FontAwesomeIcon className='text-green-500' icon={faCircleCheck} /> Active </span></td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
    </tr>
    <tr>
    <td>3</td>
    <td>Food</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
      <td><span className=' pt-1 pb-1 pl-3 pr-3 border rounded-full'><FontAwesomeIcon className='text-green-500' icon={faCircleCheck} /> Active </span></td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
    </tr>
    <tr>
    <td>4</td>
    <td>Food</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
      <td><span className=' pt-1 pb-1 pl-3 pr-3 border rounded-full'><FontAwesomeIcon className='text-green-500' icon={faCircleCheck} /> Active </span></td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
    </tr>
    <tr>
    <td>5</td>
    <td>Food</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
      <td><span className=' pt-1 pb-1 pl-3 pr-3 border rounded-full'><FontAwesomeIcon className='text-green-500' icon={faCircleCheck} /> Active </span></td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
    </tr>
    <tr>
    <td>6</td>
    <td>Food</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
      <td><span className=' pt-1 pb-1 pl-3 pr-3 border rounded-full'><FontAwesomeIcon className='text-green-500' icon={faCircleCheck} /> Active </span></td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
    </tr>
    <tr>
    <td>7</td>
    <td>Food</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
      <td><span className=' pt-1 pb-1 pl-3 pr-3 border rounded-full'><FontAwesomeIcon className='text-green-500' icon={faCircleCheck} /> Active </span></td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
    </tr>
    <tr>
    <td>8</td>
    <td>Food</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
      <td><span className=' pt-1 pb-1 pl-3 pr-3 border rounded-full'><FontAwesomeIcon className='text-green-500' icon={faCircleCheck} /> Active </span></td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
    </tr>
    <tr>
    <td>9</td>
    <td>Food</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
      <td><span className=' pt-1 pb-1 pl-3 pr-3 border rounded-full'><FontAwesomeIcon className='text-green-500' icon={faCircleCheck} /> Active </span></td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
    </tr>
    <tr>
    <td>10</td>
    <td>Drinks</td>
      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,</td>
      <td><span className=' pt-1 pb-1 pl-3 pr-3 border rounded-full'><FontAwesomeIcon className='text-green-500' icon={faCircleCheck} /> Active </span></td>
      <td> <a className="w-10 h-10 inline-block rounded-full border border-yellow-700"><FontAwesomeIcon className=" translate-x-3 translate-y-2 text-yellow-700 text-center" icon={faPenToSquare} /></a>  <a className="ml-4 w-10 h-10 inline-block rounded-full border border-red-700"><FontAwesomeIcon className="text-red-700 translate-x-3 translate-y-2" icon={faTrash} /></a></td>
    </tr>
  </tbody>
</table>
</div>
        </div>
    );
};

export default DeliveryPoints;
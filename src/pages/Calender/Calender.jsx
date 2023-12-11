import React from 'react';
import "./Calendar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle,faPlus,faArrowRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import MyCalendar from './Mycalendar';
const Calender = () => {
    return (
        <div>
           <div className='flex justify-between'>
              <h1 className='font-bold text-lg'>Calender</h1>
              <button style={{background:"#FF9F43"}} className='mr-28 pt-1.5 pb-1.5 pl-3 pr-3 font-normal text-base text-white rounded'>Create Event</button>
           </div>
           <div className='mt-5 grid grid-cols-8 gap-5'>
           {/* col-start-1 col-end-3 */}
              <div className="col-start-1 col-end-3  w-full">
							<h4 className="mb-2 text-xl">Drag &amp; Drop Event</h4>
							<div id="calendar-events" class="mb-3">
								<div className="p-3 hover:border hover:bg-white cursor-move" data-class="bg-info" style={{position: "relative"}}><FontAwesomeIcon className='text-teal-500 mr-2' icon={faCircle} /> My Event One</div>
								<div className="p-3 hover:border hover:bg-white cursor-move" data-class="bg-success" style={{position: "relative"}}><FontAwesomeIcon className='text-green-700 mr-2' icon={faCircle} /> My Event Two</div>
								<div className="p-3 hover:border hover:bg-white cursor-move" data-class="bg-danger" style={{position: "relative"}}><FontAwesomeIcon className='text-red-500 mr-2' icon={faCircle} /> My Event Three</div>
								<div className="p-3 hover:border hover:bg-white cursor-move" data-class="bg-warning" style={{position: "relative"}}><FontAwesomeIcon className='text-yellow-500 mr-2' icon={faCircle} /> My Event Four</div>
							</div>
							<div class="checkbox  mb-3">
								<input className='mr-1' id="drop-remove" type="checkbox" />
								<label for="drop-remove">
									Remove after drop
								</label>
							</div>
                            
							<a href="#" className="text-white text-center block rounded w-full pt-2 pb-2" style={{background:"#FF9F43"}} data-bs-toggle="modal" data-bs-target="#add_new_event" >
                            <FontAwesomeIcon className='text-white font-black' icon={faPlus} /> Add Category
							</a>
                            
				</div>


              
              <div className='col-start-3 col-end-9 bg-white border rounded'>
              <div className="flex p-5 justify-between">
              <div className='flex gap-2'>
              <button className='bg-slate-100 pt-2  pb-2 pl-5 pr-5 rounded'><FontAwesomeIcon icon={faArrowLeft} /></button>
              <button className='bg-slate-100 pt-2  pb-2 pl-5 pr-5 rounded'><FontAwesomeIcon icon={faArrowRight} /></button>
              <button style={{background:"#FF9F43"}} className='pl-3 pr-3 text-white rounded'>Today</button>
              </div>
               
              <h1 className='font-bold text-xl'>DECEMBER 2023</h1>

              <div className='flex gap-2'>
                <button style={{background:"#FF9F43"}} className='pl-3 pr-3 text-white rounded' >Month</button>
                <button style={{background:"#FF9F43"}} className='pl-3 pr-3 text-white rounded'>Week</button>
                <button style={{background:"#FF9F43"}} className='pl-3 pr-3 text-white rounded'>Day</button>
              </div>

              </div>

               {/* Use This Calendar */}
              
                  <div>
                    <MyCalendar />
                  </div>
              

              </div>
           </div>
        </div>
    );
};

export default Calender;
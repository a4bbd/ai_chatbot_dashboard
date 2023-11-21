import React from 'react';
import logo from '../../assets/logo.png'
import man from "../../assets/man.jpg"
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faExpand,faEnvelope,faBell,faGear } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='header w-full flex'>
               <div className='header-left px-5 py-0 relative w-[260px] h-[60px]'>
                    <a><img className='w-[140px]' src={logo} /></a>
                    <a className=' absolute top-4 right-[-10px]'>
                    <div className='text-white  w-5 h-5 bg-amber-600 rounded-full'>
                    <svg className='w-4 text-center text-black top-3 left-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-left feather-16"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
                    </div>
                    </a>
               </div>
              <ul className='flex border  justify-between content-center w-full border-gray-900'>
                   <li className=' items-center ml-5'>
                         <input type='text' placeholder='Search' className='border-2 outline-none font-sans pr-4 bg-slate-100  border-slate-200  rounded-[50px] relative w-60 h-9 p-2 m-2' />
                            {/* <span>
                            <svg className='absolute top-0 left-1' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search feather-14"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </span> */}
                   </li>
                   <div className='list-none items-center mr-4 flex justify-center content-center gap-9'>
                   <li className=''>
						{/* <a className="h-10 w-10 block relative bg-slate-100 rounded" role='button'>
                        <FontAwesomeIcon className='hover:text-amber-500  opacity-50 absolute top-[10px] right-[9px]' icon={faGlobe} size='lg'  />
						</a> */}
                        <div class="dropdown">
                      
                         <a className="dropbtn dropdown h-10 w-10 block relative bg-slate-100 rounded" role='button'>
                        <FontAwesomeIcon className='hover:text-amber-500  opacity-50 absolute top-[10px] right-[9px]' icon={faGlobe} size='lg'  />
						</a>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div>
                        
						
					</li>
                    <li class="nav-item nav-item-box">
						<a className="h-10 w-10 block relative bg-slate-100 rounded" href="javascript:void(0);" id="btnFullscreen">
                        <FontAwesomeIcon className='hover:text-amber-500  opacity-50 absolute top-[10px] right-[9px]' icon={faExpand} size='lg'  />
						</a> 
                        
					</li>
                    <li class="">
						<a href="email.html" className=" h-10 w-10 block relative bg-slate-100 rounded">
                        <FontAwesomeIcon className='hover:text-amber-500  opacity-50 absolute top-[10px] right-[9px]' icon={faEnvelope} size='lg' />
							{/* <span class="absolute right-0 top-0 w-4 h-4 bg-slate-500 rounded-full"><h1 className='absolute right-2 top-2'>1</h1></span> */}
						</a>
					</li>
                    <li class="nav-item dropdown nav-item-box">
						<a href="javascript:void(0);" className="h-10 w-10 block relative bg-slate-100 rounded">
                        <FontAwesomeIcon className='hover:text-amber-500 opacity-50 absolute top-[10px] right-[9px]' icon={faBell} size='lg' />
                            {/* <span class="badge rounded-pill">2</span> */}
						</a>
					
					</li>
                    <li class="">
						<a className="h-10 w-10 block relative bg-slate-100 rounded" href="generalsettings.html">
                        <FontAwesomeIcon className='hover:text-amber-500 opacity-50 absolute top-[10px] right-[9px]' icon={faGear} size='lg' />
                        </a>
					</li>
                    <div className='userinfo mr-4' >
                        <a className='flex'>
                            <span>
                                <img className='w-11 h-11' src={man} /> 
                            </span>
                            <div class="dropdown">
                            <span className='userdeatils dropbtn dropdown cursor-pointer hover:bg-slate-100 '>
                                   <h1 className='text-sm font-semibold	'>John Smilga</h1>
                                   <h1 className='text-xs '>Super Admin</h1>
                            </span>
                            <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
                            </div>
                        </a>
                    </div>
                   </div>
              </ul>
              
        </div>
    );
};

export default Header;
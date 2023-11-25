import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import man from "../../assets/man.jpg"
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe,faExpand,faEnvelope,faBell,faGear, faL } from '@fortawesome/free-solid-svg-icons'
import us from '../../assets/rsz_us_flag.png';
import bd from '../../assets/bd.png';
import logout from '../../assets/log-out.svg'
import Dashboard from './Dashboard';
import FullScreen from './Fullscreen';
const Header = () => {
    const [click ,setClick] = useState();
    const[porfile,setProfile] = useState(false);
    return (
        <>
        <div className=' header w-full flex'>

              <div style={click ? {width:"40px"}: {}}  className='header-left ml-[59px;] px-5 py-0 relative w-[260px] h-[60px]'>
                    <a><img className='w-[140px]' src={logo} /></a>
                    <a className=' absolute top-4 right-[-10px]'>
                    <div className='text-white  w-5 h-5 bg-amber-600 rounded-full'>
                    <svg onClick={()=>setClick(!click)} className='w-4 text-center text-black top-3 left-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-left feather-16"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
                    </div>
                    </a>
               </div>
               
              <ul className='flex border  justify-between content-center w-full border-slate-200'>
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
           <div className="dropdown-content">
                             <a  className="dropdown-item active relative flex">
								<img src={bd} alt="" style={{"height":"20px"}} />Bangladesh
							</a>
							<a  className="relative dropdown-item flex">
								<img src={us} alt="" style={{"height":"20px"}} />  English
							</a>
							
  </div>
</div>
                        
						
					</li>
                    <li class="nav-item nav-item-box">
						<a className="h-10 w-10 block relative bg-slate-100 rounded" href="javascript:void(0);" id="btnFullscreen">
                          <FullScreen />
						</a> 
                        
					</li>
                    <li class="">
						<a href="email.html" className=" h-10 w-10 block relative bg-slate-100 rounded">
                        <FontAwesomeIcon className='hover:text-amber-500  opacity-50 absolute top-[10px] right-[9px]' icon={faEnvelope} size='lg' />
                        <span className="badge rounded-pill">1</span>
							{/* <span class="absolute right-0 top-0 w-4 h-4 bg-slate-500 rounded-full"><h1 className='absolute right-2 top-2'>1</h1></span> */}
						</a>
					</li>

                    <div className="dropdown">

                    <li className="">
						<a href="javascript:void(0);" className="h-10 w-10 block relative bg-slate-100 rounded">
                        <FontAwesomeIcon className='hover:text-amber-500 opacity-50 absolute top-[10px] right-[9px]' icon={faBell} size='lg' />
                            <span class="badge rounded-pill">2</span>
						</a>
					<div className="dropdown-contentmessage">

                    
                    </div>
					</li>
                    </div>


                    <li class="">
						<a className="h-10 w-10 block relative bg-slate-100 rounded" href="generalsettings.html">
                        <FontAwesomeIcon className='hover:text-amber-500 opacity-50 absolute top-[10px] right-[9px]' icon={faGear} size='lg' />
                        </a>
					</li>
                    <div className='userinfo mr-4' >
                        <a className='flex'>
                            
                            <div class="dropdown2">

                            <span onClick={()=>setProfile(!porfile)} className='userdeatils flex dropbtn dropdown cursor-pointer hover:bg-slate-100 '>
                            <span>
                                <img className='w-11 h-11' src={man} /> 
                            </span>
                            <div>
                                   <h1 className='text-sm font-semibold	'>John Smilga</h1>
                                   <h1 className='text-xs '>Super Admin</h1>
                                   </div>
                            </span>
                            {porfile && (<div class="dropdown-content2">
                            <div class="profileset flex gap-2  align-center">
									<span class="user-img relative "><img className='' src={man} alt="" />
									<span class="w-2.5 h-2.5 absolute bottom-3 border-2 border-white right-0 bg-green-400 rounded-full status online"></span></span>
									<div class="profilesets">
										<h6 >John Smilga</h6>
										<h5 className='opacity-50'>Super Admin</h5>
									</div>
								</div>
                                <hr />
                            <a className="dropdown-item2" href="profile.html"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user me-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> My Profile</a>
                            <a className="dropdown-item2" href="generalsettings.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings me-2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>Settings</a>
                            <hr />
                            <a class="dropdown-item2 logout pb-0" href="signin.html"><img src={logout} class="me-2" alt="img" />Logout</a>
                            </div>)}
                            </div>
                        </a>
                    </div>
                   </div>
              </ul>
              
        </div>
        <Dashboard click={click} />
        </>
    );
};

export default Header;
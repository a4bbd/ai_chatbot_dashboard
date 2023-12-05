import React from "react";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer5 from "../../assets/customer5.jpg";
import customer8 from "../../assets/customer8.jpg";
import profile2 from "../../assets/profile2.jpg";
import "./Chat.css";
const Chat = () => {
  return (
    <div>
      <div className="grid w-full  gap-5 grid-cols-10">
        <div className="bg-white  col-span-3 border border-slate-200 rounded">
          <div className="pt-4 pb-4 pl-4 pr-4 w-full    border-b ">
            <li className="  list-none relative mt-1 items-center ">
              <span
                style={{ color: "#5E5873", fontWeight: "900" }}
                className="search font-black absolute top-5 right-5 ">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-search feather-14">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>

              <input
                type="text"
                placeholder="Search"
                className="border-slate-300  text-lg font-sans border w-full p-3 pl-[33px] rounded-full"
              />
            </li>
          </div>

          <div className="card-body chat__scrollbar contacts_body chat-users-list chat-scroll">
            <a className="media border-b transition duration-300 p-3 bg-slate-100 w-full flex gap-5 active">
              <div class="media-img-wrap flex-shrink-0">
                <div className="avatar avatar-away relative">
                  <img
                    src={customer1}
                    alt="User Image"
                    class=" photo_radious_chat "
                  />
                  <h1
                    style={{ background: "#FF9900" }}
                    className="w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full"></h1>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-base font-bold">Jeffrey Akridge</div>
                  <div className="user-last-chat mt-1 ">Hey, How are you?</div>
                </div>
                <div>
                  <div className=" text-sm">2 min</div>
                  <div className="text-center ml-1 font-bold text-xs  bg-green-600 rounded text-white">
                    15
                  </div>
                </div>
              </div>
            </a>
            <a className="media transition duration-200 p-3 border-b hover:bg-slate-100 w-full flex gap-5 active">
              <div class="media-img-wrap flex-shrink-0">
                <div className="avatar avatar-away relative">
                  <img
                    src={customer2}
                    alt="User Image"
                    class=" photo_radious_chat "
                  />
                  <h1
                    style={{ background: "#28C76F" }}
                    className="w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full"></h1>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-base font-bold">Jeffrey Akridge</div>
                  <div className="user-last-chat mt-1 ">Hey, How are you?</div>
                </div>
                <div>
                  <div className=" text-sm">5 min</div>
                  {/* <div className="text-center ml-1 font-bold text-xs  bg-green-600 rounded text-white">15</div> */}
                </div>
              </div>
            </a>
            <a className="media transition duration-200 p-3 border-b hover:bg-slate-100 w-full flex gap-5 active">
              <div class="media-img-wrap flex-shrink-0">
                <div className="avatar avatar-away relative">
                  <img
                    src={customer3}
                    alt="User Image"
                    class=" photo_radious_chat "
                  />
                  <h1
                    style={{ background: "#f62d51" }}
                    className="w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full"></h1>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-base font-bold">Jeffrey Akridge</div>
                  <div className="user-last-chat mt-1 ">Hey, How are you?</div>
                </div>
                <div>
                  <div className=" text-sm">Yesterday</div>
                  {/* <div className="text-center ml-1 font-bold text-xs  bg-green-600 rounded text-white">15</div> */}
                </div>
              </div>
            </a>
            <a className="media transition duration-200 p-3 border-b hover:bg-slate-100 w-full flex gap-5 active">
              <div class="media-img-wrap flex-shrink-0">
                <div className="avatar avatar-away relative">
                  <img
                    src={customer8}
                    alt="User Image"
                    class=" photo_radious_chat "
                  />
                  <h1
                    style={{ background: "#28C76F" }}
                    className="w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full"></h1>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-base font-bold">Jeffrey Akridge</div>
                  <div className="user-last-chat mt-1 ">Hey, How are you?</div>
                </div>
                <div>
                  <div className=" text-sm">10 min</div>
                  {/* <div className="text-center ml-1 font-bold text-xs  bg-green-600 rounded text-white">15</div> */}
                </div>
              </div>
            </a>
            <a className="media transition duration-200 p-3 border-b hover:bg-slate-100 w-full flex gap-5 active">
              <div class="media-img-wrap flex-shrink-0">
                <div className="avatar avatar-away relative">
                  <img
                    src={customer5}
                    alt="User Image"
                    class=" photo_radious_chat "
                  />
                  <h1
                    style={{ background: "#f62d51" }}
                    className="w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full"></h1>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-base font-bold">Jeffrey Akridge</div>
                  <div className="user-last-chat mt-1 ">Hey, How are you?</div>
                </div>
                <div>
                  <div className=" text-sm">8:10 PM</div>
                  {/* <div className="text-center ml-1 font-bold text-xs  bg-green-600 rounded text-white">15</div> */}
                </div>
              </div>
            </a>
            <a className="media transition duration-200 p-3 border-b hover:bg-slate-100 w-full flex gap-5 active">
              <div class="media-img-wrap flex-shrink-0">
                <div className="avatar avatar-away relative">
                  <img
                    src={customer3}
                    alt="User Image"
                    class=" photo_radious_chat "
                  />
                  <h1
                    style={{ background: "#FF9900" }}
                    className="w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full"></h1>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-base font-bold">Jeffrey Akridge</div>
                  <div className="user-last-chat mt-1 ">Hey, How are you?</div>
                </div>
                <div>
                  <div className=" text-sm">7 min</div>
                  {/* <div className="text-center ml-1 font-bold text-xs  bg-green-600 rounded text-white">15</div> */}
                </div>
              </div>
            </a>
            <a className="media transition duration-200 p-3 border-b hover:bg-slate-100 w-full flex gap-5 active">
              <div class="media-img-wrap flex-shrink-0">
                <div className="avatar avatar-away relative">
                  <img
                    src={customer5}
                    alt="User Image"
                    class=" photo_radious_chat "
                  />
                  <h1
                    style={{ background: "#f62d51" }}
                    className="w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full"></h1>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-base font-bold">Jeffrey Akridge</div>
                  <div className="user-last-chat mt-1 ">Hey, How are you?</div>
                </div>
                <div>
                  <div className=" text-sm">8:10 AM</div>
                  {/* <div className="text-center ml-1 font-bold text-xs  bg-green-600 rounded text-white">15</div> */}
                </div>
              </div>
            </a>
            <a className="media transition duration-200 p-3 border-b hover:bg-slate-100 w-full flex gap-5 active">
              <div class="media-img-wrap flex-shrink-0">
                <div className="avatar avatar-away relative">
                  <img
                    src={customer2}
                    alt="User Image"
                    class=" photo_radious_chat "
                  />
                  <h1
                    style={{ background: "#28C76F" }}
                    className="w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full"></h1>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-base font-bold">Jeffrey Akridge</div>
                  <div className="user-last-chat mt-1 ">Hey, How are you?</div>
                </div>
                <div>
                  <div className=" text-sm">2 min</div>
                  <div className="text-center ml-1 font-bold text-xs  bg-green-600 rounded text-white">
                    15
                  </div>
                </div>
              </div>
            </a>
            <a className="media transition duration-200 p-3 border-b hover:bg-slate-100 w-full flex gap-5 active">
              <div class="media-img-wrap flex-shrink-0">
                <div className="avatar avatar-away relative">
                  <img
                    src={customer1}
                    alt="User Image"
                    class=" photo_radious_chat "
                  />
                  <h1
                    style={{ background: "#28C76F" }}
                    className="w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full"></h1>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-base font-bold">Jeffrey Akridge</div>
                  <div className="user-last-chat mt-1 ">Hey, How are you?</div>
                </div>
                <div>
                  <div className=" text-sm">8:01 PM</div>
                  {/* <div className="text-center ml-1 font-bold text-xs  bg-green-600 rounded text-white">15</div> */}
                </div>
              </div>
            </a>
            <a className="media transition duration-200 p-3 border-b hover:bg-slate-100 w-full flex gap-5 active">
              <div class="media-img-wrap flex-shrink-0">
                <div className="avatar avatar-away relative">
                  <img
                    src={customer3}
                    alt="User Image"
                    class=" photo_radious_chat "
                  />
                  <h1
                    style={{ background: "#FF9900" }}
                    className="w-3 h-3 border-2 border-white absolute right-0 bottom-0 rounded-full"></h1>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <div>
                  <div className="text-base font-bold">Jeffrey Akridge</div>
                  <div className="user-last-chat mt-1 ">Hey, How are you?</div>
                </div>
                <div>
                  <div className=" text-sm">2 min</div>
                  <div className="text-center ml-1 font-bold text-xs  bg-green-600 rounded text-white">
                    15
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className=" bg-white col-span-7 border border-slate-200 rounded">
          <div className=" ">
            <div class="card-header pt-5 pb-5 pl-4 pr-4 w-full    border-b msg_head">
              <div class="flex gap-3">
                <a
                  id="back_user_list"
                  href="javascript:void(0)"
                  class="back-user-list">
                  <i class="fas fa-chevron-left"></i>
                </a>
                <div class="img_cont">
                  <img class=" user_img" src={profile2} alt="" />
                </div>
                <div class="user_info">
                  <span>
                    <strong id="receiver_name">Jeffrey Akridge</strong>
                  </span>
                  <p class="mb-0">Messages</p>
                </div>
              </div>
            </div>

            <ul class="list-unstyled">
              <li class="media sent d-flex">
                <div class="avatar flex-shrink-0">
                  <img
                    src="assets/img/customer/customer5.jpg"
                    alt="User Image"
                    class="avatar-img rounded-circle"
                  />
                </div>
                <div class="media-body flex-grow-1">
                  <div class="msg-box">
                    <div>
                      <p>Hello. What can I do for you?</p>
                      <ul class="chat-msg-info">
                        <li>
                          <div class="chat-time">
                            <span>8:30 AM</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="media received d-flex">
                <div class="avatar flex-shrink-0">
                  <img
                    src="assets/img/customer/profile2.jpg"
                    alt="User Image"
                    class="avatar-img rounded-circle"
                  />
                </div>
                <div class="media-body flex-grow-1">
                  <div class="msg-box">
                    <div>
                      <p>I'm just looking around.</p>
                      <p>Will you tell me something about yourself?</p>
                      <ul class="chat-msg-info">
                        <li>
                          <div class="chat-time">
                            <span>8:35 AM</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="msg-box">
                    <div>
                      <p>Are you there? That time!</p>
                      <ul class="chat-msg-info">
                        <li>
                          <div class="chat-time">
                            <span>8:40 AM</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="msg-box">
                    <div>
                      <div class="chat-msg-attachments">
                        <div class="chat-attachment">
                          <img
                            src="assets/img/product/product12.jpg"
                            alt="Attachment"
                          />
                          <a href="" class="chat-attach-download">
                            <i class="fas fa-download"></i>
                          </a>
                        </div>
                        <div class="chat-attachment">
                          <img
                            src="assets/img/product/product13.jpg"
                            alt="Attachment"
                          />
                          <a href="" class="chat-attach-download">
                            <i class="fas fa-download"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="chat-msg-info">
                        <li>
                          <div class="chat-time">
                            <span>8:41 AM</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="media sent d-flex">
                <div class="avatar flex-shrink-0">
                  <img
                    src="assets/img/customer/customer5.jpg"
                    alt="User Image"
                    class="avatar-img rounded-circle"
                  />
                </div>
                <div class="media-body flex-grow-1">
                  <div class="msg-box">
                    <div>
                      <p>Where?</p>
                      <ul class="chat-msg-info">
                        <li>
                          <div class="chat-time">
                            <span>8:42 AM</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="msg-box">
                    <div>
                      <p>
                        OK, my name is Limingqiang. I like singing, playing
                        basketballand so on.
                      </p>
                      <ul class="chat-msg-info">
                        <li>
                          <div class="chat-time">
                            <span>8:42 AM</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="msg-box">
                    <div>
                      <div class="chat-msg-attachments">
                        <div class="chat-attachment">
                          <img
                            src="assets/img/product/product15.jpg"
                            alt="Attachment"
                          />
                          <a href="" class="chat-attach-download">
                            <i class="fas fa-download"></i>
                          </a>
                        </div>
                      </div>
                      <ul class="chat-msg-info">
                        <li>
                          <div class="chat-time">
                            <span>8:50 AM</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="media received d-flex">
                <div class="avatar flex-shrink-0">
                  <img
                    src="assets/img/customer/profile2.jpg"
                    alt="User Image"
                    class="avatar-img rounded-circle"
                  />
                </div>
                <div class="media-body flex-grow-1">
                  <div class="msg-box">
                    <div>
                      <p>You wait for notice.</p>
                      <p>Consectetuorem ipsum dolor sit?</p>
                      <p>Ok?</p>
                      <ul class="chat-msg-info">
                        <li>
                          <div class="chat-time">
                            <span>8:55 PM</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="chat-date">Today</li>
              <li class="media received d-flex">
                <div class="avatar flex-shrink-0">
                  <img
                    src="assets/img/customer/profile2.jpg"
                    alt="User Image"
                    class="avatar-img rounded-circle"
                  />
                </div>
                <div class="media-body flex-grow-1">
                  <div class="msg-box">
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      </p>
                      <ul class="chat-msg-info">
                        <li>
                          <div class="chat-time">
                            <span>10:17 AM</span>
                          </div>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Edit</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="media sent d-flex">
                <div class="avatar flex-shrink-0">
                  <img
                    src="assets/img/customer/profile2.jpg"
                    alt="User Image"
                    class="avatar-img rounded-circle"
                  />
                </div>
                <div class="media-body flex-grow-1">
                  <div class="msg-box">
                    <div>
                      <p>Lorem ipsum dollar sit</p>
                      <div class="chat-msg-actions dropdown">
                        <a
                          href="javascript:void(0);"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                          <i class="fe fe-elipsis-v"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right">
                          <a class="dropdown-item" href="javascript:void(0);">
                            Delete
                          </a>
                        </div>
                      </div>
                      <ul class="chat-msg-info">
                        <li>
                          <div class="chat-time">
                            <span>10:19 AM</span>
                          </div>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Edit</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li class="media received d-flex">
                <div class="avatar flex-shrink-0">
                  <img
                    src="assets/img/customer/profile2.jpg"
                    alt="User Image"
                    class="avatar-img rounded-circle"
                  />
                </div>
                <div class="media-body flex-grow-1">
                  <div class="msg-box">
                    <div>
                      <div class="msg-typing">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <div className="w-full">
              <div className="pt-3 pb-3 pl-4 pr-4 w-full  border-t ">
                <li className="  list-none relative mt-1 items-center ">
                  <input
                    type="text"
                    placeholder="Type your message...."
                    className="border-slate-300 bg-slate-300  text-lg font-sans  border w-full p-1 pl-[10px] rounded"
                  />
				  <button class="btn btn-primary btn_send"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

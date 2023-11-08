import React, { useState } from "react";
import fxMainLogo from "../../assets/images/zzgZoBKZJjOjr4exm80v0htIZ7SEmb1qlvXvs3xb.png";
import UserPng from "../../assets/images/user.png";
import CustomerNavBar from "./CustomerNavBar";


export default function DashboardHearder() {
    const userInfo = {
        name:  "Kazim yahiya Khan",
        email: "Kazim@fxmaster.co.uk",
    };
    const [ProfileMenu, setProfileMenu] = useState(false);
    const [NotifyMenu, setNotifyMenu] = useState(false);

    const toggleDiv = (e) => {
        console.log(e.currentTarget.id);
        if (e.currentTarget.id === "ProfileDropDownOption") {
            setProfileMenu(!ProfileMenu);
            setNotifyMenu(false);
        }
        if (e.currentTarget.id === "notification-content") {
            setNotifyMenu(!NotifyMenu);
            setProfileMenu(false);
        }
    };
    
    return (
        <>
        <div className="border-b border-white/[0.08] -mx-3 sm:-mx-0 px-3 sm:px-8 pt-3 md:pt-0 mb-10">
            <div className="top-bar-boxed flex items-center">
                {/*  Main Logo */}
                <a
                    id="CompanyLogo"
                    href="https://www.dev.fxmaster.co.uk/dashboard"
                    className="items-center pl-0 pt-0"
                >
                    <img
                        alt="FxMaster"
                        className="w-40 mainlogo"
                        src={fxMainLogo}
                    />
                </a>
                {/*  Main Logo */}

                {/* <!-- END: Breadcrumb --> */}
                <nav
                    aria-label="breadcrumb"
                    className="-intro-x h-full mr-auto"
                >
                    <ol className="breadcrumb breadcrumb-light">
                        <li className="breadcrumb-item">Application</li>
                        <li
                            className="breadcrumb-item active"
                            aria-current="page"
                        ></li>
                    </ol>
                </nav>

                {/*  DropDown Menu  */}

                <div
                    className={`dropdown-menu w-56 ${
                        ProfileMenu && "show"
                    }  dropdown-toggle `}
                    style={{
                        width: "224px",
                        position: "absolute",
                        inset: "0px 0px auto auto",
                        margin: "0px",
                        transform: "translate3d(-11.2px, 45.6px, 0px)",
                    }}
                    data-popper-placement="bottom-end"
                    aria-labelledby="ProfileDropDownOption"
                >
                    <ul className="dropdown-content bg-primary text-white">
                        <li className="p-2" id="UserName">
                            <div className="font-medium">{userInfo.name}</div>
                            <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                                Subscriber Workspace
                            </div>
                        </li>
                        <li>
                            <hr className="dropdown-divider border-white/[0.08]" />
                        </li>

                        <li id="Profile">
                            <ul>
                                <li>
                                    <a href="#" className="block"></a>
                                    <a
                                        href="#"
                                        className="dropdown-item hover:bg-white/5"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            icon-name="user"
                                            data-lucide="user"
                                            className="lucide lucide-user w-4 h-4 mr-2"
                                        >
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle
                                                cx="12"
                                                cy="7"
                                                r="4"
                                            ></circle>
                                        </svg>
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.dev.fxmaster.co.uk/dashboard/profile/116/reset-password"
                                        className="block"
                                    ></a>
                                    <a
                                        href="https://www.dev.fxmaster.co.uk/dashboard/profile/116/reset-password"
                                        className="dropdown-item hover:bg-white/5"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            icon-name="lock"
                                            data-lucide="lock"
                                            className="lucide lucide-lock w-4 h-4 mr-2"
                                        >
                                            <rect
                                                x="3"
                                                y="11"
                                                width="18"
                                                height="11"
                                                rx="2"
                                                ry="2"
                                            ></rect>
                                            <path d="M7 11V7a5 5 0 0110 0v4"></path>
                                        </svg>
                                        Reset Password
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <hr className="dropdown-divider border-white/[0.08]" />
                        </li>
                        <li>
                            <a
                                id="Logout"
                                href="https://www.dev.fxmaster.co.uk/logout"
                                className="dropdown-item hover:bg-white/5"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    icon-name="toggle-right"
                                    data-lucide="toggle-right"
                                    className="lucide lucide-toggle-right w-4 h-4 mr-2"
                                >
                                    <rect
                                        x="1"
                                        y="5"
                                        width="22"
                                        height="14"
                                        rx="7"
                                        ry="7"
                                    ></rect>
                                    <circle cx="16" cy="12" r="3"></circle>
                                </svg>{" "}
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>

                <div
                    className={`notification-content pt-2 dropdown-menu ${
                        NotifyMenu && "show"
                    } `}
                    style={{
                        width: "280px",
                        position: "absolute",
                        inset: "0px 0px auto auto",
                        margin: "0px",
                        transform: "translate3d(-47px, 38px, 0px)",
                    }}
                >
                    <div className="notification-content__box dropdown-content">
                        <div className="notification-content__title">
                            Workspaces
                        </div>
                        <a
                            href="https://www.dev.fxmaster.co.uk/dashboard/workspaces/108/active"
                            className="relative flex items-center hover:bg-gray-200 p-2 rounded"
                        >
                            <div
                                className="flex-none image-fit"
                                style={{ height: "24px", width: "24px" }}
                            >
                                <img
                                    alt="{userInfo.name}"
                                    className="rounded-full"
                                    src={UserPng}
                                    width="40"
                                />
                            </div>

                            <div className="ml-4 mr-auto">
                                <p className="font-medium">{userInfo.name}</p>
                                <span className="text-xs text-gray-500 ml-auto whitespace-nowrap">
                                    {userInfo.email}
                                </span>
                            </div>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                icon-name="circle"
                                data-lucide="circle"
                                className="lucide lucide-circle rounded-full bg-danger text-white cursor-pointer font-medium"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                        </a>
                    </div>
                </div>

                {/*  DropDown Menu  */}

                <div className="top-bar sm:gap-3 gap-2 pb-3 border-none">
                    {/* <!-- END: Breadcrumb --> */}


                    <div className="intro-x dropdown w-8 h-8 mr-0">
                        <div
                            className="dropdown-toggle notification cursor-pointer"
                            role="button"
                            aria-expanded="true"
                            data-tw-toggle="dropdown"
                            id="notification-content"
                            onClick={toggleDiv}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                icon-name="share-2"
                                data-lucide="share-2"
                                className="lucide lucide-share-2 dark:text-gray-300"
                                style={{ transform: "rotate(90deg)" }}
                            >
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line
                                    x1="8.59"
                                    y1="13.51"
                                    x2="15.42"
                                    y2="17.49"
                                ></line>
                                <line
                                    x1="15.41"
                                    y1="6.51"
                                    x2="8.59"
                                    y2="10.49"
                                ></line>
                            </svg>
                        </div>
                    </div>

                    {/*

                    <!-- BEGIN: Account Menu --> */}
                    <div className="intro-x dropdown w-8 h-8">
                        <div
                            className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in"
                            id="ProfileDropDownOption"
                            role="button"
                            aria-expanded="false"
                            data-tw-toggle="dropdown"
                            onClick={toggleDiv}
                        >
                            <img alt=" {userInfo.name}" src={UserPng} />
                        </div>
                    </div>
                    {/* <!-- END: Account Menu --> */}

                </div>
            </div>
        </div>
        <nav class="top-nav text-black" style={{color: 'black'}}>
            <div class="top-menu__devider my-6"></div>
            <ul>
                <CustomerNavBar  iconName='home' navName='Dashboard' redirectTo='/international-transfer'  isActiveMenu = 'yes'     /> 
                <CustomerNavBar  iconName='octagon' navName='Money Transfer' redirectTo='/international-transfer/money-transfer'  isActiveMenu = 'no'     /> 
                <CustomerNavBar  iconName='activity' navName='Beneficiaries' redirectTo='/international-transfer/money-transfer'  isActiveMenu = 'no'     /> 
                <CustomerNavBar  iconName='list' navName='Transactions' redirectTo='/international-transfer/money-transfer'  isActiveMenu = 'no'     /> 
                <CustomerNavBar  iconName='command' navName='HRMS' redirectTo='/international-transfer/money-transfer'  isActiveMenu = 'no'     /> 
                <CustomerNavBar  iconName='file' navName='Report' redirectTo='/international-transfer/money-transfer'  isActiveMenu = 'no'     /> 
            </ul>
                

        </nav>
        </>
    );
}

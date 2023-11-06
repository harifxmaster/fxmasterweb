import React,{useState} from 'react'
import fxMainLogo from '../../assets/images/zzgZoBKZJjOjr4exm80v0htIZ7SEmb1qlvXvs3xb.png';

export default function DashboardHearder() {

    const [isDivVisible, setDivVisible] = useState(false);

    const toggleDiv = () => {
        setDivVisible(!isDivVisible);
    }


    return (
        <div className="border-b border-white/[0.08] -mx-3 sm:-mx-0 px-3 sm:px-8 pt-3 md:pt-0 mb-10">
            <div className="top-bar-boxed flex items-center">

                {/*  Main Logo */}
                <a id="SideNav" href="https://www.dev.fxmaster.co.uk/dashboard" className="items-center pl-0 pt-0">
                    <img alt="FxMaster" className="w-40 mainlogo mobilelogo" src={fxMainLogo} />
                </a>
                {/*  Main Logo */}

                {/* <!-- END: Breadcrumb --> */}
                <nav aria-label="breadcrumb" className="-intro-x h-full mr-auto">
                    <ol className="breadcrumb breadcrumb-light">
                        <li className="breadcrumb-item">Application</li>
                        <li className="breadcrumb-item active" aria-current="page"></li>
                    </ol>
                </nav>

                {/*  DropDown Menu  */}

                <div className="dropdown-menu w-56 show" id="_7vobjzcvw" style={{ width: '224px', position: 'absolute', inset: '0px 0px auto auto', margin: '0px', transform: "translate3d(-11.2px, 45.6px, 0px)" }} data-popper-placement="bottom-end">
                    <ul className="dropdown-content bg-primary text-white">
                        <li className="p-2" id="UserName">
                            <div className="font-medium">kazim  khan</div>
                            <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                                Subscriber
                                Workspace
                            </div>
                        </li>
                        <li>
                            <hr className="dropdown-divider border-white/[0.08]" />
                        </li>

                        <li id="Profile">
                            <ul>
                                <li>
                                    <a href="https://www.dev.fxmaster.co.uk/dashboard/profile/116/edit" className="block"></a>
                                    <a href="https://www.dev.fxmaster.co.uk/dashboard/profile/116/edit" className="dropdown-item hover:bg-white/5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="user" data-lucide="user" className="lucide lucide-user w-4 h-4 mr-2">
                                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle></svg>
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.dev.fxmaster.co.uk/dashboard/profile/116/reset-password" className="block">
                                    </a>
                                    <a href="https://www.dev.fxmaster.co.uk/dashboard/profile/116/reset-password" className="dropdown-item hover:bg-white/5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="lock" data-lucide="lock" className="lucide lucide-lock w-4 h-4 mr-2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0110 0v4"></path>
                                        </svg>Reset Password
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <hr className="dropdown-divider border-white/[0.08]" />
                        </li>
                        <li>
                            <a id="Logout" href="https://www.dev.fxmaster.co.uk/logout" className="dropdown-item hover:bg-white/5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="toggle-right" data-lucide="toggle-right" className="lucide lucide-toggle-right w-4 h-4 mr-2"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle></svg> Logout
                            </a>
                        </li>
                    </ul>
                </div>

                {/*  DropDown Menu  */}


                <div className="top-bar sm:gap-3 gap-2 pb-3 border-none">

                    {/* <!-- END: Breadcrumb --> */}

                    <div className="mt-1 mr-0 sm:mr-0" id="Maximize">
                        <button type="button" className="requestfullscreen">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="maximize" data-lucide="maximize" className="lucide lucide-maximize block mx-auto"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3"></path></svg>
                        </button>

                        <button type="button" className="exitfullscreen" style={{ display: 'none' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="minimize" data-lucide="minimize" className="lucide lucide-minimize block mx-auto"><path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3m0 18v-3a2 2 0 012-2h3M3 16h3a2 2 0 012 2v3"></path></svg>
                        </button>
                    </div>


                    <div className="intro-x dropdown w-8 h-8 mr-0">
                        <div className="dropdown-toggle notification cursor-pointer" role="button" aria-expanded="false" data-tw-toggle="dropdown">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="share-2" data-lucide="share-2" className="lucide lucide-share-2 dark:text-gray-300" style={{ transform: 'rotate(90deg)' }}><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                        </div>
                        <div className="notification-content pt-2 dropdown-menu">
                            <div className="notification-content__box dropdown-content">
                                <div className="notification-content__title">Workspaces</div>
                                <a href="https://www.dev.fxmaster.co.uk/dashboard/workspaces/108/active" className="relative flex items-center hover:bg-gray-200 p-2 rounded">

                                    <div className="flex-none image-fit" style={{ height: '24px', width: '24px' }}>
                                        <img alt="kazim  khan" className="rounded-full" src="https://www.dev.fxmaster.co.uk/dist/images/user.png" width="40" />
                                    </div>

                                    <div className="ml-4 mr-auto">
                                        <p className="font-medium">kazim  khan</p>
                                        <span className="text-xs text-gray-500 ml-auto whitespace-nowrap">kazim@fxmaster.com</span>
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="circle" data-lucide="circle" className="lucide lucide-circle rounded-full bg-danger text-white cursor-pointer font-medium"><circle cx="12" cy="12" r="10"></circle></svg>
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="dropdown mr-0" id="ColorScheme">
                        <div className="dropdown-toggle block w-8 h-8 cursor-pointer btn-primary rounded-full border-4 mr-0 hover:border-slate-200 border-slate-300 dark:border-darkmode-800/80" aria-expanded="false" data-tw-toggle="dropdown">
                        </div>
                        <div className="dropdown-menu color-scheme">
                            <ul className="dropdown-content">
                                <li className="flex items-center pb-2">
                                    <a id="ColorScheme1" href="https://www.dev.fxmaster.co.uk/color-scheme-switcher/default" className="block w-8 h-8 cursor-pointer bg-purpal-800 rounded-full border-4 mr-1 hover:border-slate-200 border-slate-300 dark:border-darkmode-800/80"></a>
                                </li>
                                <li className="flex items-center pb-2">
                                    <a id="ColorScheme2" href="https://www.dev.fxmaster.co.uk/color-scheme-switcher/theme-1" className="block w-8 h-8 cursor-pointer bg-emerald-900 rounded-full border-4 mr-1 hover:border-slate-200 border-white dark:border-darkmode-600"></a>
                                </li>
                                <li className="flex items-center pb-2">
                                    <a id="ColorScheme3" href="https://www.dev.fxmaster.co.uk/color-scheme-switcher/theme-2" className="block w-8 h-8 cursor-pointer bg-blue-900 rounded-full border-4 mr-1 hover:border-slate-200 border-white dark:border-darkmode-600"></a>
                                </li>
                                <li className="flex items-center pb-2">
                                    <a id="ColorScheme4" href="https://www.dev.fxmaster.co.uk/color-scheme-switcher/theme-3" className="block w-8 h-8 cursor-pointer bg-cyan-900 rounded-full border-4 mr-1 hover:border-slate-200 border-white dark:border-darkmode-600"></a>
                                </li>
                                <li className="flex items-center pb-2">
                                    <a id="ColorScheme5" href="https://www.dev.fxmaster.co.uk/color-scheme-switcher/theme-4" className="block w-8 h-8 cursor-pointer bg-indigo-900 rounded-full border-4  mr-1 hover:border-slate-200 border-white dark:border-darkmode-600"></a>
                                </li>
                                <li className="flex items-center pb-2">
                                    <a id="ColorScheme6" href="https://www.dev.fxmaster.co.uk/color-scheme-switcher/theme-5" className="block w-8 h-8 cursor-pointer bg-blue-800 rounded-full border-4 mr-1 hover:border-slate-200 border-white dark:border-darkmode-600"></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form action="https://www.dev.fxmaster.co.uk/dashboard/profile/116/display-settings" method="POST" id="darkmode">
                        <input type="hidden" name="_token" value="iwGfynQ5ZGVqgX3TR3UBcQ630LTTLxC35UEDBatS" />
                        <a href="#">
                            <div className="mt-1 dark-mode-switcher cursor-pointer shadow-md bottom-0 right-0 box border rounded-full w-20 h-10 flex items-center justify-center z-50 mb-0 mr-0 form-switch">
                                <div className="mr-1 text-slate-600 dark:text-slate-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="sun" data-lucide="sun" className="lucide lucide-sun w-4 h-4 mr-1"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M5 5l1.5 1.5"></path><path d="M17.5 17.5L19 19"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="M5 19l1.5-1.5"></path><path d="M17.5 6.5L19 5"></path></svg>
                                </div>
                                {/* <input id="dark_mode" name="dark_mode" onClick="loadNewPage();" type="checkbox" className="form-check-input" /> */}
                            </div>
                        </a>
                    </form>
                    {/* <!-- END: Dark Mode Switcher-->

                    <!-- BEGIN: Account Menu --> */}
                    <div className="intro-x dropdown w-8 h-8" >
                        <div className="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" role="button"  onClick ={toggleDiv}>
                            <img alt=" kazim  khan" src="https://www.dev.fxmaster.co.uk/dist/images/user.png" />
                        </div>

                        <div className="dropdown-menu w-56">
                            <ul className="dropdown-content bg-primary text-white">
                                <li className="p-2" id="UserName">
                                    <div className="font-medium">kazim  khan</div>
                                    <div className="text-xs text-white/70 mt-0.5 dark:text-slate-500">
                                        Subscriber Workspace
                                    </div>
                                </li>
                                <li>
                                    <hr className="dropdown-divider border-white/[0.08]" />
                                </li>

                                <li id="Profile">
                                    <ul><li><a href="https://www.dev.fxmaster.co.uk/dashboard/profile/116/edit" className="block"></a><a href="https://www.dev.fxmaster.co.uk/dashboard/profile/116/edit" className="dropdown-item hover:bg-white/5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="user" data-lucide="user" className="lucide lucide-user w-4 h-4 mr-2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>Profile</a></li><li><a href="https://www.dev.fxmaster.co.uk/dashboard/profile/116/reset-password" className="block"></a><a href="https://www.dev.fxmaster.co.uk/dashboard/profile/116/reset-password" className="dropdown-item hover:bg-white/5"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="lock" data-lucide="lock" className="lucide lucide-lock w-4 h-4 mr-2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>Reset Password</a></li></ul>
                                </li>
                                <li>
                                    <hr className="dropdown-divider border-white/[0.08]" />
                                </li>
                                <li>
                                    <a id="Logout" href="https://www.dev.fxmaster.co.uk/logout" className="dropdown-item hover:bg-white/5">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" icon-name="toggle-right" data-lucide="toggle-right" className="lucide lucide-toggle-right w-4 h-4 mr-2"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle></svg> Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- END: Account Menu --> */}
                </div>

            </div>
        </div>
    )
}

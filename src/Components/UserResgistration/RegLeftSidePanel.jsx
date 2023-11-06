import React from "react";
import AddressPanel from "./AddressPanel";
import { useParams, useLocation } from "react-router-dom";
import AccountPreview from "./AccountPreview";


function RegLeftSidePanel() {
    const leftSidePanelList = [
        { id: "0", name: "personal", displayName: "Personal Details" },
        {
            id: "1",
            name: "mobileverfiy",
            displayName: "Mobile OTP Verification",
        },
        { id: "2", name: "emailverfiy", displayName: "Email OTP Verification" },
        { id: "3", name: "address", displayName: "Address & DOB" },
        { id: "4", name: "kycvetails", displayName: "KYC Documents" },
        { id: "5", name: "account-preview", displayName: "Account Preview" },
    ];
    
    const ShowPanal = useLocation();
    const currentUrl = ShowPanal.pathname.split("/");
    const currentPath = currentUrl[currentUrl.length - 1];
    
    console.log(currentPath);
    let activeSection = leftSidePanelList.find(obj => obj.name.toLowerCase() === currentPath);
    
    const ShowPanel = (e) => {
        console.log(e);
    };

    
   
    const SideElement = leftSidePanelList.map((item, index) => {

        var  ClassessName =   'intro-x flex items-center sm:mt-4 border-slate-200 text-gray-700 block';  
        ClassessName +=  activeSection.id >= item.id ?  ( activeSection.id === item.id ? "" :" complete-step  ") : " hidden ";
        
        console.log(currentPath === activeSection.name);
        return (
            <div className={ClassessName}  key ={index}>
                <button className="w-10 h-10 rounded-full btn btn-primary">
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
                        icon-name="chevron-down"
                        data-lucide="chevron-down"
                        className="lucide lucide-chevron-down block mx-auto"
                        >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </button>
                <div className="font-medium text-base ml-3">
                    {item.displayName}
                </div>
            </div>

          
        );
    });

    return (
        <div className="grid grid-cols-12 gap-4 sm:mt-8">
            <div className="h-full xl:block md:hidden lg:hidden  "></div>
            <div className="complete-step intro-y blog col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3 xl:col-span-3 box">
                <div className="intro-y chat box p-5 mt-0">
                    <div className="px-0 sm:px-0 step-bdr"> {SideElement} </div> 
                </div>
            </div>
             {currentPath === 'address' &&  <AddressPanel /> }
             {currentPath === 'account-preview' &&  <AccountPreview/> }

            
        </div>
    );
}

export default RegLeftSidePanel;

import React from "react";
import { Link } from "react-router-dom";
import * as Icon from 'react-feather';

function CustomerNavBar(params) {
    const iconPoints = [
        { name : 'home', path : <Icon.Home /> },       
        { name : 'octagon', path : <Icon.Octagon />},
        { name : 'activity', path : <Icon.Activity />},
        { name : 'list', path : <Icon.List />},
        { name : 'command', path : <Icon.Command />},
        { name : 'file', path : <Icon.File />},
    ];
    
    
  
    const getIconPoints = iconPoints.find(obj => obj.name === params.iconName );
   
    console.log(getIconPoints.path)
    return (
        <li>
            <Link
                to={params.redirectTo}
                className={`topbarMobileMenu top-menu ${
                    params.isActiveMenu === "yes"
                        ? "top-menu--active"
                        : "top-menu"
                }  ${params.navName.toLowerCase().replaceAll(" ", "")}`}
            >
                <span className="top-menu__icon">
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
                        icon-name={params.iconName}
                        data-lucide={params.iconName}
                        class={`lucide lucide-${params.iconName} `}
                    >
                       
                        {/* <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path> */}
                        {/* <polyline points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polyline> */}
                       {getIconPoints.path}
                    </svg>
                </span>
                <span className="top-menu__title ml-1">{params.navName}</span>
            </Link>
            <ul></ul>
        </li>
    );
}

export default CustomerNavBar;

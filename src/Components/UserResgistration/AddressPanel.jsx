import React from "react";
import "../../assets/css/style.css";
import AddressMainFrom from "./AddressMainFrom";
import { ToolTips } from "../../helpers/ToolTips";

function AddressPanel() {
    document.title = "FX Master | Address";
    return (
        <div className="intro-y blog col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-9 xl:col-span-8   box ">
            <div className="col-span-5 h-full">
                <div className="intro-y col-span-12 lg:col-span-8 xxl:col-span-9">
                    <div className="tab-content">
                        <div
                            id="chats"
                            className="tab-pane active"
                            role="tabpanel"
                            aria-labelledby="chats-tab"
                        >
                            <div className="pr-1">
                                <div className="intro-y col-span-12 lg:col-span-12">
                                    <div className="intro-y mt-0">
                                        <div className="flex sm:flex-row items-center p-3 border-b border-gray-200 dark:border-dark-5">
                                            <h2 className="font-medium text-base">
                                                Address &amp; DOB{" "}
                                            </h2>

                                            <ToolTips
                                                tipMsg={`Search Your address using postal Code.\n Please confirm the retrieved`}
                                            />
                                        </div>
                                        <AddressMainFrom />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressPanel;

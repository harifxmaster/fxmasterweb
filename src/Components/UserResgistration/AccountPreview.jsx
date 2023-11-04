import React from "react";
import { ToolTips } from "../../helpers/ToolTips";

const AccountPreview = () => {
    document.title = "FX Master | Account Preview";
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
                                                Account Confirmation
                                            </h2>
                                            <ToolTips
                                                tipMsg={` Verfiy your details and sumbit  `}
                                            />
                                        </div>

                                        <div className="grid grid-cols-12 gap-6 p-3">
                                            <div className="col-span-12 sm:col-span-12 lg:col-span-12 xxl:col-span-12">
                                                <h4 className="font-bold mb-3">
                                                    Personal Details
                                                </h4>

                                                <div className="flex sm:flex-col sm:flex-row  border-b border-gray-200">
                                                    <div className="mr-auto">
                                                        <div className="text-gray-600 mt-1">
                                                            First Name
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-full sm:w-64 text-right">
                                                            <div className="font-medium">
                                                                Mr Geetha
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex sm:flex-col sm:flex-row  border-b border-gray-200 mb-3">
                                                    <div className="mr-auto">
                                                        <div className="text-gray-600 mt-1">
                                                            Middle Name
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-full sm:w-64 text-right">
                                                            <div className="font-medium">
                                                                ahh
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex sm:flex-col sm:flex-row  border-b border-gray-200 mb-3">
                                                    <div className="mr-auto">
                                                        <div className="text-gray-600 mt-1">
                                                            Last Name
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-full sm:w-64 text-right">
                                                            <div className="font-medium">
                                                                N
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex sm:flex-col sm:flex-row  border-b border-gray-200 mb-3">
                                                    <div className="mr-auto">
                                                        <div className="text-gray-600 mt-1">
                                                            Email
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-full sm:w-64 text-right">
                                                            <div className="font-medium">
                                                                nadh@gmail.com
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex sm:flex-col sm:flex-row  border-b border-gray-200 mb-3">
                                                    <div className="mr-auto">
                                                        <div className="text-gray-600 mt-1">
                                                            Mobile Number
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-full sm:w-64 text-right">
                                                            <div className="font-medium">
                                                                +44- 07864323567
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex sm:flex-col sm:flex-row  border-b border-gray-200 mb-3">
                                                    <div className="mr-auto">
                                                        <div className="text-gray-600 mt-1">
                                                            Country of residence
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-full sm:w-64 text-right">
                                                            <div className="font-medium">
                                                                United Kingdom
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex sm:flex-col sm:flex-row  border-b border-gray-200 mb-3">
                                                    <div className="mr-auto">
                                                        <div className="text-gray-600 mt-1">
                                                            Nationality
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-full sm:w-64 text-right">
                                                            <div className="font-medium">
                                                                British, UK
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex sm:flex-col sm:flex-row  border-b border-gray-200 mb-3">
                                                    <div className="mr-auto">
                                                        <div className="text-gray-600 mt-1">
                                                            Date Of Birth
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-full sm:w-64 text-right">
                                                            <div className="font-medium">
                                                                10-07-1992
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex sm:flex-col sm:flex-row  border-b border-gray-200 mb-3">
                                                    <div className="mr-auto">
                                                        <div className="text-gray-600 mt-1">
                                                            Bank Account Type
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-full sm:w-64 text-right">
                                                            <div className="font-medium">
                                                                Individual
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex sm:flex-col sm:flex-row  border-b border-gray-200 mb-3">
                                                    <div className="mr-auto">
                                                        <div className="text-gray-600 mt-1">
                                                            Address{" "}
                                                        </div>
                                                    </div>
                                                    <div className="flex">
                                                        <div className="w-full sm:w-64 text-right">
                                                            <div className="font-medium">
                                                                9 Bletchley,
                                                                Milton Keynes
                                                                MK2 2FF
                                                                Buckinghamshire
                                                                United Kingdom
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-span-12 sm:col-span-6 lg:col-span-6 xxl:col-span-6"></div>

                                            <div className="col-span-12 sm:col-span-12 lg:col-span-12 xxl:col-span-12">
                                                <form
                                                    method="post"
                                                    action="https://www.dev.fxmaster.co.uk/customer/signup/account-preview"
                                                    id="previewForm"
                                                >
                                                    {/* <input
                                                        type="hidden"
                                                        name="_token"
                                                        value="CPzmdNsH73KzsgBvoXbzmRCQv24b6qfdzN45wCYo"
                                                    />
                                                    <input
                                                        name="callback_url"
                                                        id="callback_url"
                                                        type="hidden"
                                                    />
                                                    <input
                                                        name="document_type"
                                                        id="document_type"
                                                        type="hidden"
                                                    /> */}
                                                    <div className="intro-y">
                                                        <div className="grid grid-cols-12 gap-2 mt-0 pt-0 flex items-end">
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <img
                                                                    className="rounded-md proof-default"
                                                                    alt=""
                                                                    src="https://fxmaster1.blob.core.windows.net/fxmaster-uat/169893545759.png?sv=2017-11-09&sr=b&se=2023-11-03T05:40:52Z&sp=r&spr=https&sig=O2hJM9uXOO7vpfJ4zQtCyqZyAY9%2FfjlRwE%2FjwO4jc1o%3D"
                                                                />
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <img
                                                                    className="rounded-md proof-default"
                                                                    alt=""
                                                                    src="https://fxmaster1.blob.core.windows.net/fxmaster-uat/16989354584.png?sv=2017-11-09&sr=b&se=2023-11-03T05:40:52Z&sp=r&spr=https&sig=51kj0%2Fohsi%2FnZ5gKmLQwbvlC41f1xf5OJy%2FCuiWVz1k%3D"
                                                                />
                                                            </div>
                                                            <div className="col-span-6 sm:col-span-3">
                                                                <img
                                                                    className="rounded-md proof-default"
                                                                    alt=""
                                                                    src="https://fxmaster1.blob.core.windows.net/fxmaster-uat/169893545882.jpeg?sv=2017-11-09&sr=b&se=2023-11-03T05:40:52Z&sp=r&spr=https&sig=67f2hZ7EpI3SyRs%2FuPQpDV3mcMjOPnW4xZQYpYymMIw%3D"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex mt-3">
                                                        <div className="w-full px-2">
                                                            <div className="form-inline float-right">
                                                                <button
                                                                    id="CompanyPerview"
                                                                    type="submit"
                                                                    className="btn btn-elevated-primary w-24 mr-1"
                                                                >
                                                                    Continue
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPreview;

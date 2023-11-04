import React, { useState } from "react";
import Select from "react-dropdown-select";



function AddressMainFrom() {
    const [addressForm, setAddressFormData] = useState({
        registered_flow: "",
        date_of_birth: "",
        zip: "",
        house_no: "",
        street_1: "",
        street_2: "",
        city: "",
        state: "",
        country: "",
        skip_kyc: "",
    });

    const EventHandler = (events) => {
        const { name, value } = events.target;
        setAddressFormData({ ...addressForm, [name]: value });
    };

    const CountrySlctOpt = [
        {value: "india",id : "IN",name: "india", label: "india" },
        {value: "USA",id : "USA",name: "USA", label: "USA" },
        {value: "UAE",id : "UAE",name: "UAE", label: "UAE" },
        {value: "UK",id : "UK",name: "UK", label: "UK" },
        {value: "DUBAI",id : "DBI",name: "DUBAI", label: "DUBAI" },
    ];

    const validateForm = (e) => {
        console.log(addressForm);
    };

    

    return (
        <form action="#" method="post">
            <div className="p-3">
                <div className="preview">
                    {/* Type Field */}
                    {/*  Radio Btn */}
                    <div className="form-inline mb-2">
                        <label className="form-label sm:w-30">
                            Registration Type{" "}
                            <span className="text-theme-6">*</span>
                        </label>
                        <div className="sm:w-3/5">
                            <div className="flex form-inline pb-2">
                                <div className="form-check mr-2 sm:mt-2 mt-2">
                                    <input
                                        id="radio-switch-4"
                                        className="form-check-input"
                                        type="radio"
                                        name="registered_flow"
                                        value="individual"
                                        required
                                        onChange={EventHandler}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="radio-switch-4"
                                    >
                                        Personal
                                    </label>
                                </div>

                                <div className="form-check sm:ml-10 sm:mt-2 mt-2">
                                    <input
                                        id="radio-switch-5"
                                        className="form-check-input"
                                        type="radio"
                                        name="registered_flow"
                                        value="business"
                                        required
                                        onChange={EventHandler}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="radio-switch-5"
                                    >
                                        Business
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Radio Btn */}
                    {/*  DOB */}

                    {/* <InputFields
                        label="Date of Birth"
                        id="date_of_birth"
                        className="form-control datepicker_flatpicker flatpickr-input"
                        placeholder="DD-MM-YYYY"
                        value={addressForm.date_of_birth}
                        required={true}
                        type="date"
                        onInputChange={EventHandler}
                    /> */}

                    <div className="form-inline mt-2">
                        <label
                            htmlFor="date_of_birth"
                            className="form-label sm:w-24"
                        >
                            Date of Birth
                            <span className="text-theme-6"> *</span>
                        </label>
                        <div className="sm:w-3/5">
                            <input
                                type="text"
                                id="date_of_birth"
                                name="date_of_birth"
                                className="form-control datepicker_flatpicker flatpickr-input"
                                required
                                value={addressForm.date_of_birth}
                                onChange={EventHandler}
                                placeholder="DD-MM-YYYY"
                            />
                        </div>
                    </div>

                    <h2 className="font-medium text-base mt-2">Address</h2>

                    <div className="form-inline mt-2">
                        <label htmlFor="zip" className="form-label sm:w-24">
                            Pincode
                            <span className="text-theme-6"> *</span>
                        </label>
                        <div className="sm:w-3/5">
                            <div
                                id="pincode_address"
                                className="relative grid grid-cols-12 mt-0"
                            >
                                <input
                                    type="text"
                                    id="zip"
                                    placeholder="Enter your Pincode"
                                    name="zip"
                                    value={addressForm.zip}
                                    className="col-span-12 sm:col-span-12 form-control mt-0"
                                    onChange={EventHandler}
                                />
                                <button
                                    id="getaddress_button"
                                    type="button"
                                    className="col-span-2 sm:col-span-2 btn btn-primary mr-0 required"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="postcode-serch feather feather-search search__icon dark:text-gray-300 search__icon dark:text-gray-300"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line
                                            x1="21"
                                            y1="21"
                                            x2="16.65"
                                            y2="16.65"
                                        ></line>
                                    </svg>
                                </button>
                                <input
                                    id="postcode"
                                    name="postcode"
                                    value=""
                                    type="hidden"
                                    className="form-control "
                                />
                            </div>
                        </div>
                    </div>

                    {/* HOuse NO  */}
                    {/* <InputFields
                        label="House Number"
                        id="house_no"
                        className="form-control"
                        placeholder=""
                        value={addressForm.house_no}
                        required={true}
                        type="text"
                        onInputChange={EventHandler}
                    />
                    */}

                    <div className="form-inline mt-2">
                        <label
                            htmlFor="house_no"
                            className="form-label sm:w-24"
                        >
                            House Number
                            <span className="text-theme-6"> *</span>
                        </label>
                        <div className="sm:w-3/5">
                            <input
                                type="text"
                                id="house_no"
                                name="house_no"
                                className="form-control "
                                required
                                value={addressForm.house_no}
                                onChange={EventHandler}
                            />
                        </div>
                    </div>

                    <div className="form-inline mt-2">
                        <label
                            htmlFor="street_1"
                            className="form-label sm:w-24"
                        >
                            Street 1<span className="text-theme-6"> *</span>
                        </label>
                        <div className="sm:w-3/5">
                            <input
                                type="text"
                                id="street_1"
                                name="street_1"
                                className="form-control "
                                required
                                value={addressForm.street_1}
                                onChange={EventHandler}
                            />
                        </div>
                    </div>

                    <div className="form-inline mt-2">
                        <label
                            htmlFor="street_2"
                            className="form-label sm:w-24"
                        >
                            {" "}
                            Address 1
                        </label>
                        <div className="sm:w-3/5">
                            <input
                                type="text"
                                id="street_2"
                                name="street_2"
                                className="form-control "
                                required
                                value={addressForm.street_2}
                                onChange={EventHandler}
                            />
                        </div>
                    </div>

                    <div className="form-inline mt-2">
                        <label htmlFor="city" className="form-label sm:w-24">
                            City
                            <span className="text-theme-6"> *</span>
                        </label>
                        <div className="sm:w-3/5">
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="form-control "
                                required
                                value={addressForm.city}
                                onChange={EventHandler}
                            />
                        </div>
                    </div>
                    <div className="form-inline mt-2">
                        <label htmlFor="state" className="form-label sm:w-24">
                            State
                            <span className="text-theme-6"> *</span>
                        </label>
                        <div className="sm:w-3/5">
                            <input
                                type="text"
                                id="state"
                                name="state"
                                className="form-control "
                                required
                                value={addressForm.state}
                                onChange={EventHandler}
                            />
                        </div>
                    </div>

                    {/*

                    <InputFields
                        label="Street 1"
                        id="street_1"
                        className="form-control"
                        placeholder=""
                        value={addressForm.street_1}
                        type="text"
                        required={true}
                        onInputChange={EventHandler}
                    />

                    <InputFields
                        label="Address 1"
                        id="street_2"
                        className="form-control"
                        placeholder=""
                        value={addressForm.street_2}
                        type="text"
                        required="false"
                        onInputChange={EventHandler}
                    />

                    <InputFields
                        label="City"
                        id="city"
                        className="form-control"
                        placeholder=""
                        value={addressForm.city}
                        type="text"
                        required={true}
                        onInputChange={EventHandler}
                    />

                    <InputFields
                        label="State"
                        id="state"
                        className="form-control"
                        placeholder=""
                        value={addressForm.state}
                        type="text"
                        required={true}
                        onInputChange={EventHandler}
                    />

                     */}
                    <div className="form-inline mt-2">
                        <label htmlFor="country" className="form-label sm:w-24">
                            Country
                        </label>
                        <div className="sm:w-3/5">
                            {/* <select 
                                id='country'
                                name='country'
                                className="form-control"
                                value= { addressForm.country }
                                onChange={EventHandler} 
                            >
                                {CountrySlctOpt.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.name.toUpperCase()}
                                    </option>
                                ))}
                            </select> */}

                            <Select
                                options={CountrySlctOpt}
                                value= { addressForm.country }
                                className="form-control select2 select2-hidden-accessible"
                               
                                onChange={(opt) =>
                                    console.log(opt.value, opt.id)
                                }
                            />
                            {/* <select id='country'
                                name='country'
                                className="form-control  select-search" 
                                value= { addressForm.country }
                                onChange={EventHandler}>
                                
                                {CountrySlctOpt.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.name.toUpperCase()}
                                    </option>
                                ))}
                                
                            </select> */}
                        </div>
                    </div>

                    {/* <SelectSearch options={options} value="sv" name="language" placeholder="Choose your language" /> */}

                    <div className="form-inline mb-2">
                        <div className="sm:w-3/5">
                            <label htmlFor="skip_kyc" className="form-label">
                                <input
                                    className="form-check-input border mr-2"
                                    type="checkbox"
                                    id="skip_kyc"
                                    name="skip_kyc"
                                    value="skip_kyc"
                                    
                                    onChange={EventHandler}
                                />
                                Skip KYC
                            </label>
                        </div>
                    </div>
                   
                    <div className="form-inline mb-2">
                        <div className="form-label sm:w-24"></div>
                        <div className="sm:w-3/5">
                            <div className="form-inline float-right mb-3">
                                <button id="SubmitAddress" type="submit" className =" -intro-x  btn btn-elevated-primary w-24 mr-0">
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddressMainFrom;

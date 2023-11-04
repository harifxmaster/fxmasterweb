import React from "react";

const InputFields = ({
    label,
    id,
    className,
    type,
    placeholder,
    value,
    required = false,
    onChange,
}) => {
    return (
        <div className="form-inline mt-2">
            <label htmlFor={id} className="form-label sm:w-24">
                {" "}
                {label}{" "}
                {required === "true" ? (
                    <span className="text-theme-6">*</span>
                ) : (
                    ""
                )}
            </label>
            <div className="sm:w-3/5">
                <input
                    type={type}
                    id={id}
                    name={id}
                    className={className}
                    placeholder={placeholder}
                    required={required === "true" ? true : false}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default InputFields;

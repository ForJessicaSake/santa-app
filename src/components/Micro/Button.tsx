import React from "react";

const Button = ({
    children,
    className,
    ...props
}: React.ComponentProps<"button">) => {
    return (
        <button
            className={`${className} active:shadow-none transition-shadow duration-200 ease-in-out border-[3px] rounded-full  border-white  shadow-md shadow-black bg-[#212F38] text-white font-medium`}
            {...props}
        >
            <span className="inline-block  border-[8px] border-black/40 w-full rounded-full ">
                <span className="rounded-full flex items-center gap-x-2 justify-center border-b-[3px] border-white/30 w-full p-2 min-h-[45px] font-bold">
                    {children}
                </span>
            </span>
        </button>
    );
};

export default Button;

import React, { useEffect, useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, UserProfile, Notification } from ".";
import { StateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, custFunc, icon, color, dotColor }) => {
    return (
        <TooltipComponent content={title} position="BottomCenter">
            <button
                type="button"
                onClick={custFunc}
                style={{ color }}
                className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            >
                <span
                    style={{ background: dotColor }}
                    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
                ></span>
                {icon}
            </button>
        </TooltipComponent>
    );
};
const Navbar = () => {
    const {
        setActiveMenu,
        isClicked,
        handleClick,
        screensize,
        setScreenSize,
        currentColor,
    } = useContext(StateContext);

    useEffect(() => {
        const handleScreenSize = () => {
            setScreenSize(window.innerWidth);
        };
        window.addEventListener("resize", handleScreenSize);
        handleScreenSize();
        return () => window.removeEventListener("resize", handleScreenSize);
    }, []);

    useEffect(() => {
        if (screensize <= 900) setActiveMenu(false);
        else setActiveMenu(true);
    }, [screensize, setActiveMenu]);

    return (
        <>
            <div className="flex justify-between p-2 md:mx-6 relative">
                <NavButton
                    title="Menu"
                    custFunc={() => {
                        setActiveMenu((prevState) => !prevState);
                    }}
                    icon={<AiOutlineMenu />}
                    color={currentColor}
                />
                <div className="flex">
                    <NavButton
                        title="Cart"
                        custFunc={() => handleClick("cart")}
                        color={currentColor}
                        icon={<FiShoppingCart />}
                    />
                    <NavButton
                        title="Chat"
                        custFunc={() => handleClick("chat")}
                        color={currentColor}
                        dotColor="03C9D7"
                        icon={<BsChatLeft />}
                    />
                    <NavButton
                        title="Notifications"
                        custFunc={() => handleClick("notifications")}
                        color={currentColor}
                        icon={<RiNotification3Line />}
                    />
                    <TooltipComponent content="Profile" position="BottomCenter">
                        <div
                            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                            onClick={() => handleClick("userProfile")}
                        >
                            <img
                                className="rounded-full w-8 h-8"
                                src={avatar}
                            />
                            <p>
                                <span className="text-gray-400 text-14">
                                    Hi,{" "}
                                </span>
                                <span className="text-gray-400 text-14 font-bold ml-1">
                                    Michael
                                </span>
                            </p>
                            <MdKeyboardArrowDown className="text-gray-400 text-14" />
                        </div>
                    </TooltipComponent>
                    {isClicked.cart && <Cart />}
                    {isClicked.chat && <Chat />}
                    {isClicked.notifications && <Notification />}
                    {isClicked.userProfile && <UserProfile />}
                </div>
            </div>
        </>
    );
};

export default Navbar;

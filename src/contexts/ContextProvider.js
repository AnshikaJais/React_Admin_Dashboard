import React, { useState, createContext } from "react";

const initialState = {
    cart: false,
    notifications: false,
    chart: false,
    userProfile: false,
};
export const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState("03C9D7");
    const [currentMode, setCurrentMode] = useState("Light");
    const [themeSettings, setThemeSettings] = useState(false);
    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem("themeMode", e.target.value);
        setThemeSettings(false);
    };
    const setColor = (e) => {
        setCurrentColor(e.target.value);
        localStorage.setItem("colorMode", e.target.value);
        setThemeSettings(false);
    };
    const handleClick = (item) => {
        setIsClicked({ ...initialState, [item]: true });
    };
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                currentMode,
                setColor,
                setMode,
                themeSettings,
                setThemeSettings,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

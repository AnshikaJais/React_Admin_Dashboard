import React, { useContext, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Sidebar, ThemeSettings } from "./components";
import {
    Ecommerce,
    Bar,
    Area,
    Financial,
    ColorMapping,
    Line,
    Pie,
    Pyramid,
    Stacked,
    Calendar,
    ColorPicker,
    Customers,
    Orders,
    Editor,
    Employees,
    Kanban,
} from "./pages";
import { StateContext } from "./contexts/ContextProvider";
import "./App.css";

function App() {
    const {
        activeMenu,
        themeSettings,
        setThemeSettings,
        currentColor,
        currentMode,
    } = useContext(StateContext);

    return (
        <Fragment>
            <div className={currentMode === "Dark" ? "dark" : "light"}>
                <BrowserRouter>
                    <div className="flex relative dark:bg-main-dark-bg">
                        <div
                            className="fixed right-4 bottom-4"
                            style={{ zIndex: 1000 }}
                        >
                            <TooltipComponent content="Settings" position="Top">
                                <button
                                    type="button"
                                    className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                                    style={{
                                        background: currentColor,
                                        borderRadius: "50%",
                                    }}
                                    onClick={() => {
                                        setThemeSettings(true);
                                    }}
                                >
                                    <FiSettings />
                                </button>
                            </TooltipComponent>
                        </div>
                        {activeMenu ? (
                            <div className="w-72 sidebar fixed dark:bg-secondary-dark-bg bg-white">
                                <Sidebar />
                            </div>
                        ) : (
                            <div className="w-0 dark:bg-secondary-dark-bg">
                                <Sidebar />
                            </div>
                        )}
                        <div
                            className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                                activeMenu ? "md:ml-72" : "flex-2"
                            }`}
                        >
                            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                                <Navbar />
                            </div>
                            <div>
                                {themeSettings && <ThemeSettings />}
                                <Routes>
                                    {/* Dashboard */}
                                    <Route path="/" element={<Ecommerce />} />
                                    <Route
                                        path="/ecommerce"
                                        element={<Ecommerce />}
                                    />
                                    {/* Pages */}
                                    <Route
                                        path="/orders"
                                        element={<Orders />}
                                    />
                                    <Route
                                        path="/employees"
                                        element={<Employees />}
                                    />
                                    <Route
                                        path="/customers"
                                        element={<Customers />}
                                    />

                                    {/* Apps */}
                                    <Route
                                        path="/kanban"
                                        element={<Kanban />}
                                    />
                                    <Route
                                        path="/editor"
                                        element={<Editor />}
                                    />
                                    <Route
                                        path="/calendar"
                                        element={<Calendar />}
                                    />
                                    <Route
                                        path="/color-picker"
                                        element={<ColorPicker />}
                                    />

                                    {/* charts */}
                                    <Route path="/line" element={<Line />} />
                                    <Route path="/area" element={<Area />} />
                                    <Route path="/bar" element={<Bar />} />
                                    <Route path="/pie" element={<Pie />} />
                                    <Route
                                        path="/financial"
                                        element={<Financial />}
                                    />
                                    <Route
                                        path="/color-mapping"
                                        element={<ColorMapping />}
                                    />
                                    <Route
                                        path="/pyramid"
                                        element={<Pyramid />}
                                    />
                                    <Route
                                        path="/stacked"
                                        element={<Stacked />}
                                    />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        </Fragment>
    );
}

export default App;

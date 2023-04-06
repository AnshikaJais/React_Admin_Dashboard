import React, { useContext } from "react";
import { StackedChart, Pie, Button, SparkLine } from "../components";
import { GoPrimitiveDot } from "react-icons/go";
import {
    earningData,
    SparklineAreaData,
    ecomPieChartData,
} from "../data/dummy";
import { StateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
    const { currentColor } = useContext(StateContext);
    return (
        <div className="m-5">
            <div className="flex flex-wrap lg:flex-nowrap justify-center">
                <div
                    className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-xl w-full lg:w-100 p-8 pt-9 bg-hero-pattern bg-no-repeat 
                bg-cover bg-center"
                >
                    <div className="flex justify-between items-cnter">
                        <div>
                            <p className="font-bold text-gray-400">Earnings</p>
                            <p className="text-2xl">$63,488.50</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <Button
                            color="white"
                            bgColor={currentColor}
                            text="Download"
                            borderRadius="10px"
                            size="md"
                        />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-1 items-center m-3">
                    {earningData.map((earning) => (
                        <div
                            key={earning.title}
                            className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-xl"
                        >
                            <button
                                style={{
                                    color: earning.iconColor,
                                    backgroundColor: earning.iconBg,
                                }}
                                className="text-2xl rounded-full hover:drop-shadow-xl opacity-0.9 p-3"
                            >
                                {earning.icon}
                            </button>
                            <p className="mt-3">
                                <span className="text-lg font-semibold">
                                    {earning.amount}
                                </span>
                                <span
                                    className={`text-sm text-${earning.pcColor} ml-2`}
                                >
                                    {earning.percentage}
                                </span>
                            </p>
                            <p className="text-sm text-gray-400 mt-1">
                                {earning.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-4 flex-wrap justify-center mt-10">
                <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-3 rounded-2xl ">
                    <div className="flex justify-between ">
                        <p className="font-semibold text-xl pl-5">
                            Revenue Updates
                        </p>
                        <div className="flex items-center gap-4 pr-5">
                            <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                <span>Expense</span>
                            </p>
                            <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 flex gap-10 flex-wrap justify-center lg:w-1000">
                        <div className="border-r-1 border-color m-4 pr-20">
                            <div>
                                <p>
                                    <span className="text-2xl font-semibold">
                                        $12,344.60
                                    </span>
                                    <span className="ml-1 p-1.5 hover:drop-shadow-xl cursor-pointer rounded-xl text-white bg-green-400 text-xs">
                                        20%
                                    </span>
                                </p>
                                <p className="text-gray-400 mt-1">Budget</p>
                            </div>
                            <div className="mt-8">
                                <p>
                                    <span className="text-2xl font-semibold">
                                        $12,344.60
                                    </span>
                                </p>
                                <p className="text-gray-400 mt-1">Expense</p>
                            </div>
                            <div className="mt-5">
                                <SparkLine
                                    currentColor={currentColor}
                                    id="line-sparkline"
                                    type="Line"
                                    height="80px"
                                    width="250px"
                                    data={SparklineAreaData}
                                    color={currentColor}
                                />
                            </div>
                            <div className="mt-10">
                                <Button
                                    color="white"
                                    bgColor={currentColor}
                                    text="Download Report"
                                    borderRadius="10px"
                                />
                            </div>
                        </div>
                        <div className="pl-10">
                            <StackedChart width="320px" height="360px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ecommerce;

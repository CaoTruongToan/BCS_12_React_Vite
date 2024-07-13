import React, { useState } from "react";

const BaiTapSate = () => {
    const arrButton = [
        {
            icon: "./public/CarBasic/icons/icon-black.jpg",
            title: "Crystal Black",
            subTitle: "Prarl",
            selectedCar : "black-car.jpg"
        },
        {
            icon: "./public/CarBasic/icons/icon-steel.jpg",
            title: "Modern Steel",
            subTitle: "Steel",
            selectedCar : "steel-car.jpg"
        },
        {
            icon: "./public/CarBasic/icons/icon-silver.jpg",
            title: "Lunar Silver",
            subTitle: "Silver",
            selectedCar : "silver-car.jpg"
        },
        {
            icon: "./public/CarBasic/icons/icon-red.jpg",
            title: "Rayllye Red",
            subTitle: "Red",
            selectedCar : "red-car.jpg"
        },
    ];

    const [selectedCar, setSelectedCar] = useState("black-car.jpg");

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Bài tập hiển thị loại xe tương ứng</h2>
            <div className="flex">
                <div className="w-2/3 me-4">
                    <img src={`./public/CarBasic/products/${selectedCar}`} alt="Selected Car" className="w-full h-auto" />
                </div>
                <div className="w-1/3 space-y-4">
                    { arrButton.map((item, index) => {
                            return (
                                <button
                                    key={index}
                                    className="flex items-center py-2 px-5 rounded-lg space-x-3 border border-black w-full hover:bg-gray-200"
                                    onClick={() => setSelectedCar(item.selectedCar)}
                                >
                                    <img
                                        width={40}
                                        src= {item.icon}
                                        alt={item.title}
                                    />
                                    <div className="text-left">
                                        <b>{item.title}</b>
                                        <p>{item.subTitle}</p>
                                    </div>
                                </button>
                            )
                        })
                    }        
                </div>
            </div>
        </div>
    );
};

export default BaiTapSate;

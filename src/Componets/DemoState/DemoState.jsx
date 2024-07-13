import { useState } from "react";

import ImgXeDen from "./../../assets/products/black-car.jpg";


const DemoState = () => {
    const [diemToan, setDiemToan] = useState(9);
    const [hoTen, setHoTen] = useState("");

    const tangDiem = () => { setDiemToan(diemToan + 1); };
    const truDiem = () => { setDiemToan(diemToan - 1);};

    const handleInputChange = (event) => {
        setHoTen(event.target.value);
    };
    
    return( 
        <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Điểm toán của bạn:</h2>
            <p className="text-2xl font-bold mb-4">{diemToan}</p>
            <div className="flex space-x-4">
                <button 
                    onClick={tangDiem} 
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Tăng điểm Toán
                </button>
                <button
                    onClick={truDiem} 
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">
                    Trừ điểm Toán    
                </button>
            </div>

            <div className="flex flex-col mt-6 items-center w-full">
                <label htmlFor="hoTenInput" className="block mb-2 text-lg font-medium">Nhập họ tên của bạn</label>
                <input type="text" className="p-2 border border-gray-300 rounded w-full max-w-md mb-4" placeholder="Nhập họ tên"
                    value={hoTen}
                    onChange={handleInputChange}
                />
                <p className="text-lg">Họ tên: <span className="font-semibold">{hoTen}</span></p>
            </div>


            <img src="./public/CarBasic/products/red-car.jpg" alt="" />
            <img src={ImgXeDen} alt="" />


        </div>
    );
};

export default DemoState;

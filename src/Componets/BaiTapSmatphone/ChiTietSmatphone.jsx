import React from 'react';

const ChiTietSmatphone = ({ phone }) => {
    return (
        <div className='flex mt-6'>
            <div className='w-3/12'>
                <img 
                    src={phone.image} 
                    alt={phone.name} 
                    className="w-80 h-80 object-contain mx-auto rounded" 
                />
            </div>

            <div className='w-9/12'>
                <h2 className='text-xl font-bold mb-4'>Thông số kỹ thuật</h2>
                <table className="min-w-96 border-collapse border border-gray-300">
                    <tbody>
                        <tr className="bg-gray-100">
                            <td className="border border-gray-300 p-2">Màn hình:</td>
                            <td className="border border-gray-300 p-2">{phone.screen}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Hệ điều hành:</td>
                            <td className="border border-gray-300 p-2">{phone.os}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border border-gray-300 p-2">Camera trước:</td>
                            <td className="border border-gray-300 p-2">{phone.front_camera}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">Camera sau:</td>
                            <td className="border border-gray-300 p-2">{phone.rear_camera}</td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="border border-gray-300 p-2">RAM:</td>
                            <td className="border border-gray-300 p-2">{phone.ram}</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 p-2">ROM:</td>
                            <td className="border border-gray-300 p-2">{phone.rom}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ChiTietSmatphone;

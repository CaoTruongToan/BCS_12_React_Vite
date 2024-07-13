import React from 'react'

const ListSmatphone = ({ listPhone , title, onSelect  }) => {

    return ( 
        <>
            <h3>{title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {listPhone.map((iphone, index) => {
                    const { image, name, screen, os, front_camera, rear_camera, ram, rom } = iphone;
                    return (
                        <div key={index} className="border rounded-lg p-4 shadow-lg">
                            <img src={image} alt={name} className="w-full h-52 object-contain mb-4 rounded" />
                            <h3 className="text-lg font-semibold mb-2">{name}</h3>
                            <p><strong>Màn hình:</strong> {screen}</p>
                            <p><strong>Hệ điều hành:</strong> {os}</p>
                            <p><strong>Camera trước:</strong> {front_camera}</p>
                            <p><strong>Camera sau:</strong> {rear_camera}</p>
                            <p><strong>RAM:</strong> {ram}</p>
                            <p><strong>ROM:</strong> {rom}</p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                onClick={() => onSelect(iphone)}>
                                Xem chi tiết
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default ListSmatphone

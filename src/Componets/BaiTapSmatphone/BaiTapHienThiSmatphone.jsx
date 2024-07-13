import React, { useState } from 'react';
import ListSmatphone from './ListSmatphone';
import ChiTietSmatphone from './ChiTietSmatphone';

const BaiTapHienThiSmatphone = () => {
    const [selectedPhone, setSelectedPhone] = useState(null);

    const iphones = [
        {
            name: "iPhone 12",
            image: "https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg",
            screen: "OLED, 6.1\", Super Retina XDR",
            os: "iOS 14",
            front_camera: "12 MP",
            rear_camera: "Chính 12 MP & Phụ 12 MP",
            ram: "4 GB",
            rom: "64 GB"
        },
        {
            name: "iPhone 11",
            image: "https://cdn.tgdd.vn/Products/Images/42/249948/samsung-galaxy-s23-ultra-green-thumbnew-600x600.jpg",
            screen: "LCD, 6.1\", Liquid Retina",
            os: "iOS 13",
            front_camera: "12 MP",
            rear_camera: "Chính 12 MP & Phụ 12 MP",
            ram: "4 GB",
            rom: "64 GB"
        },
        {
            name: "iPhone SE (2020)",
            image: "https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-white-thumbnew-600x600.jpg",
            screen: "LCD, 4.7\", Retina HD",
            os: "iOS 13",
            front_camera: "7 MP",
            rear_camera: "12 MP",
            ram: "3 GB",
            rom: "64 GB"
        },
        {
            name: "iPhone 13 Pro",
            image: "https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-hong-128gb-thumb-600x600.jpg",
            screen: "OLED, 6.1\", Super Retina XDR",
            os: "iOS 15",
            front_camera: "12 MP",
            rear_camera: "Chính 12 MP & Phụ 12 MP",
            ram: "6 GB",
            rom: "128 GB"
        }
    ];

    const handleSelectPhone = (phone) => {
        setSelectedPhone(phone);
    };

    return (
        <div>
            <h2>Bài tập hiển thị chi tiết Smartphone</h2>
            <ListSmatphone listPhone={iphones} title="List Smartphone" onSelect={handleSelectPhone} />
            {selectedPhone && <ChiTietSmatphone phone={selectedPhone} />}
        </div>
    );
};

export default BaiTapHienThiSmatphone;

import React from "react";

const ItemPokemon = ({ pokemon }) => {
    return (
        <div key={pokemon.name} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <img className="w-full h-48 object-cover"
                src={pokemon.image} alt="img pokemon"
            />
            <h3 className="text-lg font-bold mt-2">{pokemon.name}</h3>
            <p className="mt-1">Tấn công: {pokemon.attack}</p>
            <p className="mt-1">Phòng thủ: {pokemon.defense}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Xem chi tiết
            </button>
        </div>
    );
};

export default ItemPokemon;

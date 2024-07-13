import { useState } from "react";
import HomeDemo from "./Componets/HomeDemo";
import HeaderDemo from "./Componets/HeaderDemo";
import NavDemo from "./Componets/NavDemo";
import ContentDemo from "./Componets/ContentDemo";
import RenderShoes from "./Componets/RenderShoes";
import DemoCss from "./Componets/DemoCss/DemoCss";
import DemoEvent from "./Componets/DemoEvent";
import DemoState from "./Componets/DemoState/DemoState";
import BaiTapSate from "./Componets/DemoState/BaiTapSate";
import BaiTapPokemonProps from "./Componets/BaiTapPokemon/BaiTapPokemonProps";
import BaiTapHienThiSmatphone from "./Componets/BaiTapSmatphone/BaiTapHienThiSmatphone";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* <DemoCss/>
            <HomeDemo />
            <HeaderDemo />
            <HeaderDemo />
            <div className="grid grid-cols-3 h-40">
                <NavDemo />
                <ContentDemo />
            </div>
            <RenderShoes />
            <DemoEvent/>
            <DemoState/> */}

            {/* <BaiTapSate/> */}

            {/* <BaiTapPokemonProps/> */}
            <BaiTapHienThiSmatphone/>
        </>
    );
}

export default App;

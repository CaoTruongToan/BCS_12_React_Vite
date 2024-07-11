import { useState } from "react";
import HomeDemo from "./Componets/HomeDemo";
import HeaderDemo from "./Componets/HeaderDemo";
import NavDemo from "./Componets/NavDemo";
import ContentDemo from "./Componets/ContentDemo";
import RenderShoes from "./Componets/RenderShoes";
import DemoCss from "./Componets/DemoCss/DemoCss";
import DemoEvent from "./Componets/DemoEvent";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>

            <DemoCss/>

            <HomeDemo />

            <HeaderDemo />

            <HeaderDemo />

            <div className="grid grid-cols-3 h-40">
                <NavDemo />
                <ContentDemo />
            </div>
            
            <RenderShoes />

            <DemoEvent/>

            <div className="container">
                <h4 className="demo_sass">Hello SASS</h4>
            </div>
        </>
    );
}

export default App;

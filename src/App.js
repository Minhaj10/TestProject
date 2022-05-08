import React from "react";
import { useSelector } from "react-redux";
import Home from "./components/home";

function App() {
    const isCartAdded = useSelector((state) => state.cart.isCartAdded);
    console.log(isCartAdded);
    return (
        <>
        
            <Home></Home>
        </>
    );
}

export default App;

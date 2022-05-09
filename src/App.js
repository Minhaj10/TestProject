import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import Home from "./components/home";
import { fetchData } from "./store/card-actions";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const alldata = useSelector((state) => state.cart.launchList);
    console.log(alldata);
    return (
        <>
            <Home></Home>
        </>
    );
}

export default App;

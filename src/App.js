import React, { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import Home from "./components/home";
import {getAllData} from "./store/card-slice"

function App() {
    const dispatch = useDispatch();
    const alldata = useSelector((state) => state.card);
    
    useEffect(() => {
        dispatch(getAllData());
    }, [dispatch]);

    
    console.log(alldata.launchList);
    return (
        <>
        <div className="container">
      <div className="row g-3">
        {alldata.launchList &&
          alldata.launchList.length > 0 &&
          alldata.launchList.map((lunch) => {
            return (
              <div className="col-12 col-md-6 col-lg-4">
                 <div className="card h-100">
      <img src={lunch.links.mission_patch_small} className="card-img-top" alt="lunch-img" />
      <div className="card-body">
        <h5 className="card-title">{lunch.mission_name}</h5>
        <p className="card-text">{lunch.details}</p>
      </div>
    </div>
              </div>
            );
          })}
      </div>
    </div>
            <Home></Home>
        </>
    );
}

export default App;

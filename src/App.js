import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "./components/home";
import { getAllData } from "./store/card-slice";
import M from "materialize-css";
function App() {
    const dispatch = useDispatch();
    const alldata = useSelector((state) => state.card);

    useEffect(() => {
        dispatch(getAllData());
    }, [dispatch]);

    console.log(alldata.launchList);
    return (
        <>
         <nav>
    <div class="nav-wrapper">
      <form>
        <div class="input-field">
          <input id="search" type="search" required></input>
          <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>

            <div class="row">
                {alldata.launchList &&
                    alldata.launchList.length > 0 &&
                    alldata.launchList.map((lunch) => {
                        return (
                            <div class="col s6 m3">
                                <div class="card">
                                    <div class="card-image waves-effect waves-block waves-light" >
                                        <img
                                            class="activator"
                                            src={
                                                lunch.links.mission_patch_small
                                            }
                                        ></img>
                                    </div>
                                    <div class="card-content">
                                        <span class="card-title activator grey-text text-darken-4" style={{textOverflow: 'ellipsis',whiteSpace: 'nowrap',overflow: 'hidden'}}>
                                            {lunch.mission_name}
                                            <i class="material-icons right">
                                                more_vert
                                            </i>
                                        </span>
                                        <p>
                                            <a href={lunch.links.wikipedia}>Wikipedia Link</a>
                                        </p>
                                    </div>
                                    <div class="card-reveal">
                                        <span class="card-title grey-text text-darken-4">
                                            {lunch.flight_number}
                                            <i class="material-icons right">
                                                close
                                            </i>
                                        </span>
                                        <p >{lunch.details}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
            <Home></Home>
        </>
    );
}

export default App;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import States from "../../utils/states.json";
import { Description } from "../../utils/desc";

export const Home = () => {
    const location = useLocation();
    const [localState, setLocationState] = useState({ states: States["Andhra_Pradesh"], description: Description.Andhra_Pradesh, head: "Andhra Pradesh" })

    useEffect(() => {
        if (location.state) {
            setLocationState(location.state);
        }
    }, [location]);

    return (
        <div>
            <br />
            <h1>{localState.head}</h1>
            <br />
            <center>
                <img className="HomeState" alt="pic1" src={localState.states[0]} />
                <p className="Desc">{localState.description[0]}</p>

                <img className="HomeState" alt="pic2" src={localState.states[1]} />
                <p className="Desc">{localState.description[1]}</p>

                <img className="HomeState" alt="pic3" src={localState.states[2]} />
                <p className="Desc">{localState.description[2]}</p>
            </center>
        </div>
    );
};
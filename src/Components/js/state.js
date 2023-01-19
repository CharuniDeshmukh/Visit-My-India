import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "../css/state.css";
import States from "../../utils/states.json";
import { Description } from "../../utils/desc";

let Desc = {
    padding: "2rem 0rem",
    textAlign: "justify"
}

export const State = () => {

    const location = useLocation();
    const [localState, setLocationState] = useState({ states: States["Andhra_Pradesh"], description: Description.Andhra_Pradesh, head: "Andhra Pradesh" })

    useEffect(() => {
        if (location.state) {
            setLocationState(location.state);
        }
    }, [location]);

    return (
        <div className="Contain">
            <div className="states">
                <h2>
                <Link className="h2" to="/" state={{ states: States["Andhra_Pradesh"], description: Description.Andhra_Pradesh, head: "Andhra Pradesh" }}>
                        &diams; Andhra Pradesh
                </Link>
                </h2>

                <h2>
                <Link className="h2" to="/" state={{ states: States["Arunachal_Pradesh"], description: Description.Arunachal_Pradesh, head: "Arunachal Pradesh" }}>
                        &diams; Arunachal Pradesh
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Assam"], description: Description.Assam, head: "Assam" }}>
                        &diams; Assam
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Bihar"], description: Description.Bihar, head: "Bihar" }}>
                        &diams; Bihar
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Chhattisgarh"], description: Description.Chhattisgarh, head: "Chhattisgarh" }}>
                        &diams; Chhattisgarh
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Goa"], description: Description.Goa, head: "Goa" }}>
                        &diams; Goa
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Gujarat"], description: Description.Gujarat, head: "Gujarat" }}>
                        &diams; Gujarat
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Haryana"], description: Description.Haryana, head: "Haryana" }}>
                        &diams; Haryana
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Himachal_Pradesh"], description: Description.Himachal_Pradesh, head: "Himachal Pradesh" }}>
                        &diams; Himachal Pradesh
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Jharkhand"], description: Description.Jharkhand, head: "Jharkhand" }}>
                        &diams; Jharkhand
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Karnataka"], description: Description.Karnataka, head: "Karnataka" }}>
                        &diams; Karnataka
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Kerala"], description: Description.Kerala, head: "Kerala" }}>
                        &diams; Kerala
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Madhya_Pradesh"], description: Description.Madhya_Pradesh, head: "Madhya Pradesh" }}>
                        &diams; Madhya Pradesh
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Maharashtra"], description: Description.Maharashtra, head: "Maharashtra" }}>
                        &diams; Maharashtra
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Manipur"], description: Description.Manipur, head: "Manipur" }}>
                        &diams; Manipur
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Meghalaya"], description: Description.Meghalaya, head: "Meghalaya" }}>
                        &diams; Meghalaya
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Mizoram"], description: Description.Mizoram, head: "Mizoram" }}>
                        &diams; Mizoram
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Nagaland"], description: Description.Nagaland, head: "Nagaland" }}>
                        &diams; Nagaland
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Odisha"], description: Description.Odisha, head: "Odisha" }}>
                        &diams; Odisha
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Punjab"], description: Description.Punjab, head: "Punjab" }}>
                        &diams; Punjab
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Rajasthan"], description: Description.Rajasthan, head: "Rajasthan" }}>
                        &diams; Rajasthan
                </Link>
                </h2>                

                <h2>
                <Link className="h2" to="/" state={{ states: States["Sikkim"], description: Description.Sikkim, head: "Sikkim" }}>
                        &diams; Sikkim
                </Link>
                </h2>       

                <h2>
                <Link className="h2" to="/" state={{ states: States["Tamil_Nadu"], description: Description.Tamil_Nadu, head: "Tamil Nadu" }}>
                        &diams; Tamil Nadu
                </Link>
                </h2>       

                <h2>
                <Link className="h2" to="/" state={{ states: States["Telangana"], description: Description.Telangana, head: "Telangana" }}>
                        &diams; Telangana
                </Link>
                </h2>       

                <h2>
                <Link className="h2" to="/" state={{ states: States["Tripura"], description: Description.Tripura, head: "Tripura" }}>
                        &diams; Tripura
                </Link>
                </h2>       

                <h2>
                <Link className="h2" to="/" state={{ states: States["Uttar_Pradesh"], description: Description.Uttar_Pradesh, head: "Uttar Pradesh" }}>
                        &diams; Uttar Pradesh
                </Link>
                </h2>       

                <h2>
                <Link className="h2" to="/" state={{ states: States["Uttarakhand"], description: Description.Uttarakhand, head: "Uttarakhand" }}>
                        &diams; Uttarakhand
                </Link>
                </h2>       

                <h2>
                <Link className="h2" to="/" state={{ states: States["West_Bengal"], description: Description.West_Bengal, head: "West Bengal" }}>
                        &diams; West Bengal
                </Link>
                </h2>
            </div>

            <div className="desc">
                <h1>{localState.head}</h1>

                <img alt="pic1" className="state-wise" src={localState.states[0]} />
                <p style={Desc}>{localState.description[0]}</p>

                <img alt="pic2" className="state-wise" src={localState.states[1]} />
                <p style={Desc}>{localState.description[1]}</p>

                <img alt="pic3" className="state-wise" src={localState.states[2]} />
                <p style={Desc}>{localState.description[2]}</p>
            </div>
        </div>
    );
};
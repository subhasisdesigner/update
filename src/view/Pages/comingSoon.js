import React, { useEffect, useState, useContext } from "react";
import { LoadingContext } from "react-router-loading";
import loadData from "../../Config/LoadingBar";

import ComingSoonPic from "../../asset/Images/coming_soon.png";

export default function ComingSoon() {
    const [state, setState] = useState();
    const loadingContext = useContext(LoadingContext);

    const loading = async () => {
        //loading some data
        const data = await loadData();
        setState(data);

        //call method to indicate that loading is done
        loadingContext.done();
    };

    useEffect(() => {
        loading();
    }, []);
    return (
        <div className="d_flex align_items coming" style={{ justifyContent: "center" }}>
            <div className="coming_soon">
                <img src={ComingSoonPic} />
            </div>
        </div>
    );
}


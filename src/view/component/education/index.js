import React from "react";
import './education.scss';
import ViewMoreButton from "../materialUI/Button/viewMoreButton";
export default function Education() {
    return (
        <div className="education">
            <div className="education_nfo">
                <div className="nfo_item">
                    <h5>Bachelor Arts (B. A General)</h5>
                    <p>The University Of Burdwan (B.U)</p>
                </div>
                <h5>Passing year | 2012</h5>
            </div>
            <div className="education_nfo">
                <div className="nfo_item">
                    <h5>Higher Secondary Education (H.S Madhyamik)</h5>
                    <p>The University Of Burdwan (B.U)</p>
                </div>
                <h5>Passing year | 2009</h5>
            </div>
            <div className="education_nfo">
                <div className="nfo_item">
                    <h5>Secondary Education (Madhyamik)</h5>
                    <p>West Bengal Board of Secondary Education (W.B.B.S.E)
                        West Bengal, Hooghly</p>
                </div>
                <h5>Passing year | 2007</h5>
            </div>
            <ViewMoreButton />
        </div>
    );
}



import React from "react";


export default function ContactNumber() {
    return (
        <div className="contact_info_body contact_number d_flex align_items gap_20">
            <div className="contact_icon">
                <i class="ri-phone-fill"></i>
            </div>
            <div className="contact_info flex_grow1">
                <h4>Contact number:</h4>
                <p>+91-8001473178</p>
            </div>
        </div>
    );
}

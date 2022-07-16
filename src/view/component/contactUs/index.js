import React from "react";
import Address from "./address";
import ContactNumber from "./contactNumber";
import WhatsApp from "./whatsApp";
import Email from "./email";
import Skype from "./skype";
import Linkedin from "./linkedin";
import ViewMoreButton from "../materialUI/Button/viewMoreButton"

import './contactUs.scss';

export default function ContactUs() {
    return (
        <div className="contact_body">
            <Address />
            <div className="d_flex align_items gap_40">
                <ContactNumber />
                <WhatsApp />
            </div>
            <Email />
            <div className="d_flex align_items gap_40">
                <Skype />
                <Linkedin />
            </div>
            <ViewMoreButton />
        </div>
    );
}



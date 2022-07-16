import React from "react";
import AdobeXd from "./adobeXD";
import UIUXdesigner from "./UI&UXdesigner";
import Html from "./html";
import Css from "./css";
import MoreSkills from "./moreSkills";

import './skillsKnowledge.scss';


export default function SkillsKnowledge() {
    return (
        <div className="skills_knowledge_body">
            <AdobeXd />
            <UIUXdesigner />
            <Html />
            <Css />
            <MoreSkills />
        </div>
    );
}



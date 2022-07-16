import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import AdobeXdPic from '../../../asset/Images/skills/css.png';


export default function Css() {
    return (
        <div className="skills_knowledge_item d_flex align_items gap_20">
            <img src={AdobeXdPic} />
            <div className="skills_knowledge_info flex_grow1">
                <h3>CSS 3</h3>
                <ProgressBar />
            </div>
        </div>
    );
}


function LinearProgressWithLabel(props) {
    return (
        <div className="progress_body d_flex align_items flex_grow1">
            <div className="progress_bar_body flex_grow1 w_100">
                <LinearProgress className="progress_bar" variant="determinate" {...props} />
                <span className="count">
                    {`${Math.round(props.value,)}%`}
                </span>
            </div>
        </div>
    );
}


function ProgressBar() {
    const [progress, setProgress] = React.useState(10);
    const setValue = 85;
    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                return Math.min(oldProgress + 10, setValue);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <LinearProgressWithLabel value={progress} />
    );
}




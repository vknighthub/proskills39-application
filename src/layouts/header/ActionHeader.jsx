import useClickOutside from "@/lib/hooks/useClickOutside";
import { useEffect, useRef, useState } from "react";


const ActionHeader = ({setIsDark}) => {
    
    const [toggle, setToggle] = useState(false);
    const dayMood = useRef(true);
    let domNode = useClickOutside(() => {
        setToggle(false);
    });
    useEffect(() => {
        let mood = localStorage.getItem("mood");
        
        moodChange(mood);
        dayMood.current = mood ? true : false;
    }, []);
    
    const moodChange = (dark) => {
        if (dark === 'dark-mood') {
            localStorage.setItem("mood", "dark-mood");
            document.querySelector("body").classList.add("dark-mode");
            setIsDark(true)
        } else {
            document.querySelector("body").classList.remove("dark-mode");
            localStorage.setItem("mood", "light-mood");
            setIsDark(false)
        }
    };

    const onClick = () => {
        dayMood.current = !dayMood.current;
        moodChange(dayMood.current);
    };
    return (
        <div
            className={`header-user-profile cryptoki-notif-bttn ${toggle ? "active" : ""}`}
            ref={domNode}
        >
            <div className="profile-dropdown-footer">
                {/*dark-mode-toggle*/}
                <div className="mode-toggle">
                    <label className="toggle-control">
                        <input
                            type="checkbox"
                            ref={dayMood}
                            defaultChecked={dayMood.current}
                            onClick={(e) => onClick(e)}
                        />
                        <span className="control" />
                    </label>
                </div>
                {/*/dark-mode-toggle*/}
            </div>
        </div>
    );
};
export default ActionHeader;

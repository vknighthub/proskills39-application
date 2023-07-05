import useClickOutside from "@/lib/hooks/useClickOutside";
import { useEffect, useState } from "react";


const ActionHeader = () => {

    const [toggle, setToggle] = useState(false);
    let domNode = useClickOutside(() => {
        setToggle(false);
    });


    let mood = localStorage.getItem("mood");
    const isDark = mood === "dark-mood" ? true : false;

    const moodChange = (mode) => {
        if (mode) {
            localStorage.setItem("mood", "dark-mood");
            document.querySelector("body").classList.add("dark-mode");
        } else {
            document.querySelector("body").classList.remove("dark-mode");
            localStorage.setItem("mood", "light-mood");
        }
    };

    const onClick = (e) => {
        moodChange(e.target.checked);
    };


    useEffect(() => {
        moodChange(isDark)
    }, [isDark])


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
                            defaultChecked={isDark}
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

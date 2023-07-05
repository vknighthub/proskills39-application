import React, { useEffect, useRef } from 'react'


const Footer = () => {
    
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
        <div className="profile-dropdown-footer">

            <div className="mode-toggle">
                <div className="mode-title">
                    <span>
                        <svg className="crumina-icon">
                            <use xlinkHref="#moon-icon" />
                        </svg>
                    </span>
                    Night-mode
                </div>
                <label className="toggle-control">
                    <input
                        type="checkbox"
                        defaultChecked={isDark}
                        onClick={(e) => onClick(e)}
                    />
                    <span className="control" />
                </label>
            </div>

        </div>
    )
}

export default Footer
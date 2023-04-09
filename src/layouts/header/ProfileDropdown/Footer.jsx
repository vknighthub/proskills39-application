import React, { useEffect, useRef } from 'react'


const Footer = () => {
    const dayMood = useRef(true)

    useEffect(() => {
        let mood = localStorage.getItem("mood");
        moodChange(mood);
        dayMood.current = mood ? true : false;
    }, []);

    const moodChange = (dark) => {
        if (dark) {
            document.querySelector("body").classList.add("dark-mode");
            localStorage.setItem("mood", "dark-mood");
        } else {
            document.querySelector("body").classList.remove("dark-mode");
            localStorage.removeItem("mood");
        }
    };

    const onClick = () => {
        dayMood.current = !dayMood.current;
        moodChange(dayMood.current);
    };
    
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
                        ref={dayMood}
                        defaultChecked={dayMood.current}
                        onClick={(e) => onClick(e)}
                    />
                    <span className="control" />
                </label>
            </div>

        </div>
    )
}

export default Footer
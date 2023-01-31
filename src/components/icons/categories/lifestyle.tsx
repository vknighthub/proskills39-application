export const LifeStyleIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
    return (
        <svg
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <defs>
                <style>
                    {
                        ".cls-4{fill:none;stroke:#4d535b;stroke-miterlimit:10}.cls-4{stroke-width:2.1px}"
                    }
                </style>
            </defs>
            
            <g style= {{isolation: "isolate"}}>
                <g id="stroke">
                    <path d="M12 20.2h34.7V53a4 4 0 01-4 4H16a4 4 0 01-4-4V20.2z" fill="#fff"/>
                    <path d="M12 20.2v4.2h30.5v31.5c0 .4-.1.7-.1 1 1.8-.4 4.3-2.1 4.3-4.1V20.2z" fill="#dee0e2"/>
                    <path className="cls-4" d="M13 20.2h32.7a1 1 0 011 1V52a5 5 0 01-5 5H17a5 5 0 01-5-5V21.2a1 1 0 011-1zm8.5 0v8.4"/>
                    <rect x="16.7" y="29.1" width="9.5" height="11.56" rx="1" strokeWidth="2.23" fill="none" stroke="#4d535b" strokeMiterlimit="10"/>
                    <rect x="16.7" y="29.1" width="9.5" height="11.56" rx="1" mix-blend-mode="darken" fill="#a1f4c0"/>
                    <path className="cls-4" d="M46.7 28.6a9.5 9.5 0 010 18.9m-16.8-42V16"/>
                    <path d="M36.2 7.6V16M23.6 7.6V16" strokeWidth="1.88" fill="none" stroke="#4d535b" strokeMiterlimit="10"/>
                </g>
            </g>
        
        </svg>
    );
};

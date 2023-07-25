import React from 'react';

interface RatingStarsProps {
    value: number; // Số sao được đánh giá (giá trị từ 0 đến 5)
}

const RatingStars: React.FC<RatingStarsProps> = ({ value }) => {
    const intValue = Math.floor(value);
    const decimalPart = value - intValue;
    let starCount = intValue;

    let halfStar = false;
    if (decimalPart >= 0.25 && decimalPart < 0.75) {
        halfStar = true;
    } else if (decimalPart >= 0.75) {
        starCount += 1;
    }

    const fullStarSVG = (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="url(#star-gradient-full)"
            width="24px"
            height="24px">
            <defs>
                <linearGradient id="star-gradient-full" gradientTransform="rotate(45)">
                    <stop offset="0%" stopColor="#2C82CB" />
                    <stop offset="100%" stopColor="#04C1D7" />
                </linearGradient>
            </defs>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2l3.09 6.37L22 9.27l-5 4.88 1.18 6.88L12 17.77 5.82 21.03l1.18-6.88-5-4.88 6.91-0.9z" />
        </svg>
    );

    const halfStarSVG = (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="url(#star-gradient-half)"
            width="24px"
            height="24px">
            <defs>
                <linearGradient id="star-gradient-half" gradientTransform="rotate(45)">
                    <stop offset="0%" stopColor="#2C82CB" />
                    <stop offset="50%" stopColor="#04C1D7" />
                    <stop offset="50%" stopColor="#2C82CB" />
                    <stop offset="100%" stopColor="#2C82CB" />
                </linearGradient>
            </defs>
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12 2L9.42 9.75H2l6.18 4.77L5.91 21 12 17.2l5.09 3.8-1.27-6.48L22 9.75h-7.42L12 2zm0 3.74l2.09 4.26 4.91.64-3.55 3.46.98 5.73L12 16.8l-4.43 2.77.98-5.73-3.55-3.46 4.91-.64L12 5.74z" />
        </svg>
    );

    const emptyStarSVG = (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="url(#star-gradient-empty)"
            strokeWidth="2"
            width="24px"
            height="24px">
            <defs>
                <linearGradient id="star-gradient-empty" gradientTransform="rotate(45)">
                    <stop offset="0%" stopColor="#2C82CB" />
                    <stop offset="100%" stopColor="#04C1D7" />
                </linearGradient>
            </defs>
            <path d="M12 2l3.09 6.37L22 9.27l-5 4.88 1.18 6.88L12 17.77 5.82 21.03l1.18-6.88-5-4.88 6.91-0.9zM12 2L9.42 9.75H2l6.18 4.77L5.91 21 12 17.2l5.09 3.8-1.27-6.48L22 9.75h-7.42L12 2z" />
        </svg>
    );

    const stars: React.ReactNode[] = [];
    for (let i = 0; i < starCount; i++) {
        stars.push(<React.Fragment key={`full-star-${i}`}>{fullStarSVG}</React.Fragment>);
    }

    if (halfStar) {
        stars.push(<React.Fragment key="half-star">{halfStarSVG}</React.Fragment>);
    }

    for (let i = 0; i < 5 - starCount - (halfStar ? 1 : 0); i++) {
        stars.push(<React.Fragment key={`empty-star-${i}`}>{emptyStarSVG}</React.Fragment>);
    }

    return <div>{stars}</div>;
};

export default RatingStars;

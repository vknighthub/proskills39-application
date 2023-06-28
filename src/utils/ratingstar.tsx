import React from 'react';

interface RatingStarsProps {
    value: number;
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
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8.635L8.075 9.89C8.455 10.12 8.92 9.78 8.82 9.35L8.27 6.99L10.105 5.4C10.44 5.11 10.26 4.56 9.82 4.525L7.405 4.32L6.46 2.09C6.29 1.685 5.71 1.685 5.54 2.09L4.595 4.315L2.18 4.52C1.74 4.555 1.56 5.105 1.895 5.395L3.73 6.985L3.18 9.345C3.08 9.775 3.545 10.115 3.925 9.885L6 8.635Z" fill="#FFE25A" />
            <path d="M6 8.635L8.075 9.89C8.455 10.12 8.92 9.78 8.82 9.35L8.27 6.99L10.105 5.4C10.44 5.11 10.26 4.56 9.82 4.525L7.405 4.32L6.46 2.09C6.29 1.685 5.71 1.685 5.54 2.09L4.595 4.315L2.18 4.52C1.74 4.555 1.56 5.105 1.895 5.395L3.73 6.985L3.18 9.345C3.08 9.775 3.545 10.115 3.925 9.885L6 8.635Z" fill="url(#paint0_linear_269_1786)" />
            <defs>
                <linearGradient id="paint0_linear_269_1786" x1="0.665887" y1="13.1803" x2="9.29314" y2="12.6" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0061D3" />
                    <stop offset="1" stop-color="#04CDF9" />
                </linearGradient>
            </defs>
        </svg>
    );

    const halfStarSVG = (
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.708 7.53333L12.6747 7.18333L11.0997 3.475C10.8163 2.8 9.84967 2.8 9.56634 3.475L7.99134 7.19167L3.96634 7.53333C3.23301 7.59167 2.93301 8.50833 3.49134 8.99167L6.54967 11.6417L5.63301 15.575C5.46634 16.2917 6.24134 16.8583 6.87467 16.475L10.333 14.3917L13.7913 16.4833C14.4247 16.8667 15.1997 16.3 15.033 15.5833L14.1163 11.6417L17.1747 8.99167C17.733 8.50833 17.4413 7.59167 16.708 7.53333ZM10.333 12.8333V5.08333L11.758 8.45L15.408 8.76667L12.6413 11.1667L13.4747 14.7333L10.333 12.8333Z" fill="#323232" />
            <path d="M16.708 7.53333L12.6747 7.18333L11.0997 3.475C10.8163 2.8 9.84967 2.8 9.56634 3.475L7.99134 7.19167L3.96634 7.53333C3.23301 7.59167 2.93301 8.50833 3.49134 8.99167L6.54967 11.6417L5.63301 15.575C5.46634 16.2917 6.24134 16.8583 6.87467 16.475L10.333 14.3917L13.7913 16.4833C14.4247 16.8667 15.1997 16.3 15.033 15.5833L14.1163 11.6417L17.1747 8.99167C17.733 8.50833 17.4413 7.59167 16.708 7.53333ZM10.333 12.8333V5.08333L11.758 8.45L15.408 8.76667L12.6413 11.1667L13.4747 14.7333L10.333 12.8333Z" fill="url(#paint0_linear_269_2157)" />
            <defs>
                <linearGradient id="paint0_linear_269_2157" x1="1.44282" y1="21.9672" x2="15.8216" y2="20.9999" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0061D3" />
                    <stop offset="1" stop-color="#04CDF9" />
                </linearGradient>
            </defs>
        </svg>

    );

    const stars: React.ReactNode[] = [];
    for (let i = 0; i < starCount; i++) {
        stars.push(<React.Fragment key={i}>{fullStarSVG}</React.Fragment>);
    }

    if (halfStar) {
        stars.push(<React.Fragment key="half-star">{halfStarSVG}</React.Fragment>);
    }
    

    return <div>{stars}</div>;
};

export default RatingStars;

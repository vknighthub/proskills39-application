import isMobile from 'ismobilejs';

export function isMobileDevice() {
    const result = isMobile();
    return result.any
}
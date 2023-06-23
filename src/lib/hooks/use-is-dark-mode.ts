export function useIsDarkMode() {
  const theme = localStorage.getItem('mood')
  return {
    isDarkMode: theme === 'dark-mood',
  };
}

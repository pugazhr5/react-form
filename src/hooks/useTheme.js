import { useState, useEffect } from 'react'

/** Returns prefered theme and a function to toggle the theme */
const useTheme = () => {
  // Load user preference
  const getPreferredTheme = () => {
    const preferredTheme = localStorage.getItem('theme')
    if (preferredTheme) return preferredTheme

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'

    return 'light'
  }

  const [theme, setTheme] = useState(getPreferredTheme())

  // Toggle theme
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  // Update app theme & save the preference to local storage
  useEffect(() => {
    document.body.setAttribute('theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return [theme, toggleTheme]
}

export default useTheme

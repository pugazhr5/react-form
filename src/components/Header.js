import useTheme from '../hooks/useTheme'
import { RiSunFill } from 'react-icons/ri'
import { BsFillMoonStarsFill } from 'react-icons/bs'

const Header = () => {
  const [theme, toggleTheme] = useTheme()

  // Open highlights pop-up
  const openHighlightsPopUp = (e) => {
    e.preventDefault()
  }

  return (
    <div className="header">
      <nav>
        <div className="logo">Jobs Online</div>

        <div className="menu">
          <ul>
            <li>
              <a className="highlights" href="/" onClick={openHighlightsPopUp}>
                Highlights
              </a>
            </li>
            <li>
              <input
                id="theme-switcher"
                className="theme-switcher"
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <label
                className={`icon-container ${theme}`}
                htmlFor="theme-switcher"
              >
                {theme === 'dark' ? (
                  <RiSunFill className="sun icon" />
                ) : (
                  <BsFillMoonStarsFill className="moon icon" />
                )}
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header

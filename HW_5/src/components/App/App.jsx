import "./App.css"
import SpotifyLogo from "../SpotifyLogo/SpotifyLogo"
import LoginButtons from "../LoginOptions/LoginButtons"

function App() {
  return (
    <div className="app">
      <div className="header">
        <SpotifyLogo />
      </div>

      <div className="content">
        <h1 className="title">LIFE IS WASTED ON THE LIVING</h1>

        <div className="login-area">
          <p className="sign-in-text">Sign in</p>
          <p className="with-text">with</p>
          <LoginButtons />
        </div>
      </div>
    </div>
  )
}

export default App



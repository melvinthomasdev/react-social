import "./register.css"

export default function register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">Lamasocial</h3>
                <span className="registerDesc">
                    Connect with friends and the world around you on lamasocial.
                </span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input className="registerInput" placeholder="Email" type="email"/>
                    <input className="registerInput" placeholder="Username" />
                    <input className="registerInput" placeholder="Password" type="password" />
                    <input className="registerInput" placeholder="Password Again" type="password" />
                    <button className="registerButton">Sign Up</button>
                    <button className="registerLoginButton">
                        Login to Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

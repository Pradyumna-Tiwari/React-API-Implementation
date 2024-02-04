const Login = ({setActiveTab}) => {
 const handleSignup=()=>{
    setActiveTab("Signup");
  }
  return (
    <>      
      <div
        className="login-form"
        style={{
          width: "20%",
          border: "2px solid blue",
          padding: "20px",
          margin: "10px",
        }}
      >
        <form>
          {/* // <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> */}
          <h1 className="h3 mb-3 fw-normal">Sign in</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
        <a onClick={()=>(handleSignup())}className="nav-item">
        Signup
      </a>
      </div>
    </>
  );
};
export default Login;

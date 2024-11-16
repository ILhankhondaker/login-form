function App() {
  return (
    <>
      <div className="min-h-screen bg-white  hero ">
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-slate-300">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered bg-white "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black text-lg">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered bg-white"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">{/* <LoadCanvasTemplate /> */}</label>
              <input
                type="text"
                name="captcha"
                placeholder="Type The Captcha Above"
                className="input input-bordered bg-white"
              />
            </div>
            <div className="form-control mt-6">
              {/* TODO: apply disabled for re captcha */}
              <input
                className="btn bg-white border-none"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Footer  */}
      <footer className="footer footer-center bg-base-300 text-base-content  p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved{" "}
            <span className="font-bold">
              {" "}
              <a
                href="https://ilhan-khondaker.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ilhan Khondaker
              </a>
            </span>
          </p>
        </aside>
      </footer>
    </>
  );
}

export default App;

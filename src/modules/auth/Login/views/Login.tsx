const Login = () => {
  const inputClass = "w-full h-full rounded-md pl-5 outline-none bg-white focus:bg-opacity-0 transition ease-in-out delay-100 duration-300 focus:shadow-md cursor-text"
  return (
    <section className="w-screen h-screen bg-japanese bg-cover bg-no-repeat bg-center flex justify-center items-center">
      <div className="w-1/3 h-2/3 rounded-lg bg-white bg-opacity-30 backdrop-blur-xl font-poppins p-10 flex flex-col justify-start gap-10 items-center">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col justify-start items-center grow gap-5">
          <div className="w-full h-10">
            <input type="text" placeholder="Username" className={inputClass} />
          </div>
          <div className="w-full h-10">
            <input type="text" placeholder="Password" className={inputClass} />
          </div>
          <button className="transition ease-in-out delay-150 w-full h-10 bg-teal-400 hover:bg-teal-800 hover:text-white hover:-translate-y-1 hover:scale-110 rounded-md text-center duration-300 mb-5">Log in</button>
          <p className=" w-full flex justify-center gap-5"><span>Don't have an account?</span><a href="#" className="transition ease-in-out delay-150 duration-300 text-white hover:text-gray-500">Sign up</a></p>
        </div>
      </div>
    </section>
  )
}

export default Login
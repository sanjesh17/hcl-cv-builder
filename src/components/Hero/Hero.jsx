import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-xl mx-auto">
            <h1 className="text-5xl font-semibold text-gray-800 dark:text-white lg:text-5xl">
              Build Your Resume with ATS Friendly Templates
            </h1>
            <p className="mt-6 text-gray-500 dark:text-gray-300">
              Ready to impress? Build a standout CV effortlessly with our
              easy-to-use tool. Just fill in your info, and we'll help you
              shine!
            </p>
            <Link to="/templates">
              <button className="px-5 py-2 mt-6 text-l font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg transition duration-200 hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
                Get Started
              </button>
            </Link>
          </div>

          <div className="flex justify-center mt-10">
            <img
              className="object-cover w-full h-96 rounded-xl lg:w-4/5"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="App preview"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

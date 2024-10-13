import React from "react";
import { Link, Navigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';


const LandingPage = () => {
    return(
        <>
        <section
        id="hero"
        className="w-full min-h-[calc(100vh-72px)] py-14 hero-bg"
        >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Call to Action */}
            <div className="flex flex-col items-center lg:items-start font-bold text-center lg:text-left gap-8 order-last lg:order-first">
            <h1 className="text-xl md:text-2xl lg:text-3xl uppercase">
                Are You Ready to Be the <br />
                <span className="text-primary text-5xl md:text-6xl lg:text-7xl">Quiz Master?</span>
            </h1>
            <p className="max-w-md md:text-xl text-gray-500 dark:text-gray-400">
                Challenge Your Knowledge with Fun and Engaging Quizzes!
            </p>
            <div className="w-72 flex flex-col text-center gap-4">
                {/* Sign Up Button */}
                    <Link
                    to="/Signup"
                    className="py-3 px-3 text-white bg-primary hover:bg-primary-shade rounded-xl shadow-xl"
                    >
                    Start learning
                    </Link>
                    {/* Login Button */}
                    <Link
                    to="/Login"
                    className="py-3 px-3 text-primary dark:text-gray-300 border-2 border-primary dark:border-gray-300 bg-white dark:bg-slate-900 dark:hover:bg-gray-100/10 hover:bg-gray-300 rounded-xl shadow-xl"
                    >
                    Already have an account?
                    </Link>
                </div>
            </div>
            {/* Country Logo */}
                <div className="flex justify-center lg:justify-end w-full lg:w-auto mt-8 lg:mt-0 " >
                    <div className="w-full max-w-[360px] lg:max-w-[776px] h-[490px] md:h-[490px] lg:h-[553px] order-last lg:order-first" >
                        <Spline
                            scene="https://prod.spline.design/Y8CKCJQDzPzoL8Iy/scene.splinecode" 
                            width="100%"
                            height="100%"
                        />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default LandingPage;
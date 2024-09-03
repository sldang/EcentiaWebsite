import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import tailwind from "../assets/tailwind.png"
import node from "../assets/node.png"
import react from "../assets/react.png"

const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                <p className="py-6">These are the technolgies we have worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg style: shadow-orange-500">
                    <img src={html} alt="" className="w-20 mx-auto"/>
                    <p className="mt-4">HTML</p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg style: shadow-blue-500">
                    <img src={css} alt="" className="w-20 mx-auto"/>
                    <p className="mt-4">CSS</p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg style: shadow-yellow-400">
                    <img src={javascript} alt="" className="w-20 mx-auto"/>
                    <p className="mt-4">Javascript</p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg style: shadow-green-400">
                    <img src={node} alt="" className="w-20 mx-auto"/>
                    <p className="mt-4">Node</p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg style: shadow-cyan-400">
                    <img src={react} alt="" className="w-20 mx-auto"/>
                    <p className="mt-4">React</p>
                </div>

                <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg style: shadow-blue-700">
                    <img src={tailwind} alt="" className="w-20 mx-auto"/>
                    <p className="mt-4">Tailwind</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
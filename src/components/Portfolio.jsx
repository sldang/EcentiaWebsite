import React from 'react'
import socials from "../assets/portfolio/socials.png"

const Portfolio = () => {

  return (
    <div name="Portfolio/Logs" className="bg-gradient-to-b from-black 
    to-gray-800 w-full text-white md:h-screen" >

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col 
        justify-center w-ful h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check our some of our work</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
            px-12 sm:px-0">
                <div className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={socials} alt="Social Media Application"
                    className="rounded-md duration-200 hover:scale-105" />
                    <div className="flex items-center justify-center">
                        <a href = "https://github.com/sldang/Pixure_App.git">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                        </a>
                        <a href = "https://docs.google.com/document/d/1dsC7kU80m0yEBctPIiZcPr2Gmxn5UqoG2hDR5lyIjzk/edit?usp=sharing">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">SRS</button>
                        </a>
                        <a href = "https://drive.google.com/drive/folders/1eCxLIU-YZtJBht6RChc3_D9OApI1efFb?usp=sharing">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Logs</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Portfolio

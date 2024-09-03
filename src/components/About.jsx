import React from 'react'

const About = () => {
  return (
    <div name ="about" className="w-full h-screen bg-gradient-to-b
    from-gray-800 to-black text-white">


        <div className= "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl mt-20">
                We are Ecentia Inc and we create
                 full stack applications for clients in need.
                 We have been in this practice for a long time and 
                 have a lot of experience with the listed technologies.
                 Please consider our services if you would like a full stack 
                 application created. Thank you for your time.
            </p>

            <br />

            <p className="text-xl">
                Everything that you need to know about our company is
                listed on this site, so please explore and enjoy what you 
                find here.
            </p>
        </div>
    </div>
  )
}

export default About
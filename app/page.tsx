import React from 'react';
import Spline from '@splinetool/react-spline/next';
import { CustomDock } from "@/components/CustomDock";
import Particles from "@/components/ui/particles";
import Image from 'next/image';

export default function Home() {
    const splineSceneUrl = process.env.NEXT_PUBLIC_SPLINE_SCENE_URL;

    return (
        <div className="relative w-full min-h-screen overflow-x-hidden">
            {/* Desktop layout */}
            <div className="hidden lg:block relative w-full h-screen overflow-hidden">
                {/* Main content wrapper */}
                <div className="max-w-[90vw] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
                    {/* Title */}
                    <div className="absolute top-[5%] left-0 z-10">
                        <h1 className="text-[14vw] lg:text-[12vw] xl:text-[10vw] text-white leading-none tracking-tight mb-2 font-nasa">
                            DEVFOLIO
                        </h1>
                    </div>

                    {/* Left side text */}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30 max-w-md lg:max-w-lg pointer-events-none">
                        <p className="text-gray-300 text-lg lg:text-xl pl-4 font-mono">
                            Explore my journey through code, creativity, and innovation.
                            Here, you'll find a showcase of my projects, skills, and passion
                            for technology and design.
                        </p>
                    </div>

                    {/* Right side cards */}
                    <div className='absolute right-0 top-1/2 transform -translate-y-1/2 z-40 pointer-events-none'>
                        <div className="flex flex-col text-white text-4xl font-bold gap-6">
                            <div className='bg-black bg-opacity-50 backdrop-filter backdrop-blur-md flex flex-col items-center rounded-3xl p-4 w-64 lg:w-72 border border-gray-500 border-opacity-30'>
                                <div className="w-full mb-4">
                                    <Image
                                        src="/hacker.jpeg"
                                        alt="Hacker"
                                        width={200}
                                        height={100}
                                        className="rounded-2xl object-cover w-full h-auto"
                                    />
                                </div>
                                <div className='text-left'>
                                    <h1 className='font-nasa text-white text-2xl pb-4'>Light Card</h1>
                                    <p className='font-thin text-sm'>Lorem ipsum dolor sit amen hatep awdaw id iyu awdyauwvd
                                        aw da wd awda wda
                                        uawvd</p>
                                </div>
                            </div>

                            <div className='bg-white flex flex-col items-center rounded-3xl p-4 w-64 lg:w-72 shadow-lg'>
                                <div className='text-left w-full'>
                                    <h1 className='font-nasa text-black text-2xl pb-4'>White Card</h1>
                                    <p className='font-thin text-sm text-gray-700'>This is a completely white card without an image. It contains some sample text to demonstrate its appearance and layout.</p>
                                    <Image
                                        src="/pikachu.png"
                                        alt="Hacker"
                                        width={200}
                                        height={100}
                                        className="rounded-2xl object-cover w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Spline scene */}
                <div className='absolute inset-0 z-20'>
                    <Spline scene={splineSceneUrl}/>
                </div>

                {/* Dock */}
                <div className='absolute bottom-0 left-0 right-0 flex justify-center pb-4 z-50'>
                    <CustomDock/>
                </div>

                {/* Particles */}
                <div className="absolute inset-0 z-10">
                    <Particles className="w-full h-full"/>
                </div>
            </div>

            {/* Mobile and tablet layout */}
            <div className="lg:hidden min-h-screen bg-black text-white overflow-hidden relative">
                {/* Particles */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <Particles className="w-full h-full" />
                </div>

                {/* Spline scene as background */}
                <div className='absolute inset-0 z-10 scale-[1.5] translate-y-[20%]'>
                    <Spline scene={splineSceneUrl}/>
                </div>

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-20"></div>

                {/* Content */}
                <div className="relative z-30 max-w-md mx-auto px-4 py-8 min-h-screen flex flex-col justify-between">
                    {/* Top section */}
                    <div className="mb-12">
                        {/* Title */}
                        <h1 className="text-5xl sm:text-6xl font-nasa text-center mb-4">DEVFOLIO</h1>

                        {/* Description */}
                        <p className="text-gray-300 text-base sm:text-lg text-center font-mono">
                            Explore my journey through code, creativity, and innovation.
                            Here, you'll find a showcase of my projects, skills, and passion
                            for technology and design.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="w-full space-y-4 mb-8">
                        <div className='bg-black bg-opacity-50 backdrop-filter backdrop-blur-md rounded-2xl p-3 border border-gray-500 border-opacity-30'>
                            <div className="flex items-center space-x-3">
                                <Image
                                    src="/hacker.jpeg"
                                    alt="Hacker"
                                    width={80}
                                    height={80}
                                    className="rounded-xl object-cover w-20 h-20"
                                />
                                <div>
                                    <h2 className='font-nasa text-white text-xl pb-1'>Light Card</h2>
                                    <p className='font-thin text-xs'>Lorem ipsum dolor sit amen hatep awdaw id iyu awdyauwvd</p>
                                </div>
                            </div>
                        </div>

                        <div className='bg-white rounded-2xl p-3 shadow-lg text-black'>
                            <div className="flex items-center space-x-3">
                                <div>
                                    <h2 className='font-nasa text-xl pb-1'>White Card</h2>
                                    <p className='font-thin text-xs text-gray-700'>This is a white card with sample text to demonstrate its appearance.</p>
                                </div>
                                <Image
                                    src="/pikachu.png"
                                    alt="Pikachu"
                                    width={80}
                                    height={80}
                                    className="rounded-xl object-cover w-20 h-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
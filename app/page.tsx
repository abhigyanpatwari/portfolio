'use client';

import React from 'react';
import Spline from '@splinetool/react-spline';
import { CustomDock } from "@/components/CustomDock";
import Particles from "@/components/ui/particles";
import { SplitText } from "@/components/SplitText";
import Image from 'next/image';
import { useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';

export default function Home() {
    const splineSceneUrl = process.env.NEXT_PUBLIC_SPLINE_SCENE_URL;
    const [loading, setLoading] = useState(true);

    return (
        <>
            <LoadingScreen isLoading={loading} />
            
            <div className="relative w-full">
                {/* Fixed background elements */}
                <div className="fixed inset-0">
                    <div className="absolute inset-0 z-0">
                        <Particles className="w-full h-full"/>
                    </div>

                    <div className='absolute inset-0 z-10'>
                        <Spline 
                            scene={splineSceneUrl || ''} 
                            onLoad={() => setLoading(false)}
                        />
                    </div>

                    {/* Dock - Always fixed */}
                    <div className='absolute bottom-0 left-0 right-0 flex justify-center pb-4 z-50'>
                        <CustomDock/>
                    </div>
                </div>

                {/* Scrollable content */}
                <div className="relative min-h-screen pointer-events-none">
                    {/* Hero section */}
                    <div className="h-screen">
                        <div className="max-w-[90vw] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative h-full">
                            {/* Title */}
                            <div className="absolute top-[5%] left-0 z-5">
                                <h1 className="text-[14vw] lg:text-[12vw] xl:text-[10vw] text-white leading-none tracking-tight mb-2 font-nasa">
                                <SplitText text="DEVFOLIO" className="text-white " />
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
                            <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-30 pointer-events-none'>
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

                            {/* New Section */}
                            <div className="absolute bottom-[20%] left-0 z-30 pointer-events-none">
                                <div className="text-white">
                                    {/* Add your new content here */}
                                   
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional scrollable sections */}
                    <div className="relative w-full min-h-screen">
                        <div className="max-w-[90vw] xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                            <section className="mb-20">
                                <h2 className="text-4xl text-white font-nasa mb-8">Section Title</h2>
                                {/* Section content */}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
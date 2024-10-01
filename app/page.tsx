import Spline from '@splinetool/react-spline/next';
import {Dock} from "@/components/ui/dock";
import {CustomDock} from "@/components/CustomDock";
import Particles from "@/components/ui/particles";

export default function Home() {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            <div className="absolute top-1/5 left-0 p-8 ">
                <h1 className="text-[18vw] sm:text-[16vw] md:text-[14vw] lg:text-[12vw] text-white leading-none tracking-tight mb-2 font-nasa">
                    DEVFOLIO
                </h1>
                <p className="text-white text-xl md:text-2xl lg:text-3xl font-light  ">
                    I develop COOL shit<br/>
                    While making it look GOOD
                </p>
            </div>
            <div className='absolute inset-0 z-20'>
                <Spline scene='https://prod.spline.design/xft5Ct2nlIsrt3Mh/scene.splinecode'/>
            </div>
            <div className='absolute bottom-0 left-0 right-0 flex justify-center pb-4 z-20'>
                <CustomDock/>
            </div>
            <Particles/>
        </div>
    )
}
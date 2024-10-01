import React from 'react';

const BentoBoxLayout = () => {
    return (
        <div className="bg-black text-white p-4 h-screen flex flex-col">
            <header className="flex justify-between items-center mb-4">
                <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            </header>

            <main className="flex-grow grid grid-cols-3 gap-4">
                <div className="col-span-2 row-span-2 bg-gray-800 rounded-3xl p-6 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Elevote Y0</h2>
                    </div>
                    <div className="mt-auto">
                        <p className="text-sm text-gray-400 mb-2">Z90 STEREO SPEAKERS</p>
                        <div className="w-full bg-gray-700 h-1 rounded-full">
                            <div className="w-1/2 bg-white h-1 rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-4">
                    <h3 className="text-lg font-semibold mb-2">CLEAR STEREO SOUND</h3>
                    <div className="flex justify-between items-end h-24">
                        <div className="w-2 h-full bg-white rounded-t-full"></div>
                        <div className="w-2 h-3/4 bg-white rounded-t-full"></div>
                        <div className="w-2 h-1/2 bg-white rounded-t-full"></div>
                        <div className="w-2 h-2/3 bg-white rounded-t-full"></div>
                        <div className="w-2 h-1/3 bg-white rounded-t-full"></div>
                    </div>
                </div>

                <div className="bg-gray-800 rounded-2xl p-4">
                    <h3 className="text-lg font-semibold mb-2">EASY CONTROLS</h3>
                    <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mt-4"></div>
                </div>
            </main>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <BentoBoxLayout />
        </div>
    );
}

export default App;
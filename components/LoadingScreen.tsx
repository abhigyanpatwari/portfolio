'use client';

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  if (!isLoading) return null;

  return (
    <>
      <style>
        {`
          @keyframes loader {
            0% {
              transform: scaleY(1);
            }
            50% {
              transform: scaleY(2);
            }
            100% {
              transform: scaleY(1);
            }
          }
          .loader-bar {
            animation: loader 2s ease-in-out infinite;
          }
          .bar-1 {
            animation-delay: 0s;
          }
          .bar-2 {
            animation-delay: 0.1s;
          }
          .bar-3 {
            animation-delay: 0.2s;
          }
          .bar-4 {
            animation-delay: 0.3s;
          }
        `}
      </style>

      <div className="fixed inset-0 bg-black z-[999] flex items-center justify-center">
        <div className="text-white text-4xl font-nasa flex flex-col items-center gap-8">
          <div className="flex justify-center items-center gap-[6px]">
            <div className="loader-bar bar-1 h-[25px] w-[6px] rounded-[20px] bg-gradient-to-r from-[#00e6e6] via-[#00ccff] to-[#0066ff] shadow-[0_0_15px_3px_#00e6e6]" />
            <div className="loader-bar bar-2 h-[25px] w-[6px] rounded-[20px] bg-gradient-to-r from-[#00ccff] via-[#0099ff] to-[#00e6e6] shadow-[0_0_15px_3px_#00ccff]" />
            <div className="loader-bar bar-3 h-[25px] w-[6px] rounded-[20px] bg-gradient-to-r from-[#0099ff] via-[#0066ff] to-[#00ccff] shadow-[0_0_15px_3px_#0099ff]" />
            <div className="loader-bar bar-4 h-[25px] w-[6px] rounded-[20px] bg-gradient-to-r from-[#0066ff] via-[#00e6e6] to-[#0099ff] shadow-[0_0_15px_3px_#0066ff]" />
          </div>
          <div>Loading...</div>
        </div>
      </div>
    </>
  );
}; 
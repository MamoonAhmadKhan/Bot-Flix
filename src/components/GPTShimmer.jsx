import { useSelector } from "react-redux";

const GPTShimmer = () => {
  const dataForShimmer = useSelector((store) => store.geminiMovies.gptSubmit);

  if (dataForShimmer) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-black text-white font-mono">
      {/* Glowing Loader Circle */}
      <div className="relative">
        <div className="w-24 h-24 border-4 border-transparent border-t-[#59168b] rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-tr from-[#59168b]/10 via-transparent to-[#59168b]/30 blur-md animate-pulse"></div>
      </div>

      {/* Text shimmer effect */}
      <h1 className="mt-10 text-2xl md:text-3xl font-semibold text-center bg-gradient-to-r from-[#59168b] via-white to-[#59168b] bg-clip-text text-transparent animate-[textShimmer_2s_infinite_linear]">
        BotFlix-AI is thinking to recommend...
      </h1>
    </div>
  );
};

export default GPTShimmer;

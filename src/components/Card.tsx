const Card = () => {
  return (
    <div className="border border-gray-700 rounded-md w-full overflow-hidden">
      <div className="h-[200px] bg-sky-500"></div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-lg font-bold">Vercel UI</h3>
          <p className="text-sm text-gray-400 ">
            Beautifully designed components that you can copy and paste into your apps.
          </p>
        </div>

        <div className="flex items-center flex-col gap-2">
          <button className=" flex items-center justify-center w-full font-bold bg-transparent border border-gray-700 rounded-md px-3 h-10 hover:bg-gray-700 transition-colors">
            GitHub
          </button>
          <button className="flex items-center justify-center  w-full font-bold bg-gray-700 border border-gray-700 rounded-md px-3 h-10 hover:bg-transparent transition-colors">
            Deploy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

const Card = ({ name, numberOfComponents, link }) => {
  return (
    <div className="rounded-xl pt-4 hover:cursor-pointer group hover:bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] bg-gray-800 border border-[#ff5478] hover:border-none w-[380px]">
      <div className="w-full">
        <img
          src="/test.svg"
          alt=""
          className="group-hover:scale-105 transition-transform duration-500 ease-in-out scale-100"
        />
      </div>
      <div className="flex flex-col bg-[#373A40] p-4 rounded-b-xl group-hover:border group-hover:border-[#ff5478] border-t-0 text-white mt-2">
        <p className="gradientText font-bold text-xl">Navbars</p>
        <p className="text-gray-400">9 components</p>
      </div>
    </div>
  );
};

export default Card;

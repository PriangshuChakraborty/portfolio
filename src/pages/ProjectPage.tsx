import waveBoard from "../assets/projectImage/waveBoard.png";

const ProjectPage = () => {
  return (
    <div className=" w-10/12 mx-auto mt-[100px]">
      <h1 className=" text-center text-[40px] font-Lato font-bold text-[#FEFEFE] tracking-[2px] pb-[120px]">
        Projects
      </h1>
      <div className=" space-y-[100px]">
        <div className=" flex justify-between items-center">
          <div className=" mr-[60px]">
            <p className=" font-K2D font-black text-[#FD6F00] text-[40px]">
              01
            </p>
            <p className=" font-Lato font-bold text-[30px] text-[#575757] mb-2">
              Wave-Board
            </p>
            <p className=" font-Lato font-medium text-[20px] text-[#959595] text-justify">
              Real-time collaborative whiteboard platform enabling multi-user
              interaction through advanced drawing tools, rich text
              capabilities, integrated chat communication, dynamic user activity
              tracking, interactive reaction mechanisms, instant notifications,
              comprehensive session management, and seamless workspace sharing
              for enhanced team creativity and productivity.
            </p>
          </div>
          <img
            src={waveBoard}
            alt="wave board image"
            className=" object-contain h-[300px] rounded-xl border-4 border-[#575757]"
          />
        </div>
        <hr className=" w-48 h-px bg-[#575757] border-0 rounded mx-auto"/>
        <div className=" flex justify-between items-center">
          <img
            src={waveBoard}
            alt="wave board image"
            className=" object-contain h-[300px] rounded-xl border-4 border-[#575757]"
          />
          <div className=" ml-[60px]">
            <p className=" font-K2D font-black text-[#FD6F00] text-[40px]">
              02
            </p>
            <p className=" font-Lato font-bold text-[30px] text-[#575757] mb-2">
              Wave-Board
            </p>
            <p className=" font-Lato font-medium text-[20px] text-[#959595] text-justify">
              Real-time collaborative whiteboard platform enabling multi-user
              interaction through advanced drawing tools, rich text
              capabilities, integrated chat communication, dynamic user activity
              tracking, interactive reaction mechanisms, instant notifications,
              comprehensive session management, and seamless workspace sharing
              for enhanced team creativity and productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;

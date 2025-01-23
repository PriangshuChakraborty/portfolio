import aboutImg from "../assets/images/about.png";

const AboutPage = () => {
  return (
    <div className=" w-10/12 mx-auto mt-[100px] select-none">
      <h1 className=" text-center text-[40px] font-Lato font-bold text-[#FEFEFE] tracking-[2px] mb-[100px] ">
        About Me
      </h1>
      <div className=" flex justify-between items-center">
        <img
          src={aboutImg}
          alt="about image"
          className=" object-contain h-[400px]"
        />
        <div className=" font-Lato font-medium text-[20px] text-[#959595] text-justify pl-[150px] space-y-[16px]">
            <p>I am a passionate second-year student pursuing a Bachelor of Technology in Information Technology. My journey into the world of web development began in the middle of 2021, and since then, I've been deeply immersed in honing my skills and exploring the vast possibilities within the field.</p>

            <p>As a frontend developer with a keen interest in pushing boundaries and expanding my horizons, I am excited to embark on a journey towards becoming a full-stack developer. This transition represents not only a natural progression in my career but also a thrilling opportunity to delve deeper into the intricacies of web development and gain a more comprehensive understanding of building robust, dynamic applications.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

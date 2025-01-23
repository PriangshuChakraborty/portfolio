import TestimonialCard from "../components/TestimonialCard/TestimonialCard";

const TestimonialPage = () => {
  return (
    <div className=" w-10/12 mx-auto mt-[120px]">
      <h1 className=" text-center text-[40px] font-Lato font-bold text-[#FEFEFE] tracking-[2px] mb-[100px] ">
        Testimonial
      </h1>
      <div className=" grid grid-cols-3 gap-4 ">
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <div className=" flex justify-center items-center mt-[50px]">
      <button className=" text-white font-Lato font-bold rounded-[8px] bg-gradient-to-br from-[#FA6E00] to-[#E60026] px-[40px] py-[12px]">
          Add
        </button>
      </div>
    </div>
  );
};

export default TestimonialPage;

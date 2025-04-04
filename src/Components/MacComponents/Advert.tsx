import img1 from "../../Components/MacComponents/MacImg/help_me_choose__0cunyw534bmm_large.jpg";

const Advert = () => {
  return (
    <section className="flex justify-center">
      <div className="bg-gray-100 h-[600px] w-[900%] rounded-2xl grid grid-cols-2 items-center p-6">


{/* Left Content */}
<div className="pl-40 relative top-10 space-y-2">
  <h1 className="text-3xl font-semibold">Answer a few questions to find</h1>
  <h1 className="text-3xl font-semibold ml-14">the best Mac for you.</h1>

  <div className="space-y-1 mt-10">
    <button className="bg-blue-600 ml-40 p-2 px-4 rounded-full text-white">
      Get Started
    </button>
  </div>
</div>

        {/* Right Content */}
        <div className="">
          <img src={img1} alt="help me choose" className=" rounded-lg" />
        </div>

      </div>
    </section>
  );
};

export default Advert;

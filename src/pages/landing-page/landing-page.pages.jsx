import "./landing-page.styles.css";
import WrapperComponent from "../../components/Wrapper/wrapper.component";
import ReserveComponent from "../../components/Reserve/reserve.component";
import MapComponent from "../../components/Map/map.component";

const LandingPage = () => {
  return (
    <WrapperComponent>
      <div className="relative h-full w-full">
        <div className="landing-page h-full w-full bg-center flex flex-col justify-center items-center">
          <h1 className="z-20 relative text-white text-7xl">
            Skip the Line. Get a Table.
          </h1>
          <p className="z-20 relative text-white text-lg pt-2">
            Whether it’s an intimate dinner, a family celebration, or a
            corporate event, our restaurant sets the stage for unforgettable
            moments.
          </p>
        </div>
        <div className="z-10 w-full h-full absolute top-0 left-0 bg-black opacity-40 rounded-tr-4xl rounded-bl-4xl"></div>

        <div className="relative grid grid-cols-1 xl:grid-cols-3 p-4 py-6 text-center">
          <div>
            <h1 className="how-to-title">01</h1>
            <h1 className="how-to-subtitle">Choose Your Date & Time</h1>
            <h1 className="how-to-text">
              Select the perfect slot for your visit.
            </h1>
          </div>
          <div>
            <h1 className="how-to-title">02</h1>
            <h1 className="how-to-subtitle">Pick Your Experience</h1>
            <h1 className="how-to-text">
              Casual dining, private room, or special event setup.
            </h1>
          </div>
          <div>
            <h1 className="how-to-title">03</h1>
            <h1 className="how-to-subtitle">Confirm & Relax</h1>
            <h1 className="how-to-text">
              Receive instant confirmation and get ready to indulge.
            </h1>
          </div>
        </div>

        <div className="relative py-20 px-20 border border-rose-600 rounded-t-4xl grid grid-cols-1 xl:grid-cols-2">
          <div>
            <h1 className="text-center text-2xl">
              Reserve Your Perfect Table – <br />
              Effortless Booking, Unforgettable Experience
            </h1>

            <h1 className="text-center text-2xl pt-10">Place: <span className="font-bold">Riverbar & Kitchen</span></h1>

            <div className="p-4">
              <ReserveComponent />
            </div>
          </div>
          <div className=" w-full h-auto rounded-2xl overflow-hidden">
            <MapComponent />
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
};

export default LandingPage;

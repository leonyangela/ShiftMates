import Navbar from "../Navbar/navbar.component";

const WrapperComponent = ({ children }) => {
  return (
    <div className="w-full h-screen max-w-480 mx-auto">
      <Navbar />
      <div className="pt-0 p-4 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default WrapperComponent;

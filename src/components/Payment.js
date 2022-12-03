import Contactless from "../assets/contactless.png"

const Payment = () => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-2 rounded-xl cursor-pointer hover:bg-gray-200 bg-gray-100 p-3 hover:scale-105 transition transform duration-200 ease-out">
      <div className="relative h-16 w-16">
        <img src={Contactless} alt="contactless payment using GUNSEL Employee Card"/>
      </div>
      <div>
        <h2 className="text-gray-800 font-semibold">Kartinizi <br/> Okutun</h2>
      </div>
    </div>
  );
};

export default Payment;
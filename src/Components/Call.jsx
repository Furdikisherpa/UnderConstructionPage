import { FaPhoneVolume } from "react-icons/fa6";
import './Call.css';


const Call = () => {
  return (
    <div className="phone-icon">
      <FaPhoneVolume className="phone-icon-icon" /> 
      <span className="phone-number">01-5913913</span>
    </div>
  );
};

export default Call;

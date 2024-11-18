import { FaPhoneVolume } from "react-icons/fa6";
import './Call.css';

const Call = () => {
  return (
    <div className="phone-icon">
      <FaPhoneVolume className="phone-icon-icon" />
      <a href="tel:015913913" className="phone-number">01-5913913</a>
    </div>
  );
};

export default Call;

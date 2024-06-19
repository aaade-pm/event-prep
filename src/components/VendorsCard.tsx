import { MdLocationPin } from "react-icons/md";
import VendorPageButton from "./VendorPageButton";

interface Vendor {
  name: string;
  image: string;
  location: string;
}

const VendorsCard = ({ v }: { v: Vendor }) => {
  return (
    <>
      <div className="v-card" key={v.name}>
        <div className="v-overlay">
          <VendorPageButton text="Book Them Now" />
        </div>

        <div className="v-image">
          <img src={v.image} alt={v.name} />
        </div>
        <div className="v-info">
          <h3>{v.name}</h3>
          <div className="v-location">
            <MdLocationPin />
            <p>{v.location}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorsCard;

import data from "../constants";
import VendorsCard from "../components/VendorsCard";
import VendorPageButton from "../components/VendorPageButton";

const VendorsPage = () => {
  return (
    <>
      <section className="vendors-page">
        <div className="v-header">
          <div className="v-title">
            <h1>My Vendors</h1>
            <p>
              My event team - Crafting beautiful experinces for peoples big day!
            </p>
          </div>
          <VendorPageButton text="+ Add Vendor" />
        </div>

        <div className="v-body">
          {data.VendorLists.map((vendor) => (
            <VendorsCard v={vendor} />
          ))}
        </div>
      </section>
    </>
  );
};

export default VendorsPage;

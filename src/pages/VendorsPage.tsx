import data from "../constants";
import VendorsCard from "../components/VendorsCard";
import VendorPageButton from "../components/VendorPageButton";

const VendorsPage = () => {
  return (
    <>
      <section className="page">
        <div className="v-header">
          <div className="v-title">
            <h1>My Vendors</h1>
            <p>
              My event team - Crafting beautiful experinces for peoples big day!
            </p>
          </div>
          {/* using the VendorPageButton component */}
          <VendorPageButton text="+ Add Vendor" />
        </div>

        <div className="v-body">
          {/* map through the VendorLists array from the constants file */}
          {data.VendorLists.map((vendor) => (
            <VendorsCard v={vendor} />
          ))}
        </div>
      </section>
    </>
  );
};

export default VendorsPage;

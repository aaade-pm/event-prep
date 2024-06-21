import data from "../constants";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const DashboardSectionOne = () => {
  // iterate through the EventTasks array and filter out the first three events that have not been completed yet
  const firstThreeEvents = data.EventTasks.filter(
    (event) => event.status === false
  ).slice(0, 3);

  // receiving the vendors from the store
  const vendors = useSelector((state: RootState) => state.vendors.vendors);

  return (
    <>
      <div className="d-section">
        <div className="upcoming-events">
          <div className="upcoming-events-title">
            <h1>Upcoming Events</h1>
            <p>View all</p>
          </div>
          <div className="upcoming-events-body">
            <div className="event-card">
              {/* map through the first three events and display them in a card */}
              {firstThreeEvents.map((three) => (
                <div className="first-three">
                  <div className="first-three-text">
                    <h3>{three.name}</h3>
                    <h4>Vendors: {three.vendors.length}</h4>
                  </div>

                  <div className="first-three-cost">
                    <h2>${three.cost}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="d-two-section">
          {/* <div className="next-event-time"></div> */}
          <div className="messenger-wrapper">
            <div className="m-title">
              <h1>Vendors</h1>
            </div>
            {/* map through the vendors and display them in a card */}
            {vendors.map((vendor) => (
              <div className="m-vendors" key={vendor.name}>
                <div className="vendor-profile">
                  <img src={vendor.image} alt="vendor profile" />
                </div>
                <h1>{vendor.name}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardSectionOne;

import { IoStatsChart } from "react-icons/io5";
import data from "../constants";

const DashboardHeader = () => {
  const doneEventsNumber = data.EventTasks.filter(
    (event) => event.status === true
  ).length;

  const totalEventsNumber = data.EventTasks.length;

  return (
    <>
      <div className="d-header">
        <div className="d-title">
          <h1>
            Welcome
            <span> Event Maestro</span>
          </h1>
          <p>
            Welcome back, here are some of the latest updates on your events.
          </p>
        </div>
        <div className="project-count">
          <div className="count-icon">
            <IoStatsChart />
          </div>
          <div className="count-text">
            <h2>
              {doneEventsNumber}/{totalEventsNumber}
            </h2>
            <p>Events Completed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;

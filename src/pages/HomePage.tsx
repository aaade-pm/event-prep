import DashboardHeader from "../components/DashboardHeader";
import DashboardSectionOne from "../components/DashboardSectionOne";

const HomePage = () => {
  return (
    <>
      <section className="page">
        <DashboardHeader />
        <div className="d-section-one">
          <DashboardSectionOne />
          <DashboardSectionOne />
        </div>
      </section>
    </>
  );
};

export default HomePage;

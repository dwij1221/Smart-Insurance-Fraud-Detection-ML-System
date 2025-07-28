import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <DashboardCard title="Total Claims" value="1,248" color="pastelBlue" />
        <DashboardCard title="Fraud Detected" value="73" color="pastelPink" />
        <DashboardCard title="Approved Claims" value="1,145" color="pastelGreen" />
      </div>
    </div>
  );
};

export default Home;

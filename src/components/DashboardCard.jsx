const pastelColors = {
  pastelBlue: "bg-pastelBlue",
  pastelPink: "bg-pastelPink",
  pastelGreen: "bg-pastelGreen",
  pastelYellow: "bg-pastelYellow",
};

const DashboardCard = ({ title, value, color }) => {
  const bgColor = pastelColors[color] || "bg-white";

  return (
    <div className={`${bgColor} shadow-lg rounded-2xl p-6 transition hover:scale-105`}>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default DashboardCard;

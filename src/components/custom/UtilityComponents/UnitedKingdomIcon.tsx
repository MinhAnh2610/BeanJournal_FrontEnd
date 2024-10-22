import unitedKingdom from "../../../assets/united-kingdom.svg";

const UnitedKingdomIcon = () => {
  return (
    <div className="flex items-center">
      <img src={unitedKingdom} alt="United Kingdom" width={24} height={24} />
      <h1 className="pl-2 text-sm font-semibold text-gray-400">English</h1>
    </div>
  );
};
export default UnitedKingdomIcon;

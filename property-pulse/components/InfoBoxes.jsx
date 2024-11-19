import InfoCard from "./InfoCard";
const InfoBoxes = () => {
  return (
    <>
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <InfoCard
              forWho={"For Renters"}
              description={
                "Find your dream rental property. Bookmark properties and contact owners."
              }
              buttonInfo={" Browse Properties"}
              bgColor={"bg-gray-100"}
              buttonColor={"bg-black"}
              hoverColor={"bg-gray-700"}
            />
            <InfoCard
              forWho={"For Property Owners"}
              description={
                "List your properties and reach potential tenants. Rent as an airbnb or long term."
              }
              buttonInfo={"Add Property"}
              bgColor={"bg-blue-100"}
              buttonColor={"bg-blue-500"}
              hoverColor={"bg-blue-600"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoBoxes;

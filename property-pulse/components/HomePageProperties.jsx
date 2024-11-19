import PropertyCard from "./PropertyCard";
const HomePageProperties = async () => {
  const fetchProperties = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_DOMAIN}properties`
      );
      return await res.json();
    } catch (error) {
      console.log(`Error While Fetching Data: ${error}`);
    }
  };
  const properties = await fetchProperties();
  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.length === 0
              ? "No Properties to Show"
              : recentProperties.map((property) => {
                  return <PropertyCard property={property} id={property._id} />;
                })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageProperties;

import PropertyCard from "@/components/PropertyCard";

async function PropertiesPage() {
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
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.length !== 0 ? (
              properties.map((property) => {
                return <PropertyCard property={property} key={property._id} />;
              })
            ) : (
              <p>No properties found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default PropertiesPage;

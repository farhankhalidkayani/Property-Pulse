"use client";
import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/request";
import { useState } from "react";
import Loader from "@/components/Loader";

async function PropertiesPage() {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const getProperties = async () => {
    setLoading(true);
    const res = await fetchProperties();
    setProperties(res);
    setLoading(false);
  };

  properties.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  if (loading) return <Loader />;
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

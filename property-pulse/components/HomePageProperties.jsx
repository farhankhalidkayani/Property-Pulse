"use client";
import PropertyCard from "./PropertyCard";
import { fetchProperties } from "@/utils/request";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
const HomePageProperties = () => {
  const [loading, setLoading] = useState(true);
  const [properties, setProperties] = useState([]);
  const getProperties = async () => {
    setLoading(true);
    const res = await fetchProperties();
    console.log(res);

    setProperties(res);
    setLoading(false);
  };
  useEffect(() => {
    getProperties();
  }, []);

  if (loading) return <Loader />;
  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

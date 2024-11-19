"use client";

import { fetchProperty } from "@/utils/request";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import PropertyDetail from "@/components/PropertyDetail";

const PropertyPage = () => {
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getProperty = async () => {
      setLoading(true);
      const res = await fetchProperty(id);
      console.log(res);
      setProperty(res);
      setLoading(false);
    };
    getProperty();
  }, [id]);
  if (loading) return <Loader />;
  return <PropertyDetail property={property} />;
};

export default PropertyPage;

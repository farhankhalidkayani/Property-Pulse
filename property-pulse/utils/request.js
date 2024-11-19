const fetchProperties = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}properties`);
    return await res.json();
  } catch (error) {
    console.log(`Error While Fetching Data: ${error}`);
  }
};
const fetchProperty = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_DOMAIN}properties/${id}`
    );
    return await res.json();
  } catch (error) {
    console.log(`Error While Fetching Data: ${error}`);
  }
};

export { fetchProperties, fetchProperty };

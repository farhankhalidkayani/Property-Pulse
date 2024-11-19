const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;
const fetchProperties = async () => {
  if (!apiDomain) return [];
  try {
    const res = await fetch(`${apiDomain}properties`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`Error While Fetching Data: ${error}`);
    return [];
  }
};
const fetchProperty = async (id) => {
  if (!apiDomain) return null;

  try {
    const res = await fetch(`${apiDomain}properties/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`Error While Fetching Data: ${error}`);
    return null;
  }
};

export { fetchProperties, fetchProperty };

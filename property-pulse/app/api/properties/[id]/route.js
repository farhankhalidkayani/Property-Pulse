import connectDB from "@/config/database";
import Property from "@/models/property.model";

export const GET = async (request, { params }) => {
  await connectDB();
  try {
    const property = await Property.findById(params.id);
    if (!property) {
      return new Response(JSON.stringify({ message: "No property found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log(`Error while fetching property ${error}`);
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
};

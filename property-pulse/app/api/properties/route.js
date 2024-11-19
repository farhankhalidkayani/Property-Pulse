import connectDB from "@/config/database";
import Property from "@/models/property.model";

export const GET = async (request) => {
  await connectDB();
  try {
    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ message: "Something went wrong", error: err }),
      {
        status: 500,
      }
    );
  }
};

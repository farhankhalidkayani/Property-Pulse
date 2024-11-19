import Link from "next/link";

const AllPropertiesButton = () => {
  return (
    <>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties/"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default AllPropertiesButton;

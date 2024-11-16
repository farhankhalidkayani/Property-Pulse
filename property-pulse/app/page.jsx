import Link from "next/link";
function Homepage() {
  return (
    <div>
      <h1 className="text-3xl"> Welcome</h1>
      <Link href={"/properties"}>Go to properties</Link>
    </div>
  );
}

export default Homepage;

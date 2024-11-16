import Link from "next/link";

function MessagesPage() {
  return (
    <div>
      <h1 className="text-3xl">Messages</h1>
      <Link href={"/"}>Go to Home</Link>
    </div>
  );
}

export default MessagesPage;

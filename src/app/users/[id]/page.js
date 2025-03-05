import { notFound } from "next/navigation";
///vgvgfgf
const Detail = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    return notFound();
  }

  const data = await response.json();

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
      <p className="text-xl font-semibold text-gray-800">Name: {data.name}</p>
      <p className="text-gray-600">Username: {data.username}</p>
      <p className="text-gray-600">Phone: {data.phone}</p>
      <p className="text-gray-600">Email: {data.email}</p>
    </div>
  );
};

export default Detail;

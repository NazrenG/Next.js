import Link from "next/link";
import React, { cache } from "react";

const User = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
      {data.map((user) => (
        <Link key={user.id} href={`users/${user.id}`}>
          <div className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
            <p className="text-lg font-semibold text-gray-800">{user.name}</p>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default User;

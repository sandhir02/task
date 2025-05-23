import React, { useEffect, useState } from "react";
import axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://taskapi-tm8t.onrender.com/users");
        setUsers(res.data);
        setFiltered(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        alert("Failed to fetch users. Please try again later.");
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const keyword = search.toLowerCase();
    const filteredData = users.filter((user) =>
      JSON.stringify(user).toLowerCase().includes(keyword)
    );
    setFiltered(filteredData);
    setCurrentPage(1);
  }, [search, users]);

  const sortBy = (keyPath) => {
    let direction = "asc";
    if (sortConfig.key === keyPath && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const getValue = (obj, path) =>
      path.split(".").reduce((acc, key) => acc?.[key] || "", obj);

    const sorted = [...filtered].sort((a, b) => {
      const valA = getValue(a, keyPath).toString().toLowerCase();
      const valB = getValue(b, keyPath).toString().toLowerCase();

      return direction === "asc"
        ? valA.localeCompare(valB)
        : valB.localeCompare(valA);
    });

    setSortConfig({ key: keyPath, direction });
    setFiltered(sorted);
  };

  const totalPages = Math.ceil(filtered.length / usersPerPage);
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = filtered.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">User Table</h1>

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-6 p-2 w-full max-w-md border rounded font-helvetica"
        />

        <div className="overflow-auto">
          <table className="min-w-full bg-white rounded shadow-md">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th
                  onClick={() => sortBy("name")}
                  className="p-3 cursor-pointer">
                  Name{" "}
                  {sortConfig.key === "name" &&
                    (sortConfig.direction === "asc" ? "⬆️" : "⬇️")}
                </th>
                <th
                  onClick={() => sortBy("email")}
                  className="p-3 cursor-pointer">
                  Email{" "}
                  {sortConfig.key === "email" &&
                    (sortConfig.direction === "asc" ? "⬆️" : "⬇️")}
                </th>
                <th
                  onClick={() => sortBy("phone")}
                  className="p-3 cursor-pointer">
                  Phone{" "}
                  {sortConfig.key === "phone" &&
                    (sortConfig.direction === "asc" ? "⬆️" : "⬇️")}
                </th>
                <th
                  onClick={() => sortBy("city")}
                  className="p-3 cursor-pointer">
                  City{" "}
                  {sortConfig.key === "city" &&
                    (sortConfig.direction === "asc" ? "⬆️" : "⬇️")}
                </th>
                <th
                  onClick={() => sortBy("country")}
                  className="p-3 cursor-pointer">
                  Country{" "}
                  {sortConfig.key === "country" &&
                    (sortConfig.direction === "asc" ? "⬆️" : "⬇️")}
                </th>
                <th className="p-3">Profile</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.phone}</td>
                  <td className="p-3">{user.city}</td>
                  <td className="p-3">{user.country}</td>
                  <td className="p-3">
                    <img
                      src={user.picture}
                      alt="avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {currentUsers.length === 0 && (
            <p className="mt-4 text-gray-600">No users found.</p>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}>
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`px-3 py-1 rounded cursor-pointer ${
                currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}>
              {page}
            </button>
          ))}
          <button
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;

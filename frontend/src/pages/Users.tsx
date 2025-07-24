import { use, useEffect, useState } from "react";
import { getUsers, deleteUser } from "../api";
import { User } from "../types";

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  
  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleDelete = async (userId: number) => {
    if (!confirm("Are you sure?")) return;
    await deleteUser(userId);
    loadUsers(); // Refresh the user list after deletion
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <table className="min-w-full table-auto border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Location</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.location}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
import { useEffect, useState } from "react";
import { getLogins } from "../api";

type Login = {
  user_name: string;
  ip_address: string;
  location: string;
  timestamp: string;
};

export default function Dashboard() {
  const [logins, setLogins] = useState<Login[]>([]);

  useEffect(() => {
    const fetchLogins = async () => {
      const data = await getLogins();
      setLogins(data);
    };
    fetchLogins();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="bg-white rounded shadow p-4 mb-6">
        <p className="text-lg">Total Logins: {logins.length}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">User</th>
              <th className="py-2 px-4">IP</th>
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Time</th>
            </tr>
          </thead>
          <tbody>
            {logins.map((login, idx) => (
              <tr key={idx} className="border-t">
                <td className="py-2 px-4">{login.user_name}</td>
                <td className="py-2 px-4">{login.ip_address}</td>
                <td className="py-2 px-4">{login.location}</td>
                <td className="py-2 px-4">{new Date(login.timestamp).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
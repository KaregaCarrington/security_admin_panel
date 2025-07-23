import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <nav className="space-y-4">
        <Link to="/" className="block hover:text-green-400">Dashboard</Link>
        <Link to="/users" className="block hover:text-green-400">Users</Link>
      </nav>
    </div>
  );
}
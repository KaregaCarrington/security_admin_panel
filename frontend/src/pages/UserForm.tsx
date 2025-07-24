import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createUser, getUsers, updateUser } from "../api";
import { UserFormType } from "../types";

export default function UserForm() {
    const { id } = useParams();
    const isEdit = Boolean(id);
    const navigate = useNavigate();
    const [form, setForm] = useState<UserFormType>({ 
        name: "",
        email: "",
        location: ""
    });

    useEffect(() => {
        if (isEdit) {
            getUsers().then(users => {
                const user = users.find(user => user.id === Number(id));
                if (user) {
                    setForm({
                        name: user.name,
                        email: user.email,
                        location: user.location
                    });
                }
            });
        }
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isEdit) {
            await updateUser(Number(id), form);
        } else {
            await createUser(form);
        }
        navigate("/users");
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4">
                {isEdit ? "Edit User" : "Add New User"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="w-full border px-4 py-2"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    className="w-full border px-4 py-2"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                    className="w-full border px-4 py-2"
                    placeholder="Location"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded">
                    {isEdit ? "Update" : "Create"}
                </button>
            </form>
        </div>
    );
}

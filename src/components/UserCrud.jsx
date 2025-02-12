import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../style/main.css";

export default function UserCardList() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    job: "",
    address: "",
    phone: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (editingId) {
      setUsers(
        users.map((user) =>
          user.id === editingId ? { ...form, id: editingId } : user
        )
      );
      setEditingId(null);
    } else {
      setUsers([...users, { ...form, id: uuidv4() }]);
    }
    setForm({ name: "", email: "", age: "", job: "", address: "", phone: "" });
  };

  const handleEdit = (id) => {
    const user = users.find((user) => user.id === id);
    setForm(user);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <div className="inputs">
        <h2 className="text-xl font-bold mb-4">Add User</h2>
        <label htmlFor="name"> For Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="main-input"
        />
        <label htmlFor="email">For Email:</label>

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="main-input"
        />
        <label htmlFor="number">For number:</label>

        <input
          type="number"
          name="age"
          id="number"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          className="main-input"
        />
        <label htmlFor="job">For Job:</label>

        <input
          type="text"
          name="job"
          id="job"
          placeholder="Job"
          value={form.job}
          onChange={handleChange}
          className="main-input"
        />
        <label htmlFor="address">For Address:</label>

        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="main-input"
        />
        <label htmlFor="phone"> For Phone:</label>

        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="main-input"
        />
        <button
          onClick={handleSubmit}
          className="submit"
        >
          {editingId ? "Update User" : "Add User"}
        </button>
      </div>
      <main>
        <h2 className="text-xl font-bold mb-4">User List</h2>
        <div className="grid">
          {users.map((user) => (
            <div key={user.id} className="card">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Age:</strong> {user.age}
              </p>
              <p>
                <strong>Job:</strong> {user.job}
              </p>
              <p>
                <strong>Address:</strong> {user.address}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>

            <div className="avatar"></div>
              <div className="buttons">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="edit"
                >
                  <i class="fa-solid fa-pen-to-square"></i>
                </button>

                <button
                  onClick={() => handleDelete(user.id)}
                  className="delete"
                >
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

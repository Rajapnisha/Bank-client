import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Alldata() {
  let [data, setData] = useState([]);
  let [editUser, setEditUser] = useState(null);
  let [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    amount: "",
  });

  async function handleClick(e) {
    e.preventDefault();
    try {
      let result = await axios.get("https://bank-server-01u1.onrender.com/data");
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`https://bank-server-01u1.onrender.com/delete/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting:", error);
    }
  }

  async function handleUpdate(id) {
    try {
      const updatedUser = { ...formData };
      await axios.put(`https://bank-server-01u1.onrender.com/update/${id}`, updatedUser);
      setData(data.map(item => (item._id === id ? { ...item, ...updatedUser } : item)));
      setEditUser(null);
    } catch (error) {
      console.error("Error updating:", error);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">All Data</h1>
      <button className="btn btn-success mb-3" onClick={handleClick}>FETCH DATA</button>
      <div className="card p-3">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.amount}</td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => setEditUser(item)}>EDIT</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>DELETE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Form */}
      {editUser && (
        <div className="card p-3 mt-4">
          <h2 className="text-center">Edit User</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdate(editUser._id);
            }}
          >
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Amount:</label>
              <input
                type="number"
                className="form-control"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary me-2">Update</button>
            <button className="btn btn-secondary" onClick={() => setEditUser(null)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}
import React, { useState } from "react";

function Register() {
  const [role, setRole] = useState("student");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${role} registered:`, form);
    // TODO: Post to backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Register as {role === "admin" ? "Admin" : "Student"}
        </h2>

        <div className="mb-4 flex justify-center gap-4">
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${
              role === "student" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setRole("student")}
          >
            Student
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md ${
              role === "admin" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-4 py-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;

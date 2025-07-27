import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Future: Add auth logic here
    console.log(`${role} logging in:`, email);
    navigate("/"); // Redirect to home or dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Login as {role === "admin" ? "Admin" : "Student"}
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
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;

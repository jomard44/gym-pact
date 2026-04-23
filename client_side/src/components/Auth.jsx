import { useState } from "react";

function Auth() {
  const [haveAccount, setHaveAccount] = useState(true);
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [create, setCreate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setCreate("");
     setAuthData({
        email: "",
        password: "",
      });
    try {
      const authUrl = haveAccount
        ? `${import.meta.env.VITE_SERVER}/auth/login`
        : `${import.meta.env.VITE_SERVER}/auth/register`;
      const res = await fetch(authUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authData),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "something went wrong");
      }
      if (!haveAccount) {
        setTimeout(() => setHaveAccount(true), 1000);
        setCreate("account created. please login");
      }
     
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form
      className="flex min-h-screen items-center justify-center bg-gray-100"
      onSubmit={handleSubmit}
    >
      <div className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md flex flex-col gap-4">
        {error && <p className="text-red-500 text-center">{error}</p>}
        {create && <p className="text-green-500 text-center">{create}</p>}

        <h2 className="text-2xl font-semibold text-center">
          {haveAccount ? "Login" : "Register"}
        </h2>
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Email</label>
          <input
            value={authData.email}
            onChange={(e) => {
              setAuthData({ ...authData, email: e.target.value });
            }}
            type="email"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Password</label>
          <input
            value={authData.password}
            onChange={(e) => {
              setAuthData({ ...authData, password: e.target.value });
            }}
            type="password"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          {haveAccount ? "Login" : "Register"}
        </button>

        <p className="text-sm text-center text-gray-600">
          {haveAccount ? "Don't have an account?" : "Already have an account?"}
        </p>

        <button
          type="button"
          className="text-blue-600 hover:underline text-sm"
          onClick={() => setHaveAccount(!haveAccount)}
        >
          {haveAccount ? "Register now" : "Login instead"}
        </button>
      </div>
    </form>
  );
}

export default Auth;

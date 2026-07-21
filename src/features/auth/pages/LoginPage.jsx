import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // TODO: Replace with real authentication logic
    if (email === "sonivanshu012@gmail.com" && password === "hail@Trufi1") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <main className="login-page" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <section style={{ width: "100%", maxWidth: "400px", background: "#fff", borderRadius: "12px", boxShadow: "0 8px 24px rgba(0,0,0,0.08)", padding: "2rem" }}>
        <h1 style={{ marginBottom: "1.5rem", fontSize: "1.75rem", textAlign: "center" }}>Login to EduPulseAI</h1>
        {error && (
          <div style={{ marginBottom: "1rem", color: "#b00020", fontSize: "0.95rem" }}>
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "1rem" }}
          />

          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: 600 }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "8px", border: "1px solid #ccc", marginBottom: "1.5rem" }}
          />

          <button
            type="submit"
            style={{ width: "100%", padding: "0.85rem 1rem", borderRadius: "8px", border: "none", background: "#1f6feb", color: "#fff", fontWeight: 700, cursor: "pointer" }}
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
};

export default LoginPage;

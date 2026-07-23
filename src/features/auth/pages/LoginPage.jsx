import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ROUTES } from "@/app/constants";
import { authApi } from "@/features/auth/api/authApi";
import { tokenStorage } from "@/features/auth/services/tokenStorage";
import { loginSuccess } from "@/store/auth/authSlice";

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        try {
            setLoading(true);

            const response = await authApi.login({
                email,
                password,
            });

            const {
                accessToken,
                refresh_token,
                user,
            } = response.data.data;

            tokenStorage.setAccessToken(accessToken);
            tokenStorage.setRefreshToken(refresh_token);

            dispatch(
                loginSuccess({
                    accessToken,
                    refreshToken: refresh_token,
                    user,
                })
            );

            navigate(ROUTES.DASHBOARD);
        } catch (err) {
            setError(
                err.response?.data?.message ??
                    "Invalid email or password."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main
            className="login-page"
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
            }}
        >
            <section
                style={{
                    width: "100%",
                    maxWidth: "400px",
                    background: "#fff",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                    padding: "2rem",
                }}
            >
                <h1
                    style={{
                        marginBottom: "1.5rem",
                        fontSize: "1.75rem",
                        textAlign: "center",
                    }}
                >
                    Login to EduPulse AI
                </h1>

                {error && (
                    <div
                        style={{
                            marginBottom: "1rem",
                            color: "#b00020",
                        }}
                    >
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <label>Email</label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>
                </form>
            </section>
        </main>
    );
};

export default LoginPage;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy login logic since there's no backend yet
const dummyLogin = {
    async performLogin(email, password, role, uniqueId) {
        console.log(`Attempting login for role: ${role} with email: ${email}, uniqueId: ${uniqueId}`);

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));

        // Admin Login
        if (role === 'admin') {
            if (email === 'admin@example.com' && password === 'adminpass') {
                localStorage.setItem('userToken', 'fake_admin_token');
                localStorage.setItem('userRole', 'admin');
                return { success: true, message: 'Admin login successful!' };
            } else {
                return { success: false, message: 'Invalid admin credentials.' };
            }
        }

        // Student Login
        if (role === 'student') {
            if (email === 'test@example.com' && password === 'password' && uniqueId === 'STC12345') {
                localStorage.setItem('userToken', 'fake_student_token');
                localStorage.setItem('userRole', 'student');
                return { success: true, message: 'Student login successful!' };
            } else {
                return { success: false, message: 'Invalid student credentials. Check email, password, and unique ID.' };
            }
        }

        // Fallback for unknown role
        return { success: false, message: 'Invalid role specified.' };
    }
};

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [uniqueId, setUniqueId] = useState('');
    const [role, setRole] = useState('student'); // New: Default role is student

    const navigate = useNavigate(); // For routing

    const handleLogin = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        const result = await dummyLogin.performLogin(email, password, role, uniqueId);

        setLoading(false);

        if (result.success) {
            console.log('Login successful!');

            // Redirect based on role
            if (role === 'admin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/student/dashboard');
            }
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2 className="login-title">Welcome Back</h2>
                {error && <p className="login-error">{error}</p>}

                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="uniqueId" className="input-label">Unique ID</label>
                        <input
                            type="text"
                            id="uniqueId"
                            value={uniqueId}
                            onChange={(e) => setUniqueId(e.target.value)}
                            className="form-input"
                            placeholder="Your Unique ID (Provided by STC)"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-input"
                            placeholder="Your email address"
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="input-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-input"
                            placeholder="Your password"
                            autoComplete="current-password"
                        />
                    </div>

                    {/* Role Selection (Admin/Student) */}
                    <div className="form-group">
                        <label htmlFor="role" className="input-label">Login As</label>
                        <select
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="form-input"
                        >
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div className="form-group form-group-checkbox">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="form-checkbox"
                        />
                        <label htmlFor="rememberMe" className="checkbox-label">Remember Me</label>
                    </div>

                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? 'Logging In...' : 'Login'}
                    </button>

                    <div className="forgot-password">
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                </form>

                <div className="login-signup">
                    Don't have an account? <a href="/register">Sign Up</a>
                </div>
            </div>
        </div>
    );
}

export default Login;

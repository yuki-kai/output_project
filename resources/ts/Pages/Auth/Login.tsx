import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../../api';
import { GuestRoute } from '../../Layouts/GuestRoute';

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        await login(email, password);
        navigate('/dashboard');
    };

    return (
        <GuestRoute>
            <div className="container mt-5">
                <form onSubmit={(onSubmit)}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">Login</div>
                                <div className="card-body">
                                <div className="form-group">

                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="メールアドレス"
                                />
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="パスワード"
                                />
                                </div>
                                </div>
                                <button  type="submit" className="btn btn-primary">ログイン</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </GuestRoute>
    );
}

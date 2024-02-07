import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from '../../api';
import { GuestRoute } from '../../Layouts/GuestRoute';

export const RegisterUser = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        await registerUser(name, email, password, passwordConfirmation);
        navigate('/login');
    };

    return (
        <GuestRoute>
            <div className="container mt-5">
                <form onSubmit={(onSubmit)}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card mb-3">
                                <div className="card-header">RegisterUser</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <input
                                            className="form-control mb-3"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="名前"
                                        />
                                        <input
                                            type="email"
                                            className="form-control mb-3"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="メールアドレス"
                                        />
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control mb-3"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="パスワード"
                                        />
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            className="form-control mb-3"
                                            value={passwordConfirmation}
                                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                                            placeholder="パスワード(確認)"
                                        />
                                    </div>
                                </div>
                                <button  type="submit" className="btn btn-primary">新規作成</button>
                            </div>
                            <div className="text-center">
                                <Link to="/login">ログイン</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </GuestRoute>
    );
}

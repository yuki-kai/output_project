import { useState, useEffect } from "react";
import { PrivateRoute } from "ts/Layouts/PrivateRoute";
import { logout } from "ts/api";
import { useNavigate, useLocation } from "react-router-dom";
import { FlashMessage } from "ts/Components/FlashMessage";

export const Dashboard = () => {
    const [message, setMessage] = useState<{ message: string } | null>(useLocation().state);
    const navigate = useNavigate();

    useEffect(() => {
        // リロード時はフラッシュメッセージを非表示
        window.addEventListener('load', () => setMessage(null));
    });

    const handleLogout = async () => {
        const response: { message: string } = await logout();
        navigate("/login",  { state: { message: response.message }});
    };
    return (
        <PrivateRoute>
            { message && <FlashMessage>{ message.message }</FlashMessage> }
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mt-5">
                        <div className="card">
                            <div className="card-header">PrivateRoute</div>
                            <div className="card-body">Now Authenticated!!</div>
                            <button onClick={handleLogout} className="btn btn-primary">ログアウト</button>
                        </div>
                    </div>
                </div>
            </div>
        </PrivateRoute>
    );
}

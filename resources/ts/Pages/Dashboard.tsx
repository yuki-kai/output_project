import { PrivateRoute } from '../Layouts/PrivateRoute';
import { useNavigate } from "react-router-dom";
import { logout } from '../api';

export const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };
    return (
        <PrivateRoute>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
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

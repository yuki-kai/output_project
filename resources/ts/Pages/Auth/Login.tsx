import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from 'react-hook-form';
import { GuestRoute } from '../../Layouts/GuestRoute';
import { AuthUser } from '../../types/user';
import { login } from '../../api';

export const Login = () => {
    const { register, handleSubmit } = useForm<AuthUser>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<AuthUser> = async (loginUser) => {
        await login(loginUser);
        navigate('/dashboard');
    };

    return (
        <GuestRoute>
            <div className="container mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card mb-3">
                                <div className="card-header">Login</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <input
                                            className="form-control mb-3"
                                            placeholder="メールアドレス"
                                            { ...register('email') }
                                        />
                                        <input
                                            className="form-control mb-3"
                                            placeholder="パスワード"
                                            {...register('password')}
                                        />
                                    </div>
                                </div>
                                <button  type="submit" className="btn btn-primary">ログイン</button>
                            </div>
                            <div className="text-center">
                                <Link to="/registerUser">新規作成</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </GuestRoute>
    );
}

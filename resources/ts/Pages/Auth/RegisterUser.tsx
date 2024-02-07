import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from 'react-hook-form';
import { GuestRoute } from '../../Layouts/GuestRoute';
import { AuthUser } from '../../types/user';
import { registerUser } from '../../api';

export const RegisterUser = () => {
    const { register, handleSubmit } = useForm<AuthUser>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<AuthUser> = async (user) => {
        await registerUser(user);
        navigate('/login');
    };

    return (
        <GuestRoute>
            <div className="container mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <div className="card mb-3">
                                <div className="card-header">RegisterUser</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <input
                                            className="form-control mb-3"
                                            placeholder="名前"
                                            { ...register('name') }
                                        />
                                        <input
                                            className="form-control mb-3"
                                            placeholder="メールアドレス"
                                            { ...register('email') }
                                        />
                                        <input
                                            className="form-control mb-3"
                                            placeholder="パスワード"
                                            { ...register('password') }
                                        />
                                        <input
                                            className="form-control mb-3"
                                            placeholder="パスワード(確認用)"
                                            { ...register('password_confirmation') }
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

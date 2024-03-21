import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { GuestRoute } from "ts/Layouts/GuestRoute";
import { AuthUser } from "ts/types/user";
import { TextInput } from "ts/Components/TextInput";
import { registerUser } from "ts/api";

export const RegisterUser = () => {
    const { control, handleSubmit, setError } = useForm<AuthUser>({ reValidateMode: "onSubmit" });
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<AuthUser> = async (user) => {
        registerUser(user).then(() => {
            navigate("/login");
        }).catch((e) => {
            for (const [key, value] of Object.entries(e.response.data.errors)) {
                setError(key as keyof AuthUser, { type: "required", message: value as string })
            }
        });
    };

    return (
        <GuestRoute>
            <div className="container mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="card mb-3">
                                <div className="card-header">RegisterUser</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <TextInput
                                            name="name"
                                            control={control}
                                            placeholder="名前"
                                            rules={{
                                                required: { value: true, message: "入力必須です" },
                                            }}
                                        />
                                        <TextInput
                                            name="email"
                                            control={control}
                                            placeholder="メールアドレス"
                                            rules={{
                                                required: { value: true, message: "入力必須です" },
                                            }}
                                        />
                                        <TextInput
                                            name="password"
                                            control={control}
                                            placeholder="パスワード"
                                            rules={{
                                                required: { value: true, message: "入力必須です" },
                                            }}
                                        />
                                        <TextInput
                                            name="password_confirmation"
                                            control={control}
                                            placeholder="パスワード(確認用)"
                                            rules={{
                                                required: { value: true, message: "入力必須です" },
                                            }}
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

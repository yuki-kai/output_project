import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { GuestRoute } from "ts/Layouts/GuestRoute";
import { AuthUser } from "ts/types/user";
import { TextInput } from "ts/Components/TextInput";
import { login } from "ts/api";
import { FlashMessage } from "ts/Components/FlashMessage";

export const Login = () => {
    const [message, setMessage] = useState<{ message: string }>(useLocation().state);
    const { control, handleSubmit, setError } = useForm<AuthUser>({ reValidateMode: "onSubmit" });
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<AuthUser> = async (loginUser) => {
        login(loginUser).then((response: { message: string }) => {
            setMessage({ message: response.message });
            navigate("/dashboard", { state: { message: response.message }});
        }).catch((e) => {
            for (const [key, value] of Object.entries(e.response.data.errors)) {
                setError(key as keyof AuthUser, { type: "required", message: value as string })
            }
        });
    };

    return (
        <GuestRoute>
            { message && <FlashMessage>{ message.message }</FlashMessage> }
            <div className="container mt-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mt-5">
                            <div className="card">
                                <div className="card-header">Login</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <TextInput
                                            name="email"
                                            control={control}
                                            placeholder="メールアドレス"
                                            rules={{
                                                required: { value: true, message: "メールアドレスは必ず指定してください。" },
                                            }}
                                        />
                                        <TextInput
                                            name="password"
                                            control={control}
                                            placeholder="パスワード"
                                            rules={{
                                                required: { value: true, message: "パスワードは必ず指定してください。" },
                                            }}
                                        />
                                    </div>
                                </div>
                                <button  type="submit" className="btn btn-primary">ログイン</button>
                            </div>
                            <div className="text-center mt-3">
                                <Link to="/registerUser">新規作成</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </GuestRoute>
    );
}

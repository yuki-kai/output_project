import { useState } from "react";
import { Link } from "react-router-dom";
import { FlashMessage } from "ts/Components/FlashMessage";
import { GuestRoute } from "ts/Layouts/GuestRoute";
import { sendEmailVerification } from "ts/api";

export const RegisteredUser = () => {
    const [message, setMessage] = useState<{ message: string }>();
    const handleEmailVerification = async () => {
        await sendEmailVerification();
        setMessage({ message: "再度メールを送信しました" });
    };

    return (
        <GuestRoute>
            { message && <FlashMessage>{ message.message }</FlashMessage> }
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mt-5">
                        <div className="card">
                            <div className="card-header">RegisteredUser</div>
                            <div className="card-body">
                                送信されたメールから認証をお願いします
                            </div>
                            <button onClick={handleEmailVerification} className="btn btn-primary">もう一度メールを送る</button>
                        </div>
                        <div className="text-center mt-3">
                            <Link to="/login">ログイン画面へ戻る</Link>
                        </div>
                    </div>
                </div>
            </div>
        </GuestRoute>
    );
}

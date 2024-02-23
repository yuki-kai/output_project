import { useState, useEffect } from "react";
import { checkAuthenticated } from "../../api";

export const useAuth = () => {
    //認証を許可するかどうかを状態管理
    const [check, setCheck] = useState<{
        checked: boolean;
        isAuthenticated: boolean;
    }> ({ checked: false, isAuthenticated: false });
    //レンダリング後に実行
    useEffect(() => {
        const handleCheckAuthenticated = async () => {
            try {
                const response = await checkAuthenticated();
                setCheck({
                    checked: true,
                    isAuthenticated: response.isAuthenticated,
                });
            } catch (error) {
                setCheck({ checked: true, isAuthenticated: false });
            }
        };
        handleCheckAuthenticated();
    }, []);
    return check;
};

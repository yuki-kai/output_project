import React, { useState, useEffect, CSSProperties } from 'react';

type Props = {
    children: React.ReactNode;
};

export const FlashMessage = ({ children }: Props) => {
    const [visible, setVisible] = useState(true);

    const flashMessagePosition: CSSProperties = {
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
    };
    const fadeIn: CSSProperties = {
        opacity: 1,
        transition: 'opacity 0.5s ease-in-out'
    }
    const fadeOut: CSSProperties = {
        opacity: 0,
        transition: 'opacity 0.5s ease-in-out'
    }

    useEffect(() => {
        setTimeout(() => {setVisible(false)}, 2000);
    }, []);

    return (
        <div
            className={`alert alert-success`}
            style={{ ...visible ? fadeIn : fadeOut, ...flashMessagePosition}}
            role="alert"
        >
            <p className="text-center mb-0">
                { children }
            </p>
        </div>
    );
};

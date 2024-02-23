import ReactLoading from "react-loading";

export const Loading = () => {
    return (
        <div className="container mt-5">
            <div className="d-flex align-items-center justify-content-center">
                <ReactLoading
                    color="grey"
                    type="spin"
                    className="mt-5"
                />
            </div>
        </div>
    );
};

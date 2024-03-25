import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mt-5">
                    <div className="card">
                        <div className="card-header">404 NOT FOUND</div>
                        <div className="card-body">お探しのページが見つかりませんでした</div>
                        <Link className="btn btn-primary" to="/login">戻る</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

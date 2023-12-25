import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="container mx-auto flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="font-bold text-4xl">Error</h1>
                <p>Page not fount please try another</p>
                <Link to={-1} className="btn btn-ghost border">Go Back</Link>
            </div>
        </div>
    );
};

export default Error;
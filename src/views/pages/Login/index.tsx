import React from "react";
import { signInWithGoogle } from "../../../firebase";

const Login: React.FC = () => {

    return (
        <div>
            <button onClick={signInWithGoogle}>Login</button>
        </div>
    );
};

export default Login;

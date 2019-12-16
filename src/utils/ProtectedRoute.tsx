import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

interface ProtectedRouteProps extends RouteProps {
    component: React.ComponentType<any>;
    isAuthenticated: boolean;
    isVerifying: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    component: Component,
    isAuthenticated,
    isVerifying,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props =>
                isVerifying ? (
                    <div>Loading</div>
                ) : isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;

import { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useUserAuth } from "../context/useUserAuth";


function PrivateRoute({ children }: { children: ReactNode }) {
    const { authState } = useUserAuth();
    const location = useLocation();

    if (!authState.username) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return children;
}

export default PrivateRoute;
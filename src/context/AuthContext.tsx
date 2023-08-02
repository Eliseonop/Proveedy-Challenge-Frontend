import { createContext, useContext, useState } from 'react';

// Tipo para la información de autenticación
interface AuthState {
    username: string | null;
}

// Tipo para el contexto
interface AuthContextProps {
    authState: AuthState;
    setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
    veriFyAuthLocal: () => void;
    Logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    authState: { username: null },
    setAuthState: () => { },
    veriFyAuthLocal: () => { },
    Logout: () => { },

});


// Proveedor del contexto
interface props {
    children: JSX.Element | JSX.Element[];
}

// Hook para acceder al contexto
export const useAuthContext = () => { return useContext(AuthContext) };

export const AuthProvider = ({ children }: props) => {
    const [authState, setAuthState] = useState<AuthState>({ username: null });

    const veriFyAuthLocal = () => {
        const username = localStorage.getItem('username');
        if (username) {
            setAuthState({ username });
        }
    };

    const Logout = () => {
        localStorage.removeItem('username');
        setAuthState({ username: null });
    };


    return (
        <AuthContext.Provider value={{ authState, setAuthState, veriFyAuthLocal, Logout }}>
            {children}
        </AuthContext.Provider>
    );
};

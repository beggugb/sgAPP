import React,{ useEffect } from "react";
import { AuthContext } from "./auth-context";
import { useNavigate } from "react-router-dom";
import { usuarioActions } from "../redux/actions/usuario";
import { useSelector, useDispatch } from "react-redux";

const AuthProvider = ({ children }) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, item } = useSelector(state =>state.usuario)

    
    const handleLogin = event =>{              
        event.preventDefault() 
        dispatch(usuarioActions.login(item));        
        navigate('/admin/inicio');
    }

    const handleLogout= () =>{
        dispatch(usuarioActions.logout());
        navigate('/');
    }
    const value = {
        user,
        onLogin: handleLogin,
        onLogout: handleLogout
    };
    const reload = () =>{        
        if(user){            
            switch(user.rolId){                
                case 1:
                    navigate('/admin/reportes');
                    break;
                case 2: 
                    navigate('/admin/inicio');
                break;   
                case 3:
                    navigate('/admin/registros');
                    break;    
/*                default:
                    navigate('/admin/registroinicio');
                break;*/
            }
            dispatch({type:'setBandera',response:0})
        }       
    }
    
    useEffect(() => {
        reload()
    }, [user]);

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;

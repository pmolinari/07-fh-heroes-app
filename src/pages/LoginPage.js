import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ACTIONS } from '../reducers/authReducer';

const LoginPage = ({ history }) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {

        dispatch({
            type: ACTIONS.login,
            payload: { name: 'Pablo Molinari' }
        });
        
        history.replace(localStorage.getItem('lastPath') || '/');
    }

    return (
        <div className="container">

            <div className="row">
                <div class="card text-white bg-secondary">
                    <div class="card-body">
                        <h3 class="card-title">Login Page</h3>
                        <p class="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <button 
                            className="btn text-white border-light"
                            onClick={ handleLogin }
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LoginPage;

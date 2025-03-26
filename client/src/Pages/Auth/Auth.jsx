import React from 'react'
import { Link } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { googleLogout } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../action/currentuser';
import './Auth.css'

const Auth = ({ setEditCreateChannelBtn, setAuthBtn, user }) => {
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(setCurrentUser(null));
        googleLogout();
        localStorage.clear();
    }
    return (
        <div className="Auth_container" onClick={() => setAuthBtn(false)}>
            <div className="Auth_container2">
                <p className="User_Details">
                    <div className="Channel_Logo_App">
                        <p className="Fstchar_Logo_App">
                            {user?.result.name ? (
                                <>{user?.result.name.charAt(0).toUpperCase()}</>
                            ) : (
                                <>{user?.result.email.charAt(0).toUpperCase()}</>
                            )}
                        </p>
                    </div>
                    <div className="email_auth">{user?.result.email}</div>
                </p>
                <div className="btns_Auth">
                    {user?.result.name ? (
                        <>
                            {
                                <Link to={`/channel/${user?.result?._id}`} className="btn_Auth">Your Channel</Link>
                            }
                        </>
                    ) : (
                        <>
                            {
                                <input type="submit" className="btn_Auth" value="Create Your Own Channel" onClick={() => setEditCreateChannelBtn(true)} />
                            }
                        </>
                    )}
                    <div className="btn_Auth" onClick={() => logout()}>
                        <BiLogOut />
                        Log Out
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.ico'
import { RiVideoAddLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiUserCircle } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'
import Auth from '../../Pages/Auth/Auth'
import Searchbar from './Searchbar/Searchbar'
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../action/auth'
import { setCurrentUser } from '../../action/currentuser'
import { jwtDecode } from 'jwt-decode'

const Navbar = ({ setEditCreateChannelBtn, toggleDrawer }) => {
    const [authBtn, setAuthBtn] = useState(false);
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const dispatch = useDispatch();

    console.log(profile);

    const successLogin = () => {
        if (profile) {
            dispatch(login({ email: profile.email }));
        }
    }
    const currentUser = useSelector((state) => state.currentUserReducer);
    console.log(currentUser);

    const googleLogin = useGoogleLogin({
        onSuccess: tokenResponse => setUser(tokenResponse),
        onError: (error) => console.log("Login Failed", error)
    });

    useEffect(() => {
        if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: "application/json"
                }
            }).then((res) => {
                setProfile(res.data);
            }).catch((err) => console.log(err));
        }
    }, [user]);

    useEffect(() => {
        if (profile.email) {
            successLogin();
        }
    }, [profile]);

    console.log(profile);

    const logout = () => {
        dispatch(setCurrentUser(null));
        googleLogout();
        localStorage.clear();
    }

    useEffect(() => {
        const token = currentUser?.token;
        if (token) {
            const decodeToken = jwtDecode(token);
            if (decodeToken.exp * 1000 < new Date().getTime()) {
                logout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    }, [currentUser?.token, dispatch]);

    return (
        <>
            <div className="Container_Navbar">
                <div className="Burger_Logo_Navbar">
                    <div className="burger" onClick={() => toggleDrawer()}>
                        <FaBars size={22} color="white" />
                    </div>
                    <Link to={"/"} className="logo_div_Navbar">
                        <img src={logo} alt="" />
                        <p className="logo_title_navbar">YourTube</p>
                    </Link>
                </div>
                <Searchbar />
                <RiVideoAddLine size={22} className={"video_bell_Navbar"} />
                <div className="apps_Box">
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                    <p className="appBox"></p>
                </div>
                <IoMdNotificationsOutline size={22} className={"video_bell_Navbar"} />
                <div className="Auth_Cont_Navbar">
                    {currentUser ? (
                        <>
                            <div className="Channel_Logo_App" onClick={() => setAuthBtn(true)}>
                                <p className="Fstchar_Logo_App">
                                    {currentUser?.result.name ? (
                                        <>{currentUser?.result.name.charAt(0).toUpperCase()}</>
                                    ) : (
                                        <>{currentUser?.result.email.charAt(0).toUpperCase()}</>
                                    )}
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="Auth_Btn" onClick={() => googleLogin()}>
                                <BiUserCircle size={22} />
                                <b>Sign in</b>
                            </p>
                        </>
                    )}
                </div>
                <div>
                    {
                        authBtn && <Auth setEditCreateChannelBtn={setEditCreateChannelBtn} setAuthBtn={setAuthBtn} user={currentUser} />
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar

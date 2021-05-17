import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "./StateProvider"
import { auth } from './firebase'
export const Header = () => {

    const [{ basket, user }] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut(); 
        }
    };
    return (
        <div className="header">
            <Link to="/"> <img src="./images/amazonlogo.png" className="logo"/> </Link>
            <div className="searchcss">
                <input type="serach" className="searchbar" />
                <SearchIcon className="searchicon" />
            </div>

            <div className="nav_links">
                <Link className="links" to={!user && "/signin"}>
                    <div onClick={login} className="text">
                        <span className="optionOne">Hello {user?.email}</span>
                        <span className="optionTwo">{user ? 'Sign out' : 'sign in'} </span>
                    </div>
                </Link>

                <Link className="links">
                    <div className="text">
                        <span className="optionOne">Returns</span>
                        <span className="optionTwo">& orders</span>
                    </div>
                </Link>

                <Link className="links">
                    <div className="text">
                        <span className="optionOne">Your</span>
                        <span className="optionTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="links">
                    <div className="cart">
                        <span className="optionOne count">{basket?.length}</span>
                        <ShoppingCartIcon className="optionTwo cartLogo" />
                    </div>
                </Link>
            </div>
        </div>
    )
}

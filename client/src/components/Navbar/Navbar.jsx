import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">

            <div className="wrapper">

                <div className="left">

                    <div className="item">

                        <a href="https://paysoko.com/">
                            <img src="/img/en.png" alt="" className="img-responsive" />
                        </a>
                        {/* <KeyboardArrowDownIcon /> */}

                    </div>
                    <div className="item">

                        <span> Categories </span>

                        <KeyboardArrowDownIcon>
                            <Link className="link"></Link>

                        </KeyboardArrowDownIcon>

                    </div>

                    {/* <div className="item">
                        <Link className="link" to="/products/1">Food</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/products/2">Fashion</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/products/3">Electronics</Link>
                    </div> */}

                </div>

                <div className="center">
                    <Link className="link" to="/">MARKET PLACE</Link>
                </div>

                <div className="right">

                    <div className="item">
                        <Link className="link" to="/"> Stores </Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/"> Products</Link>
                    </div>

                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>



                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

import React, { useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListITemText } from "@mui/material";
import { HomeIcon } from "@mui/icons-material/home";
import { InfoIcon } from "@mui/info-material/Info";
import { FlatWareIcon } from "@mui/icons-material/CommentRounded";
import { EventIcon } from "@mui/icons-material/PhoneRounded";
import { CreateIcon } from "@mui/icons-material/ShoppingCartRounded";
import { PersonIcon } from "@mui/icons-material/ShoppingCartRounded";



const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text:"Home",
            icon:<HomeIcon />
        },
        {
            text:"About Us",
            icon:<InfoIcon />
        },
        {
            text:"Productos",
            icon:<FlatWareIcon />
        },
        {
            text:"Eventos",
            icon:<EventIcon />
        },
        {
            text:"Blog",
            icon:<CreateIcon />
        },
        {
            text:"Contacto",
            icon:<PersonIcon />
        }
    ]

  return (
    <nav>
      <div className="nav-logo-container">
        <img src="" alt="Pineda Logo" />
      </div>

      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Productos</a>
        <a href="">Eventos</a>
        <a href="">Blog</a>
        <a href="">Contacto</a>
      </div>
    </nav>
  )
}

export default Navbar

import React, { useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FlatwareIcon from "@mui/icons-material/Flatware";
import EventIcon from "@mui/icons-material/Event";
import CreateIcon from "@mui/icons-material/Create";
import PersonIcon from "@mui/icons-material/Person";


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
            icon:<FlatwareIcon />
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

        <button className="primary-button">
            Contacto
        </button>
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
        anchor="right">

        <Box sx={{ width: 250 }}
        role="presentation"
        onClick={() => setOpenMenu(false)}
        onKeyDown={() => setOpenMenu(false)}>

            <List>
                {menuOptions.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>



      </Drawer>


    </nav>
  )
}

export default Navbar

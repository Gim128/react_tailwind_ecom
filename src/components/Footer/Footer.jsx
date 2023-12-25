// import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {IconButton} from "@mui/material";

const Footer = () => {
    return <footer className="fixed bottom-0 left-0 z-[100] w-full p-3 bg-my-background flex items-center justify-between
    drop-shadow-header-shadow">
        <FooterIcon Icon={HomeOutlinedIcon} iconText ='Home' />
        <FooterIcon Icon={CategoryOutlinedIcon}  iconText ='Categories' />
        <FooterIcon Icon={AccountCircleOutlinedIcon}  iconText ='Profile' />

    </footer>
}

export default Footer;

const FooterIcon = ({Icon, iconText})=>
    <IconButton
        sx={{
            padding: "4px",
            borderRadius: "5px",
            color: "red"
        }}
    >
        <div className="text-gray-700 hover: text-[#c82196] transition-all duration-700">
            <Icon />
            <p className="text-xs font-semibold">{iconText}</p>
        </div>
    </IconButton>
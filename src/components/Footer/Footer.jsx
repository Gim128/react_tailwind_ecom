// import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import {IconButton} from "@mui/material";

const Footer = () => {
    return <footer className="fixed bottom-0 left-0 z-[100] w-full py-3 px-2 bg-my-background flex items-center justify-between
    drop-shadow-header-shadow">
        <FooterIcon Icon={HomeOutlinedIcon} />
        <FooterIcon Icon={CategoryOutlinedIcon} />
        <FooterIcon Icon={AccountCircleOutlinedIcon} />

    </footer>
}

export default Footer;

const FooterIcon = ({Icon})=>
    <IconButton
        sx={{
            padding: "4px",
            borderRadius: "5px",
            color: "red"
        }}
    >
        <div>
            <Icon />
            <p className="text-xl">Home</p>
        </div>
    </IconButton>
// import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { IconButton } from "@mui/material";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-[100] w-full p-5 bg-my-background flex items-center justify-between drop-shadow-header-shadow py-5 px-2">
            {/* header left */}
            <div className="flex items-center">
                <IconButton sx={{color: "red"}}>
                    <MenuIcon
                        sx={{
                            color:"black"
                        }}
                    />
                </IconButton>
                <h1 className="ml-2 text-sm font-semibold">Leo <span className="text-[#c82196]">D Mall</span></h1>
                <div className="overflow-hidden ml-2 flex items-center rounded-full bg-[#f1e6e6]">
                    <input type="text" placeholder="iphone"
                    className="outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
                    />
                    <IconButton>
                        <SearchIcon className='text-gray-400'/>
                    </IconButton>
                </div>
            </div>

            {/* header right */}
            <IconButton>
                <ShoppingCartOutlinedIcon />
            </IconButton>
            {/*25:40*/}
        </header>
    )
}

export default Header
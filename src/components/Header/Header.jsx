// import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-[100] w-full p-5 bg-my-background flex items-center justify-between drop-shadow-header-shadow">
            {/* header left */}
            <div className="flex items-center">
                <MenuIcon
                sx={{
                    color:"black"
                }}
                />
                <h1 className="ml-2 text-sm font-semibold">Leo <span className="text-[#c82196]">D Mall</span></h1>
                <div className="overflow-hidden ml-2 flex items-center rounded-full bg-[#f1e6e6]">
                    <input type="text" placeholder="iphone"
                    className="outline-none p-2 font-semibold text-sm w-[200px] bg-inherit"
                    />
                    <SearchIcon className='text-gray-400'/>
                </div>
            </div>

            {/* header right */}
            <ShoppingCartOutlinedIcon />
            {/*32:59*/}
        </header>
    )
}

export default Header
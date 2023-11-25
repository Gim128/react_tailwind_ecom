// import React from 'react'
import menu from '../../img/menu.svg'
import search from '../../img/search.svg'
import cart from '../../img/cart.svg'

const Header = () => {
    return (
        <header>
            {/* header left */}
            <div>
                <img src={menu} alt="..." />
                <h1>Leo <span>D Mall</span></h1>
                <div>
                    <input type="text" placeholder="iphone 15 pro max" />
                </div>
                <img src={search} alt="..." />
            </div>

            {/* header right */}
            <img src={cart} alt="..." />
            {/*32:59*/}
        </header>
    )
}

export default Header
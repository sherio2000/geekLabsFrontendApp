import React from 'react';

const NavbarItem = ({Itemname, icon}) => {
    <div className="navbar-item">
    <img src={require('../icons/notification_icon_white.png')} alt="Logo" className="navbar-item-logo" />
    <span className="navbar-item-text">Dashboard</span>
    </div>
}

 export default NavbarItem;


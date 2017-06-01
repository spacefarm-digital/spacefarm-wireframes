import React from 'react'
import {Toolbar, NavItem, Space} from 'rebass'

const Navbar = (props) => {
    return (
        <Toolbar>
            <NavItem is="a">
                Toolbar
            </NavItem>
            <NavItem is="a">
                NavItem
            </NavItem>
            <Space auto x={1}/>
            <NavItem is="a">
                NavItem
            </NavItem>
        </Toolbar>
    )
}

export default Navbar
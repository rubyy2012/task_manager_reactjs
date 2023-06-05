import React, { useState } from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import DropDown from '../DropDown/DropDown'
const MenuItem = (props) => {
    const {itemIcon,itemText,dropDownIcon,listItems} = props
    const [active,setActive] = useState(true)
    return (
        <li 
            className={styles.menu_item_li}>
                <div className={styles.menu_item}
                    onClick={()=>setActive(!active)}
                >
                        <div className={styles.link_item_container}>
                            {itemIcon}
                            <span>{itemText}</span>
                        </div>
                        {
                            listItems&& (
                                <div className={styles.dropdown_icon_container}>
                                    {dropDownIcon}
                                </div>
                            )
                        }
                        
                </div>
                <DropDown
                    active = {active}
                    listItems = {listItems?.data}
                />
        </li>
  )
}
export default MenuItem;

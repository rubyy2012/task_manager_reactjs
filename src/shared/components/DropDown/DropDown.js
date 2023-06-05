import React from 'react'
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LinkItem from '../LinkItem/LinkItem';
const DropDown = ({listItems,active}) => {
  const [itemSelect,setItemSelect] = useState([]) 
  const handleSelectItem = (listItems,id) => {
    const selectedItem = listItems.filter(item => item.id === id)
    setItemSelect(selectedItem);
  }
  return (
    <div className={`${styles.dropdown_container} ${active?styles.open:''}`}>
                {
                    listItems?.map((item,index)=> (
                        <LinkItem
                          key={index}
                          link={item.link}
                          title = {item.title}
                          listItems = {listItems}
                        />
                    ))
                }
    </div>
  )
}

export default DropDown;

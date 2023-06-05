import React from 'react'
import styles from './styles.module.scss';
import Tag from '../TagTodo/Tag';
import Card from '../card/Card';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ListCard = (props) => {
    const {name} = props;
  return (
    <div className={styles.listcard_container}>
        <div className={styles.listcard_body}>
            <Tag name={name}/>
            <Button 
              
                className={styles.btn_add}
                variant="contained" 
                startIcon={<AddIcon className={styles.add_icon}/>}>
                Add New Task
            </Button>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}
export default ListCard;

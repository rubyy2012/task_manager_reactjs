import React from 'react'
import styles from './styles.module.scss'
import { Button, TextField } from '@mui/material';
import ListColor from '../../../api/ListColor';
import { BsPlusCircleDotted } from "react-icons/bs";
import ColorItem from '../ColorItem/ColorItem';
import { useState } from 'react';
import ColorRange from '../ColorRange/ColorRange';

const LabelColor = ({setOpenAddTagLabel}) => { 
    const [visible, setVisibleColorRange] = useState(false)
  return (
    <div className={styles.label_color_container}>
        <div className={styles.label_color_body}>
           <form>
                <div className={styles.title_areas}>
                        <label>Title</label>
                        <TextField 
                            size="small"
                            className={styles.text_field}/>
                    </div>
                    <div className={styles.color_areas}>
                        <label>Change Color</label>
                        <div className={styles.group_color}>
                            {
                                ListColor.map(color=>(
                                    <ColorItem
                                        key={color.id}
                                        color = {color.colorCode}
                                    />
                                ))
                            }
                            {/* <button 
                                type='button'
                                onClick={()=>setVisibleColorRange(!visible)}
                                className={styles.btn_add_label_color}>
                                    <BsPlusCircleDotted className={styles.add_icon}/> <span>Add color</span>
                            </button> */}
                        </div>
                    </div>
                    <div className={styles.submit_areas}>
                        <Button 
                            className={styles.btn_submit}
                            variant="contained">Save</Button>
                        <Button 
                            onClick = {()=>setOpenAddTagLabel(false)}
                            className={styles.btn_cancel}
                            variant="outlined">Cancel</Button>
                    </div>
           </form>
        </div>
    </div>
  )
}
export default LabelColor

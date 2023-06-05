import React, { useState } from 'react'
import styles from './styles.module.scss';
import TaskOptionsLayout from '../../containers/layouts/share/task/TaskOptionsLayout';
import { ChipButton } from '../ChipButton/ChipButton';
import { IoIosAdd } from "react-icons/io";
import ListColor from '../../../api/ListColor';
import LabelColor from '../LabelColor/LabelColor';
const TagLabel = ({setOpenLabel}) => {
  const handleAddTag = () => {

  }
  const [isOpenAddTagLabel,setOpenAddTagLabel] = useState(false);
  return (
    <TaskOptionsLayout
        setTonggle = {setOpenLabel}
        textLabel='Tag'>
    
        <div className={styles.tag_label_container}>
          {
            ListColor.map(color=> (
              <ChipButton  
                textLabel = 'Mobile'
                bgColor = {color.colorCode}
            />
            ))
          }
            <button
              className={styles.add_tag_btn}
              onClick={handleAddTag}>
              <IoIosAdd className={styles.add_tag_icon}/>
                <span
                  onClick={()=>setOpenAddTagLabel(true)}
                  >Add tag</span>
            </button>
        </div>
        {
          isOpenAddTagLabel&& (<LabelColor
            setOpenAddTagLabel ={setOpenAddTagLabel} />)
        }
    </TaskOptionsLayout>
   
  )
}
export default TagLabel;

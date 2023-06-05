import React from 'react'
import styles from './styles.module.scss';
import FilterWorkspace from '../../../components/filter-workspace/FilterWorkspace';
import { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { Button, TextField } from '@mui/material';
import WorkspaceItem from '../../../components/workspace-item/WorkspaceItem';
const WorkspaceContainer = () => {
    const [openModal,handleOpenModel] = useState(false)
  return (
    <div className={styles.workspace_container}>
        <div className={styles.workspace_body}>
            <div className={styles.workspace_filter}>
                <FilterWorkspace/>
            </div>
            <div className={styles.workspace_content}>
                <div className={styles.title_introduction}>
                    You haven't had any projects. 
                    <p 
                        onClick={()=>handleOpenModel(!openModal)}
                        className={styles.create_new}>
                        Create new!
                    </p>
                </div>
                <div className={styles.workspace_projects_group}>
                    <button
                        className={styles.btn_create_new}
                        onClick={()=>handleOpenModel(!openModal)}
                        >Create new project</button>
                    <WorkspaceItem/>
                    <WorkspaceItem/>
                    <WorkspaceItem/>
                   
                </div>
            </div>
        </div>

        {
           openModal&&(
            <div className={styles.workspace_modal}>
                <div className={styles.create_form}>
                    <div className={styles.workspace_form}>
                        <div className={styles.workspace_header}>
                            <p
                                >Create new workspace</p>
                            <IoIosClose 
                                onClick={()=>handleOpenModel(false)}
                                className={styles.icon_close}/>
                        </div>
                        <div className={styles.workspaces_content}>
                            <form action="">
                                <p className={styles.workspace_details}>Workspace details</p>
                                <div className={styles.group_input}>
                                    <label htmlFor="">Project name</label>
                                    <TextField
                                        size='small'
                                    />
                                </div>
                                <div className={styles.group_input}>
                                    <label htmlFor="">Description</label>
                                    <TextField
                                        size='small'
                                        multiline ={true}
                                        rows={3}
                                        maxRows={6}
                                    />
                                </div>
                                <div className={styles.set_priority}>
                                    <label htmlFor="">
                                        Set priority
                                    </label>
                                    <select>
                                        <option value="">
                                            Public
                                        </option>
                                        <option value="">
                                            Private
                                        </option>
                                        <option value="">
                                            Workspace
                                        </option>
                                    </select>
                                </div>

                                <div className={styles.button_group}>
                                    <Button variant='outlined'>Create</Button>
                                    <Button
                                        onClick={()=>handleOpenModel(false)}
                                    >Cancel</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           )
        }
        
    </div>
  )
}
export default WorkspaceContainer;
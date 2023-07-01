import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { CiSearch } from "react-icons/ci";
import ProjectSquareItem from "../../../components/project-square-item/ProjectSquareItem";
import { useDispatch } from "react-redux";
import WorkspaceAction from "../../../../redux/workspaces/WorkspaceAction";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useState } from "react";
import LoadingSpinner from "../../../components/loading-spinner/LoadingSpinner";

const AllProjectContainer = () => {
  const [textSearch,setTextSearch] = useState('')
  const { allProjects } = useSelector((state) => ({
    allProjects: state.workspace.allProjects,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: WorkspaceAction.REQUEST_GET_ALL_PROJECTS,
    });
  }, []);
  const [newList,setNewList] = useState([])
  useEffect(()=>{
    setNewList(allProjects?.data)
  },[allProjects?.data])

  const onSearch = (textSearch)=>{
    const newData = allProjects?.data?.filter(item=>{
        if(item.title.trim().toLowerCase().includes(textSearch.trim().toLowerCase()))
        {
            return item;
        }
    })
    setNewList(newData)
    }

  return (
    <LoadingSpinner loading = {allProjects?.loading}>
        <div className={styles.all_project_container}>
              <div className={styles.all_project_body}>
                {/* <CustomSelect/> */}
                <div className={styles.header}>
                  <p className={styles.tilte_page}>
                    Tất cả dự án <span>({allProjects?.data.length})</span>
                  </p>
                  <div className={styles.input_container}>
                      <input
                        onChange={(e)=>setTextSearch(e.target.value)}
                        placeholder="Tìm kiếm theo tên..."
                        className={styles.input_field}
                        type="text"
                      />
                      <CiSearch className={styles.icon_search} />
                      <Button 
                          onClick={()=>onSearch(textSearch)}
                          style={{backgroundColor:'#fff'}}
                          variant='outlined'>Tìm kiếm</Button>
                  </div>
                </div>
                <div className={styles.list_project_container}>
                  {newList?.map((item) => (
                    <ProjectSquareItem 
                      percent = {item?.taskQuantity>0&&(parseInt(item?.taskCompleted*100/item?.taskQuantity))}
                      id={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
    </LoadingSpinner>
   
  );
};

export default AllProjectContainer;

import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { CiSearch } from "react-icons/ci";
import ProjectSquareItem from "../../../components/project-square-item/ProjectSquareItem";
import { useDispatch } from "react-redux";
import WorkspaceAction from "../../../../redux/workspaces/WorkspaceAction";
import { useSelector } from "react-redux";

const AllProjectContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: WorkspaceAction.REQUEST_GET_ALL_PROJECTS,
    });
  }, []);
  const { allProjects } = useSelector((state) => ({
    allProjects: state.workspace.allProjects,
  }));
  console.log(allProjects)
  return (
    <div className={styles.all_project_container}>
      <div className={styles.all_project_body}>
        {/* <CustomSelect/> */}
        <div className={styles.header}>
          <p className={styles.tilte_page}>
            Tất cả dự án <span>(10)</span>
          </p>
        </div>
        <div className={styles.filter_container}>
          <div className={styles.search_container}>
            <label className={styles.label}>Tìm kiếm dự án</label>
            <div className={styles.input_container}>
              <input
                placeholder="Tìm kiếm theo tên..."
                className={styles.input_field}
                type="text"
              />
              <CiSearch className={styles.icon_search} />
            </div>
          </div>
          <div className={styles.filter_wrapper}>
            {/* <CustomSelect
              labelText="Trạng thái"
              placeholder="Chọn trạng thái"
              listItems={StatusList}
            />
            <CustomSelect
              placeholder="Chọn vai trò"
              labelText="Vai trò"
              listItems={RoleList}
            /> */}
          </div>
        </div>

        <div className={styles.list_project_container}>
          {allProjects?.data?.map((item) => (
            <ProjectSquareItem 
              percent = {item?.taskQuantity>0&&(item?.taskCompleted*100/item?.taskQuantity)}
              id={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjectContainer;

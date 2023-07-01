import TaskAction from "./TaskAction";

let initialState = {
    allTasks: {
        loading:false,
        data: [],
        isSuccess: false,
    },
    detailTask : {
        loading: false,
        data: {},
    },
    createTask: {
        loading: false,
        isSuccess:false,
        message: ''
    },
    allTasksByMember: {
        loading: false,
        data: []
    },
    upcomingTasks: {
        loading:false,
        data: []
    }
}
const TaskReducer = (state=initialState,action)=> { 
    switch(action.type) {
        
        case TaskAction.REQUEST_GET_UPCOMING_TASKS: 
            {
                return {
                    ...state,
                    upcomingTasks: {
                        ...state.upcomingTasks,
                        loading: true,
                    },
                };
            }
            case TaskAction.SUCCESS_GET_UPCOMING_TASKS: 
            {
                return {
                    ...state,
                    upcomingTasks: {
                        loading: false,
                        data: action.payload.data.data
                    },
                };
            }
            case TaskAction.REQUEST_GET_DETAIL_TASK: 
            {
                return {
                    ...state,
                    detailTask: {
                        ...state.detailTask,
                        loading: true,
                    },
                };
            }
            case TaskAction.SUCCESS_GET_DETAIL_TASK: 
            {
                return {
                    ...state,
                    detailTask: {
                        loading: false,
                        data: action.payload.data.taskItem
                    },
                };
            }
        case TaskAction.REQUEST_CREATE_TASK: 
        {
            return {
                ...state,
                createTask: {
                    ...state.createTask,
                    loading: true,
                },
            };
        }
        case TaskAction.SUCCESS_CREATE_TASK: 
        {
            return {
                ...state,
                createTask: {
                    ...state.createTask,
                    loading: false,
                    isSuccess: false,
                    message:''
                },
            };
        }

        case TaskAction.REQUEST_ASSIGN_TASK_MEMBERS: 
        {
            return {
                ...state,
                assignTaskMember: {
                    ...state.assignTaskMember,
                    loading: true,
                },
            };
        }
        case TaskAction.SUCCESS_ASSIGN_TASK_MEMBERS: 
        {
            return {
                ...state,
                assignTaskMember: {
                    ...state.assignTaskMember,
                    loading: false,
                    message:action.payload.data.message
                },
            };
        }

        case TaskAction.REQUEST_GET_TASKS_BY_MEMBER: 
        {
            return {
                ...state,
                allTasksByMember: {
                    ...state.allTasksByMember,
                    loading: true,
                },
            };
        }
        case TaskAction.SUCCESS_GET_TASKS_BY_MEMBER: 
        {
            const dataTasks = action.payload.data;
            console.log('reducer task',dataTasks)
            return {
                ...state,
                allTasksByMember: {
                    loading: false,
                    data: dataTasks?.data
                },
            };
        }
        default: {
            return state; // Return the current state as the default case
          }
            
    }

}
export default TaskReducer;

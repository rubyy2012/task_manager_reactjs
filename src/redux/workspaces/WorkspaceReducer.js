import WorkspaceAction from "./WorkspaceAction";

let initialState = {
    allProjects: {
        loading:false,
        data: [],
        isSuccess: false,
    },
    detailProject : {
        loading: false,
        isSuccess:false,
        data: [],
        message:''
    },
    
    listCards: {
        loading: false,
        data: [],
    },
    listMembers:{
        loading: false,
        data: [], 
    },
    inviteMember: {
        loading: false,
        message:''
    },
    listMembersWithTask: {
        data:[],
        loading:false
    },
    listLabelsWorkspace: {
        data:[],
        loading:false
    },
    recentlyProjects: {
        data:[],
        loading: false
    }
}
const WorkspaceReducer = (state=initialState,action)=> { 
    switch(action.type) {
        case WorkspaceAction.REQUEST_GET_ALL_PROJECTS: 
        {
            return {
                ...state,
                allProjects: {
                    ...state.allProjects,
                    loading: true,
                    isSuccess: false,
                },
            };
        }
        case WorkspaceAction.SUCCESS_GET_ALL_PROJECTS: 
        {
            const dataObject = action.payload.data;
            return {
                ...state,
                allProjects: {
                    loading: false,
                    isSuccess: dataObject.isSuccess,
                    data: dataObject.data.Workspaces
                },
            };
        }
        
        case WorkspaceAction.REQUEST_GET_RECENTLY_PROJECT: 
        {
            return {
                ...state,
                recentlyProjects: {
                    ...state.recentlyProjects,
                    loading: true,
                    isSuccess: false,
                },
            };
        }
        case WorkspaceAction.SUCCESS_GET_RECENTLY_PROJECT: 
        {
            const dataObject = action.payload.data.Workspaces;
            console.log('data recently',dataObject);
            return {
                ...state,
                recentlyProjects: {
                    loading: false,
                    data: dataObject,
                    isSuccess:true
                },
            };
        }
        case WorkspaceAction.REQUEST_GET_DETAIL_PROJECT: 
        {
            return {
                ...state,
                detailProject: {
                    ...state.detailProject,
                    loading: true,
                },
            };
        }
        case WorkspaceAction.SUCCESS_GET_DETAIL_PROJECT: 
        {
            return {
                ...state,
                detailProject: {
                    loading: false,
                    isSuccess:action.payload.isSuccess,
                    message: action.payload.message,
                    data:action.payload.data.Workspace
                },
            };
        }

        case WorkspaceAction.REQUEST_GET_LIST_CARDS: 
        {
            return {
                ...state,
                listCards: {
                    ...state.listCards,
                    loading: true,
                },
            };
        }
        case WorkspaceAction.SUCCESS_GET_LIST_CARDS: 
        {
            const listData = action.payload.Card;
            return {
                ...state,
                listCards: {
                    ...state.listCards,
                    loading: false,
                    data: listData
                },
            };
        }

        case WorkspaceAction.REQUEST_GET_LIST_MEMBERS: 
        {
            return {
                ...state,
                listMembers: {
                    ...state.listMembers,
                    loading: true,
                },
            };
        }
        case WorkspaceAction.SUCCESS_GET_LIST_MEMBERS: 
        {
            const listData = action.payload.Members;
            return {
                ...state,
                listMembers: {
                    ...state.listMembers,
                    loading: false,
                    data: listData
                },
            };
        }
        case WorkspaceAction.REQUEST_INVITE_MEMBER: 
        {
            return {
                ...state,
                inviteMember: {
                    ...state.inviteMember,
                    loading: true,
                },
            };
        }
        case WorkspaceAction.FAIL_INVITE_MEMBER: 
        {
            console.log('FAIL_INVITE_MEMBER',action.payload)
            return {
                ...state,
                inviteMember: {
                    loading: false,
                    message: action.payload.message
                },
            };
        }
        case WorkspaceAction.REQUEST_GET_LIST_MEMBER_WITH_TASK: 
        {
            return {
                ...state,
                listMembersWithTask: {
                    ...state.listMembersWithTask,
                    loading: true,
                },
            };
        }
        case WorkspaceAction.SUCCESS_GET_LIST_MEMBER_WITH_TASK: 
        {
            return {
                ...state,
                listMembersWithTask: {
                    loading: true,
                    data:action?.payload?.Members
                },
            };
        }

        case WorkspaceAction.REQUEST_GET_LIST_LABELS_WORKSPACE: 
        {
            return {
                ...state,
                listLabelsWorkspace: {
                    ...state.listLabelsWorkspace,
                    loading: true,
                },
            };
        }
        case WorkspaceAction.SUCCESS_GET_LIST_LABELS_WORKSPACE: 
        {
            return {
                ...state,
                listLabelsWorkspace: {
                    loading: false,
                    data:action?.payload?.Labels
                },
            };
        }
        default: {
            return state;
          }
            
    }

}
export default WorkspaceReducer;

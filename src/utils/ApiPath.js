// const prefix = "https://localhost:44384/api/";
// const prefixLocation =`https://provinces.open-api.vn/api`
// export default class ApiPath {
//     static LIST_SUPPLIERS = prefix + 'Supplier';
//     static DETAIL_SUPPLIER = prefix + 'Supplier/';
//     static ADD_SUPPLIER = prefix + 'Supplier';
//     static EDIT_SUPPLIER = prefix + 'Supplier/';
//     static DELETE_SUPPLIER = prefix + 'Supplier/';
//     static GET_TOTAL_PAGES = prefix + 'Supplier/totalPages';

//     static LIST_SUPPLIER_CATEGORIES = prefix + 'SupplierCategory'
//     static GET_SUPPLIER_CATEGORY = prefix + 'SupplierCategory/:id'


//     static GET_PROVINCE_BY_ID = `${prefixLocation}/p/:id`
//     static GET_DISTRICT_BY_ID = `${prefixLocation}/d/:id`
//     static GET_WARD_BY_ID = `${prefixLocation}/w/:id`
//     static getRouteWithId (path, id) {
//         return path.replace(":id", id)
//     }
// }

const prefix = 'https://localhost:7070/'
export default class ApiPath {
    //authen
    static LOGIN = prefix + 'Account/login';
    //workspace
    static GET_ALL_WORKSPACES = prefix + 'api/Workspace/me';
    static EDIT_WORKSPACE = prefix + 'api/Workspace/:id';
    static DELETE_WORKSPACE = prefix + 'api/Workspace/:id';
    static GET_DETAIL_WORKSPACE = prefix +  'api/Workspace/:id';
    static CREATE_WORKSPACE = prefix +  'api/Workspace';
    //task
    static CREATE_TASK = prefix +  'api/TaskItem';
    static GET_DETAIL_TASK = prefix +  'api/TaskItem/:id';
    static EDIT_TASK = prefix + 'api/TaskItem/:id';
    static DELETE_TASK = prefix + 'api/TaskItem/:id';
    static UPLOAD_FILE = prefix + 'api/TaskItem/:id/upload-file';
    static getRouteWithId (path, id) {
        return path.replace(":id", id)
    }
}
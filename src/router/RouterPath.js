const prefix = "/";
export default class RouterPath {
    static CONFIRM_EMAIL = prefix + 'confirm-email';
    static OVERVIEWS = prefix + 'overviews';
    // static LIST_SUPPLIERS = prefix + '';
    // static DETAIL_SUPPLIER = prefix + 'supplier/detail/:id';
    // static ADD_SUPPLIER = prefix + 'supplier/add-new-supplier';
    // static EDIT_SUPPLIER = prefix + 'supplier/edit/:id';
    // static LOGIN = '/login';

    static getRouteWithId (path, id) {
        return path.replace(":id", id)
    }
}
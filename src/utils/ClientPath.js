const prefix = ''
export default class ClientPath {
    //workspace
    static CONFIRM_EMAIL_PAGE = prefix + '/confirm-email'
    static OVERVIEWS_PAGE = prefix + '/overviews';
    static DETAIL_PROJECT = prefix + '/project-page/project/:id';
    //task
    static getRouteWithId (path, id) {
        return path.replace(":id", id)
    }
}
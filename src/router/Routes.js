const prefix = "/";
const RoutePaths = {
    LOGIN : prefix + 'login',
    REGISTER: prefix +'register',
    
    USER : 
    {
         OVERVIEW : prefix + 'user/overview',
         MY_PROJECT : prefix + 'user/my-projects',
         SHARED_PROJECT : prefix + 'user/shared-projects',
         COMPLETED_PROJECT : prefix + 'user/completed-projects',
         MY_PLANS : prefix + 'user/my-plans',
         MESSAGES: prefix + 'user/messages',
    },
    ADMIN : {

    }
}
export default RoutePaths;
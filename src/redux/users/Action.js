import { createAction } from '@reduxjs/toolkit'
import { USER_ACTION } from '../constants/UserConstants'
import { REQUEST } from '../constants/TypeConstants'
export const loginAction = createAction(REQUEST(USER_ACTION.LOGIN))
export const logoutAction = createAction(REQUEST(USER_ACTION.LOGOUT))
export const registerAction = createAction(REQUEST(USER_ACTION.REGISTER))

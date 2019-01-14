import { Action } from "@ngrx/store";
import { Message, User, Settings } from "../models";

export const LOGIN = "[User] Login";
export const LOGIN_COMPLETE = "[User] Login Complete";
export const LOGIN_FAILED = "[User] Login Failed";

export const LOGOUT = "[User] Logout";
export const LOGOUT_COMPLETE = "[User] Logout Complete";

export const AD_LOGIN = "[User] Active Directory Login";
export const AD_LOGIN_COMPLETE = "[User] Active Directory Login Complete";

export const RETRIEVE_USER = "[User] Retrieve User";
export const RETRIEVE_USER_COMPLETE = "[User] Retrieve User Complete";
export const RETRIEVE_USER_FAILED = "[User] Retrieve User Failed";

export const RETRIEVE_USER_IDENTITY = "[UserIdentity] Retrieve User Identity";
export const RETRIEVE_USER_IDENTITY_COMPLETE =
  "[UserIdentity] Retrieve User Identity Complete";
export const RETRIEVE_USER_IDENTITY_FAILED =
  "[UserIdentity] Retrieve User Identity Failed";

export const ADD_GROUPS = "[User] Add Groups";
export const ADD_GROUPS_FAILED = "[User] Add Groups Failed";

export const ACCESS_USER_EMAIL = "[User] Access User Email";
export const ACCESS_USER_EMAIL_COMPLETE = "[User] Access User Email Complete";
export const ACCESS_USER_EMAIL_FAILED = "[User] Access User Email Failed";

export const SHOW_MESSAGE = "[User] Message Show";
export const CLEAR_MESSAGE = "[User] Message Clear";
export const SAVE_SETTINGS = "[User] Settings Save";

export const ADD_COLUMN = "[User] Add Column";
export const ADD_COLUMN_COMPLETE = "[User] Add Column Complete";
export const ADD_COLUMN_FAILED = "[User] Add Column Failed";

export const DELETE_COLUMN = "[User] Delete Column";
export const DELETE_COLUMN_COMPLETE = "[User] Delete Column Complete";
export const DELETE_COLUMN_FAILED = "[User] Delete Column Failed";

export class LoginAction implements Action {
  readonly type = LOGIN;
  constructor(
    public form: { username: string; password: string; rememberMe: boolean }
  ) {}
}

export class ActiveDirLoginAction implements Action {
  readonly type = AD_LOGIN;
  constructor(
    public form: { username: string; password: string; rememberMe: boolean }
  ) {}
}

export class LoginCompleteAction implements Action {
  readonly type = LOGIN_COMPLETE;
  constructor(readonly user: User, readonly accountType: string) {}
}

export class LoginFailedAction implements Action {
  readonly type = LOGIN_FAILED;
  constructor() {}
}

export class LogoutAction implements Action {
  readonly type = LOGOUT;
}

export class LogoutCompleteAction implements Action {
  readonly type = LOGOUT_COMPLETE;
}

export class RetrieveUserAction implements Action {
  readonly type = RETRIEVE_USER;
}

export class RetrieveUserCompleteAction implements Action {
  readonly type = RETRIEVE_USER_COMPLETE;
  constructor(readonly user: User) {}
}

export class RetrieveUserFailedAction implements Action {
  readonly type = RETRIEVE_USER_FAILED;
  constructor(readonly error: Error) {}
}

export class DeleteColumn implements Action {
  readonly type = DELETE_COLUMN;
  constructor(readonly columnName: string) {}
}

export class DeleteColumnComplete implements Action {
  readonly type = DELETE_COLUMN_COMPLETE;
  constructor(readonly columnName: string) {}
}
/*
export class RetrieveUserIdentityAction implements Action {
  readonly type = RETRIEVE_USER_IDENTITY;
}

export class RetrieveUserIdentityCompleteAction implements Action {
  readonly type = RETRIEVE_USER_IDENTITY_COMPLETE;
  constructor(readonly userIdentity: UserIdentity) {}
}

export class RetrieveUserIdentityFailedAction implements Action {
  readonly type = RETRIEVE_USER_IDENTITY_FAILED;
  constructor(readonly error: Error) {}
}

export class AccessUserEmailAction implements Action {
  readonly type = ACCESS_USER_EMAIL;
  constructor(readonly userId: string) {}
}

export class AccessUserEmailCompleteAction implements Action {
  readonly type = ACCESS_USER_EMAIL_COMPLETE;
  constructor(readonly email: string) {}
}

export class AccessUserEmailFailedAction implements Action {
  readonly type = ACCESS_USER_EMAIL_FAILED;
  constructor(readonly error: Error) {}
}
*/

export class ShowMessageAction implements Action {
  readonly type = SHOW_MESSAGE;
  constructor(readonly message: Message) {}
}

export class ClearMessageAction implements Action {
  readonly type = CLEAR_MESSAGE;
}

export class SaveSettingsAction implements Action {
  readonly type = SAVE_SETTINGS;
  constructor(readonly values: Settings) {}
}

export type Actions =
  | LoginAction
  | LogoutCompleteAction
  | LoginFailedAction
  | LogoutAction
  | LogoutCompleteAction
  | RetrieveUserAction
  | RetrieveUserCompleteAction
  | RetrieveUserFailedAction
  // | RetrieveUserIdentityAction
  // | RetrieveUserIdentityCompleteAction
  // | RetrieveUserIdentityFailedAction
  | ActiveDirLoginAction
  // | AccessUserEmailAction
  // | AccessUserEmailCompleteAction
  // | AccessUserEmailFailedAction
  | ShowMessageAction
  | ClearMessageAction
  | SaveSettingsAction;
// AddGroupsAction

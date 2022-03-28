export type UserInfo = IUserInfo | nullDefined

export interface UserState {
  userInfo: UserInfo
  token: string | nullDefined
}

export interface IUserInfo {
  userId?: string | nullDefined
  username?: string | nullDefined
  password?: string | nullDefined
  userRoles?: UserRole[] | nullDefined
  resourceBeans?: ResourceBean[] | nullDefined
}

export interface ResourceBean {
  resourceName?: string | nullDefined
  resourceId?: string | nullDefined
  resourceType?: string | nullDefined
}

export interface UserRole {
  roleId?: string | nullDefined
  roleName?: string | nullDefined
  resourceBeans?: ResourceBean[] | nullDefined
}

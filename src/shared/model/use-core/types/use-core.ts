export interface State {
  userToken: string | null;
  userRoleId: number | null;
}

export interface Actions {
  setUserToken: (token: string | null) => void;
  setUserRoleId: (roleId: number | null) => void;
  reset: () => void;
}

export interface State {
  userToken: string | null;
  userRoleId: number | null;
  sidebarOpen: boolean;
}

export interface Actions {
  setUserToken: (token: string | null) => void;
  setUserRoleId: (roleId: number | null) => void;
  setSidebarOpen: (open: boolean) => void;
  reset: () => void;
}

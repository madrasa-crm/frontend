export interface State {
  userToken: string | null;
  sidebarOpen: boolean;
}

export interface Actions {
  setUserToken: (token: string | null) => void;
  setSidebarOpen: (open: boolean) => void;
  reset: () => void;
}

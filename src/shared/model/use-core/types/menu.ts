import type { ReactNode } from "@tanstack/react-router";

export interface Submenu {
  href: string;
  label: string;
  active: boolean;
  icon: ReactNode;
}

export interface Menu {
  href: string;
  label: string;
  active: boolean;
  icon: ReactNode;
  submenus: Submenu[];
}

export interface Group {
  groupLabel: string;
  menus: Menu[];
}

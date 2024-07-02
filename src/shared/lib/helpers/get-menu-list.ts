import {
  Bookmark,
  Group as GroupIcon,
  KeySquare,
  LayoutGrid,
  LineChart,
  Lock,
  User2,
  Users,
  UsersRound,
} from "lucide-react";

// types
import type { Group } from "@/shared/model/use-core/types/menu";

export function getMenuList(pathname: string): Group[] {
  return [
    // {
    //   groupLabel: "",
    //   menus: [
    //     {
    //       href: "/cabinet",
    //       label: "Дашборды",
    //       active: pathname.includes("/cabinet"),
    //       icon: LayoutGrid,
    //       submenus: [],
    //     },
    //   ],
    // },
    {
      groupLabel: "",
      menus: [
        {
          href: "/cabinet/dashboard",
          label: "Дашборды",
          active: pathname.includes("/cabinet/dashboard"),
          icon: LayoutGrid,
          submenus: [],
        },
        {
          href: "/cabinet/users",
          label: "Пользователи",
          active: pathname.includes("/cabinet/users"),
          icon: UsersRound,
          submenus: [
            {
              href: "/cabinet/teachers",
              label: "Учителя",
              active: pathname === "/cabinet/teachers",
              icon: User2,
            },
            {
              href: "/cabinet/admins",
              label: "Админы",
              active: pathname === "/cabinet/admins",
              icon: KeySquare,
            },
            {
              href: "/cabinet/roles",
              label: "Роли и разрешении",
              active: pathname === "/cabinet/roles",
              icon: Lock,
            },
          ],
        },
        {
          href: "/cabinet/groups",
          label: "Группы",
          active: pathname.includes("/groups"),
          icon: GroupIcon,
          submenus: [],
        },
        {
          href: "/cabinet/students",
          label: "Студенты",
          active: pathname.includes("/students"),
          icon: Users,
          submenus: [],
        },
        {
          href: "/cabinet/subjects",
          label: "Предметы",
          active: pathname.includes("/subjects"),
          icon: Bookmark,
          submenus: [],
        },
        {
          href: "/cabinet/attendance",
          label: "Графики",
          active: pathname.includes("/attendance"),
          icon: LineChart,
          submenus: [],
        },
      ],
    },
    // {
    //   groupLabel: "Settings",
    //   menus: [
    //     {
    //       href: "/users",
    //       label: "Users",
    //       active: pathname.includes("/users"),
    //       icon: Users,
    //       submenus: [],
    //     },
    //     {
    //       href: "/account",
    //       label: "Account",
    //       active: pathname.includes("/account"),
    //       icon: Settings,
    //       submenus: [],
    //     },
    //   ],
    // },
  ];
}

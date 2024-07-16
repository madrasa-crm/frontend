import type { ComponentProps } from "react";

// components
import { CreateNewTeacher } from "@/features/teacher";
import { BaseCreatePage } from "@/widgets/layout/base-create-page";

const NewTeacher = () => {
  const config: ComponentProps<typeof BaseCreatePage>["config"] = [
    {
      title: "Список",
      href: "/cabinet/teachers",
      isCurrent: false,
    },
    {
      title: "Создание учителя",
      href: "/cabinet/teachers/new",
      isCurrent: true,
    },
  ];

  return (
    <BaseCreatePage
      config={config}
      pageTitle="Создание"
      pageDescription="Создания нового учителя"
    >
      <CreateNewTeacher />
    </BaseCreatePage>
  );
};

export default NewTeacher;

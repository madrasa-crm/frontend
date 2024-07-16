import { Link } from "@tanstack/react-router";

// components
import { TeacherTable } from "@/entities/teacher";
import { buttonVariants } from "@/shared/ui/button";
import { TypographyH2, TypographyP } from "@/shared/ui/typography";
import { CreateNewTeacherModal } from "@/widgets/teacher/create-new";

const Teacher = () => {
  return (
    <section className="space-y-6">
      <div className="flex gap-6 items-center justify-between">
        <div>
          <TypographyH2>Учителя</TypographyH2>
          <TypographyP>Просмотр и создания данных учителей</TypographyP>
        </div>
        <Link className={buttonVariants({})} to="/cabinet/teachers/new">
          Новый учитель
        </Link>
      </div>
      <TeacherTable />
      <CreateNewTeacherModal />
    </section>
  );
};

export default Teacher;

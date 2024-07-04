// store
import { useTeacher } from "@/entities/teacher";

// components
import { TeacherTable } from "@/entities/teacher";
import { Button } from "@/shared/ui/button";
import { TypographyH2, TypographyP } from "@/shared/ui/typography";
import { CreateNewTeacherModal } from "@/widgets/teacher/create-new";

const Teacher = () => {
  const setIsOpenModal = useTeacher((state) => state.setIsOpenModal);
  return (
    <section className="space-y-6">
      <div className="flex gap-6 items-center justify-between">
        <div>
          <TypographyH2>Учителя</TypographyH2>
          <TypographyP>Просмотр и создания данных учителей</TypographyP>
        </div>
        <Button onClick={() => setIsOpenModal(true)}>Новый учитель</Button>
      </div>
      <TeacherTable />
      <CreateNewTeacherModal />
    </section>
  );
};

export default Teacher;

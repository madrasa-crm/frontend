// store
import { useStudent } from "@/entities/student";

// components
import { StudentTable } from "@/entities/student";
import { Button } from "@/shared/ui/button";
import { TypographyH2, TypographyP } from "@/shared/ui/typography";

const Student = () => {
  const setIsOpenModal = useStudent((state) => state.setIsOpenModal);
  return (
    <section className="space-y-6">
      <div className="flex gap-6 items-center justify-between">
        <div>
          <TypographyH2>Студенты</TypographyH2>
          <TypographyP>Просмотр и создания данных студентов</TypographyP>
        </div>
        <Button onClick={() => setIsOpenModal(true)}>Новый студент</Button>
      </div>
      <StudentTable />
    </section>
  );
};

export default Student;

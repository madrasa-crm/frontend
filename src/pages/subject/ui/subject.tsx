import { SubjectTable, useSubject } from "@/entities/subject";
import { Button } from "@/shared/ui/button";
import { TypographyH2, TypographyP } from "@/shared/ui/typography";
import { CreateNewModal } from "@/widgets/subject/create-new";

const Subject = () => {
  const { setIsModalOpen } = useSubject();

  return (
    <section className="space-y-6">
      <div className="flex gap-6 items-center justify-between">
        <div>
          <TypographyH2>Предметы</TypographyH2>
          <TypographyP>Новый предмет</TypographyP>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>Новый предмет</Button>
      </div>
      <SubjectTable />
      <CreateNewModal />
    </section>
  );
};

export default Subject;

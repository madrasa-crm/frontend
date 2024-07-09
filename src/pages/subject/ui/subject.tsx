import { SubjectTable } from "@/entities/subject";
import { Button } from "@/shared/ui/button";
import { TypographyH2, TypographyP } from "@/shared/ui/typography";

const Subject = () => {
  return (
    <section className="space-y-6">
      <div className="flex gap-6 items-center justify-between">
        <div>
          <TypographyH2>Предметы</TypographyH2>
          <TypographyP>Новый предмет</TypographyP>
        </div>
        <Button>Новый предмет</Button>
      </div>
      <SubjectTable />
      {/* <CreateNewRoleModal /> */}
    </section>
  );
};

export default Subject;

import { GroupTable } from "@/entities/group";
import { useGroup } from "@/entities/group";
import { Button } from "@/shared/ui/button";
import { TypographyH2, TypographyP } from "@/shared/ui/typography";
import { CreateGroupModal } from "@/widgets/group/create-new";

const Group = () => {
  const { setIsGroupModalOpen } = useGroup();

  return (
    <section className="space-y-6">
      <div className="flex gap-6 items-center justify-between">
        <div>
          <TypographyH2>Группы</TypographyH2>
          <TypographyP>Создания и редактирования групп</TypographyP>
        </div>
        <Button onClick={() => setIsGroupModalOpen(true)}>Новая группа</Button>
      </div>
      <GroupTable />
      <CreateGroupModal />
    </section>
  );
};

export default Group;

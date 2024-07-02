// store
import { useRole } from "@/entities/role";

// components
import { RoleTable } from "@/entities/role";
import { Button } from "@/shared/ui/button";
import { TypographyH2, TypographyP } from "@/shared/ui/typography";
import { CreateNewRoleModal } from "@/widgets/role/create-new-role";

const Role = () => {
  const setIsOpenModal = useRole((state) => state.setIsOpenModal);
  return (
    <section className="space-y-6">
      <div className="flex gap-6 items-center justify-between">
        <div>
          <TypographyH2>Роли и разрешении</TypographyH2>
          <TypographyP>Просмотр и создания данных админов</TypographyP>
        </div>
        <Button onClick={() => setIsOpenModal(true)}>Новый роль</Button>
      </div>
      <RoleTable />
      <CreateNewRoleModal />
    </section>
  );
};

export default Role;

// store
import { useAdmin } from "@/entities/admin";

// components
import { AdminTable } from "@/entities/admin";
import { Button } from "@/shared/ui/button";
import { TypographyH2, TypographyP } from "@/shared/ui/typography";
import { CreateNewAdminModal } from "@/widgets/admin/create-new";

const Admin = () => {
  const setIsOpenModal = useAdmin((state) => state.setIsOpenModal);
  return (
    <section className="space-y-6">
      <div className="flex gap-6 items-center justify-between">
        <div>
          <TypographyH2>Админы</TypographyH2>
          <TypographyP>Просмотр и создания данных админов</TypographyP>
        </div>
        <Button onClick={() => setIsOpenModal(true)}>Новый админ</Button>
      </div>
      <AdminTable />
      <CreateNewAdminModal />
    </section>
  );
};

export default Admin;

import type { ComponentProps, ReactNode } from "react";

// components
import { BaseBreadcrumb } from "@/shared/ui/breadcrumb";
import { TypographyH2, TypographyP } from "@/shared/ui/typography";

export const BaseCreatePage = ({
  pageTitle,
  pageDescription,
  config,
  children,
}: {
  pageTitle: string;
  config: ComponentProps<typeof BaseBreadcrumb>["config"];
  pageDescription?: string;
  children?: ReactNode;
}) => {
  return (
    <section>
      <div className="space-y-6">
        <BaseBreadcrumb config={config} />
        <div>
          <TypographyH2>{pageTitle}</TypographyH2>
          {pageDescription && <TypographyP>{pageDescription}</TypographyP>}
        </div>
        {children}
      </div>
    </section>
  );
};

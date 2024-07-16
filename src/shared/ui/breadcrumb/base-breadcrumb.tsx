import { Link, type LinkProps } from "@tanstack/react-router";

// components
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./breadcrumb";

export const BaseBreadcrumb = ({
  config,
}: {
  config: {
    title: string;
    href: LinkProps["to"];
    isCurrent: boolean;
  }[];
}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {config.map(({ title, href, isCurrent }) => (
          <BreadcrumbItem key={title}>
            <Link
              to={href}
              className={
                isCurrent ? "text-foreground" : "text-muted-foreground"
              }
            >
              {title}
            </Link>
            {!isCurrent && <BreadcrumbSeparator />}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

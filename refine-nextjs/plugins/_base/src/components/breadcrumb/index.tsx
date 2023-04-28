import { useBreadcrumb } from "@refinedev/core";
import Link from "next/link";

export const Breadcrumb = () => {
    const { breadcrumbs } = useBreadcrumb();

    return (
        <ul className="breadcrumb">
            {breadcrumbs.map((breadcrumb) => {
                return (
                    <li key={`breadcrumb-${breadcrumb.label}`}>
                        {breadcrumb.href ? (
                            <Link href={breadcrumb.href}>
                                {breadcrumb.label}
                            </Link>
                        ) : (
                            <span>{breadcrumb.label}</span>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

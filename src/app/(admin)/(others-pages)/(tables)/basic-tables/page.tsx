import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/BasicTableOne";
import LinkNext from "@/components/ui/link/LinkNext";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Basic Table | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Table  page for TailAdmin  Tailwind CSS Admin Dashboard Template",
  // other metadata
};

const SubComponent = () => {
  return (
    <LinkNext href="/form-elements" size="sm">
      Create User
    </LinkNext>
  );
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Users" />
      <div className="space-y-6">
        <ComponentCard title="Users List" subComponent={<SubComponent />}>
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}

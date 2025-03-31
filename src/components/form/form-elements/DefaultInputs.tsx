"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import { ChevronDownIcon } from "@/icons";

type FormData = {
  id: number;
  name: string;
  role: string;
  projectName: string;
  status: string;
  salary: number;
};

export default function DefaultInputs() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
  };

  const optionStatus = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "pending", label: "Pending" },
    { value: "cancel", label: "Cancel" },
  ];

  return (
    <ComponentCard title="Create User">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label>Complete Name</Label>
          <Input
            type="text"
            placeholder="John Doe"
            register={register}
            name="name"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Label>Role</Label>
          <Input
            type="text"
            placeholder="Software Engineer"
            register={register}
            name="role"
          />
          {errors.role && (
            <p className="text-sm text-red-500">{errors.role.message}</p>
          )}
        </div>
        <div>
          <Label>Project Name</Label>
          <Input
            type="text"
            placeholder="UManizales"
            register={register}
            name="projectName"
          />
          {errors.projectName && (
            <p className="text-sm text-red-500">{errors.projectName.message}</p>
          )}
        </div>
        <div>
          <Label>Status</Label>
          <div className="relative">
            <Select
              name="status"
              options={optionStatus}
              placeholder="Select an option"
              className="dark:bg-dark-900"
              register={register}
            />
            <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 dark:text-gray-400">
              <ChevronDownIcon />
            </span>
          </div>
          {errors.status && (
            <p className="text-sm text-red-500">{errors.status.message}</p>
          )}
        </div>
        <div>
          <Label>Salary</Label>
          <Input
            type="number"
            placeholder="Software Engineer"
            register={register}
            name="salary"
          />
          {errors.role && (
            <p className="text-sm text-red-500">{errors.role.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </ComponentCard>
  );
}

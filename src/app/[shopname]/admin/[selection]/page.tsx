import React from "react";
import AdminAside from "../admin-aside";
import ViewSelected from "./view-selected";

export default function page({ params }) {
  const { selection } = params;
  return (
    <div className="flex gap-12">
      <AdminAside className="basis-[20%]" />
      <ViewSelected item={selection} className="basis-[80%]" />
    </div>
  );
}

"use client";
import { log } from "next/dist/server/typescript/utils";
import { useParams ,usePathname} from "next/navigation";
import React from "react";

const IdPage = () => {
  const params = useParams();
  const path = usePathname();
  console.log(params);

  const { tag, id } = params;

  console.log(id,tag);

  return <div>{path}</div>;
};

export default IdPage;

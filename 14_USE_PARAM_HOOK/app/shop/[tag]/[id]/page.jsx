"use client";
import { log } from "next/dist/server/typescript/utils";
import { useParams } from "next/navigation";
import React from "react";

const IdPage = () => {
  const params = useParams();
  console.log(params);

  const { tag, id } = params;

  console.log(id);

  return <div>IdPage</div>;
};

export default IdPage;

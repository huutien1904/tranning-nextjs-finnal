"use_client";
import envConfig from "@/config";
import React, { useEffect } from "react";

export default function Client() {
  useEffect(() => {
    console.log({ envConfig });
  }, []);
  return <div></div>;
}

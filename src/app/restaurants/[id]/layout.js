"use client";

import { Restaurant } from "@/components/Restaurant";
import { useParams } from "next/navigation";

export default function Layout({ children }) {
  const { id } = useParams();

  return <Restaurant id={id}>{children}</Restaurant>;
}

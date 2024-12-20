"use client";

import { Restaurant } from "@/components/Restaurant";

export default async function Layout({ params, children }) {
  const { id } = await params;

  return <Restaurant id={id}>{children}</Restaurant>;
}

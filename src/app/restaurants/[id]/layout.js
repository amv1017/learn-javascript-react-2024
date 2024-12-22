import { RestaurantWrapper } from "@/components/RestaurantWrapper";

export default async function Layout({ params, children }) {
  const { id } = await params;

  return <RestaurantWrapper id={id}>{children}</RestaurantWrapper>;
}

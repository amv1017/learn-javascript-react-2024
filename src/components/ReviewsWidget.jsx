import { Reviews } from "./Reviews";

const ReviewsWidget = async ({ params }) => {
  const { id } = await params;

  return <Reviews id={id} />;
};

export { ReviewsWidget };

import { ReviewType } from "@/utils/types/review";
import ImgPlaceholder from "../../../public/img/placeholder.jpg";


const reviews: ReviewType[] = [
    {
      name: "John Doe",
      feedback: "Jianzin's FDAS installation exceeded our expectations. Their team was professional and knowledgeable.",
      stars: 5,
      image: ImgPlaceholder,
    },
    {
      name: "Jane Smith",
      feedback: "The solar street lights they installed in our municipality have been flawless. Great service!",
      stars: 4.5,
      image: ImgPlaceholder,
    },
    {
      name: "Mark Johnson",
      feedback: "Our building is now fully protected with their fire safety systems. Highly recommended!",
      stars: 5,
      image: ImgPlaceholder,
    },
  ];

  export { reviews };
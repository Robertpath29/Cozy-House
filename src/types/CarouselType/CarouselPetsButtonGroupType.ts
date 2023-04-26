import { ButtonGroupProps } from "react-multi-carousel";



type CarouselPetsButtonGroupType = ButtonGroupProps & {
    next: () => void;
    previous: () => void;
  };

  export default CarouselPetsButtonGroupType;
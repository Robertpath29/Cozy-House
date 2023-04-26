import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import CarouselPetsButtonGroupType from "../../../types/CarouselType/CarouselPetsButtonGroupType";
import CarouselBtn from "./CarouselBtn";



const CarouselPetsButtonGroup: React.FC<CarouselPetsButtonGroupType> = ({ next, previous }) => {
    return (
        <div>
            <CarouselBtn className="custom-button custom-button-previous" onClick={previous}><FaLongArrowAltLeft /></CarouselBtn>

            <CarouselBtn className="custom-button custom-button-next" onClick={next}><FaLongArrowAltRight /></CarouselBtn>
        </div>
    );
};

export default CarouselPetsButtonGroup;
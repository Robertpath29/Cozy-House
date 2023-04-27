import React from 'react';
import CozyHouseHelpStyle from '../../styles/cozyHouseHelp/cozyHouseHelp.style';
import IconsGroupStyle from '../../styles/cozyHouseHelp/iconsGroup.style';
import Icons from './Icons';
import Container from '../../styles/container/container.style';


const CozyHouseHelp = () => {
    return (
        <Container>
        <CozyHouseHelpStyle>
            <h1>Допомога, яку надає наш притулок</h1>
            <IconsGroupStyle>
                <Icons imagePath='./img/HelpIcons/cat-food.webp' name='Корм для тварин' />
                <Icons imagePath='./img/HelpIcons/ambulance.webp' name='Транспорт' />
                <Icons imagePath='./img/HelpIcons/ball.webp' name='Іграшки' />
                <Icons imagePath='./img/HelpIcons/bowl.webp' name='Миски та чашки' />
                <Icons imagePath='./img/HelpIcons/shampoo.webp' name='Шампуні' />
                <Icons imagePath='./img/HelpIcons/pills.webp' name='Вітаміни' />
                <Icons imagePath='./img/HelpIcons/syringe.webp' name='Препарати' />
                <Icons imagePath='./img/HelpIcons/leash.webp' name='Нашийники / повідці' />
                <Icons imagePath='./img/HelpIcons/cat.webp' name='Спальне місце' />
            </IconsGroupStyle>
        </CozyHouseHelpStyle>
        </Container>
    );
};

export default CozyHouseHelp;
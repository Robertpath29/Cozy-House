import React from 'react';
import AboutStyle from '../../styles/about/About.style';
import Container from '../../styles/container/container.style';






const About = () => {
    return (
        <AboutStyle>
            <Container justify='center'>
                <img src="./img/Pets.webp" alt="Pets" />
                <aside>
                    <h1>Про притулок “Затишний будинок”</h1>
                    <p>Перш ніж купувати собаку чи кота – зайдіть до нас. У притулку знайдуться друзі будь-кому до душі – великі, маленькі, охоронці, компаньйони, лінивці та непосидьки.
                        <br />
                        <br />
                        Коли ми беремо тваринку з притулку, то рятуємо одразу трьох: тваринку, яку забрали додому, бездомну тварину з вулиці, що займе звільнене місце у притулку, і, звичайно, Людину в собі. Не купуй – прихисти, адже справжня дружба не продається!</p>
                </aside>
            </Container>
        </AboutStyle>
    );
};

export default About;
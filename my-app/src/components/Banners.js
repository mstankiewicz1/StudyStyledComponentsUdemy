import styled from 'styled-components';

const screen = {
    phone: (...args) => {
        const styles = args;
        console.log(styles);
        return `@media (min-width: 576px) {
            ${styles};
        }`
    }
};

export const Banner = styled.div`
    background-color: red;
    h1 {
        color: white;
        text-transform: uppercase;
    }
    ${screen.phone`background-color: blue; h1 {
        color: yellow;
    }`}
    /* @media (min-width: 676px) {
        background-color: blue;
        h1 {
            color: yellow;
        }
    } */
`;

export const SecondBanner = styled.div`
    background-color: blue;
    h1 {
        color: red;
        text-transform: uppercase;
    }
    ${screen.phone`background-color: green; h1 {
        color: blue;
    }`}
    /* @media (min-width: 576px) {
        background-color: green;
        h1 {
            color: blue;
        }
    } */
`;
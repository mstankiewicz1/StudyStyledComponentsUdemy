import styled from 'styled-components';

const color = 'yellow';
const padding = "padding: 1rem";
const margin = "margin: 1rem";

const border = (width='3px') => {
    return `border: ${width} solid red`;
};

export const Button = styled.button`
    ${padding};
    ${margin};
    color: red;
    background-color: blue;
    text-transform: uppercase;
    ${border("10px")};
`;

export const SecondButton = styled.button`
    color: ${color};
    background-color: var(--primaryColor);
    text-transform: uppercase;
    ${padding};
    ${margin};
    ${border()};
`;
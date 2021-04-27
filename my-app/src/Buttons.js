import styled from 'styled-components';

const color = 'yellow';

export const Button = styled.button`
color: red;
background-color: blue;
text-transform: uppercase;
`;

export const SecondButton = styled.button`
color: ${color};
background-color: var(--primaryColor);
text-transform: uppercase;
`;
import styled from 'styled-components';

export const PropsButton = styled.button`
    color: ${props => (props.big ? "3rem" : "1rem")};
    padding: 1rem;
    font-size: 2rem;
    margin: 1rem;
`;

export const DangerButton = styled(PropsButton)`
    background-color: red;
`;

export const SuccessButton = styled(PropsButton)`
    background-color: green;
`;

// export const BigButton = styled(PropsButton)`
//     margin: 0.5rem;
//     text-transform: capitalize;
//     font-size: 3rem;
// `;

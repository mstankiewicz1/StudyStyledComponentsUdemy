import React from 'react';
import styled from 'styled-components';

import Title from './Title';

const Navbar = ({children}) => {
    return (
        <NavbarWrapper>
            <Title title="company name"/>
            {children}
        </NavbarWrapper>
    );
};

const NavbarWrapper = styled.nav`
    background-color: ${props => props.theme.primaryColor};
    ${(props) => `color: ${props.theme.secondaryColor}`};
    padding: 1rem;
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
`;

export default Navbar;

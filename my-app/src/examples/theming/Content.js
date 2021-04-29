import React from 'react';
import styled from 'styled-components';

const Content = ({className}) => {

    return (
        <section className={className}>
            <h3>section title</h3>
            <p>
                lorem ipsum
            </p>
        </section>
    )
};

export default styled(Content)`
    text-transform: capitalize;
    padding: 2rem;
    ${(props) => `background-color:${props.theme.secondaryColor}`};
    ${(props) => `color:${props.theme.primaryColor}`};
`;

import React from 'react';
import styled from 'styled-components';

const Title = ({className, title}) => {

    return (
        <div className={className}>
            {title}
        </div>
    )
}

export default styled(Title)`
    ${(props) =>`color:${props.theme.secondaryColor}`}
`;

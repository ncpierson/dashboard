import React from 'react';
import styled from 'styled-components';

const StyledWidget = styled.li`
  margin-bottom: 0.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Widget = props => {
  const shortlink = `${props.slug}.nick.exposed`;
  const url = `http://${shortlink}`;

  return (
    <StyledWidget>
      <span role="img">{props.icon}</span> <a href={url}>{shortlink}</a>
    </StyledWidget>
  );
};

export default Widget;

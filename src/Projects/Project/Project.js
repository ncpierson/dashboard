import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.li`
  margin-bottom: 0.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Project = props => {
  const { url } = props;

  return (
    <StyledProject>
      <a href={`https://${url}`}>{url}</a> – {props.children}
    </StyledProject>
  );
};

export default Project;

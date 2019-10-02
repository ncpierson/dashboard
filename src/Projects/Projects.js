import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Fashionscape = (
  <Project key="fashionscape" url="scape.fashion">
    find your runescape outfit
  </Project>
);

const SoundOfText = (
  <Project key="soundoftext" url="soundoftext.com">
    download audio clips for language learning
  </Project>
);

const Projects = () => {
  return <StyledList>{[Fashionscape, SoundOfText]}</StyledList>;
};

export default Projects;

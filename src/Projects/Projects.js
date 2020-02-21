import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Hearling = (
  <Project key="hearling" url="hearling.com">
    text-to-speech for everyone (& my first business)
  </Project>
);

const Fashionscape = (
  <Project key="fashionscape" url="scape.fashion">
    find your favorite runescape outfit
  </Project>
);

const SoundOfText = (
  <Project key="soundoftext" url="soundoftext.com">
    download audio clips for language learning
  </Project>
);

const Projects = () => {
  return <StyledList>{[Fashionscape, Hearling, SoundOfText]}</StyledList>;
};

export default Projects;

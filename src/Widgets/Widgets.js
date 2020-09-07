import React from 'react';
import styled from 'styled-components';
import Widget from './Widget';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Blog = <Widget icon="📝" slug="blog" key="blog" />;
const Books = <Widget icon="📚" slug="books" key="books" />;
const Budget = <Widget icon="💰" slug="budget" key="budget" />;
const Github = <Widget icon="👨‍💻" slug="github" key="github" />;
const Resume = <Widget icon="📜" slug="resume" key="resume" />;
const YouTube = <Widget icon="🎬" slug="youtube" key="youtube" />;

const Widgets = () => {
  return (
    <StyledList>{[Blog, Books, Budget, Github, Resume, YouTube]}</StyledList>
  );
};

export default Widgets;

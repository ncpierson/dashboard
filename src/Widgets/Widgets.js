import React from 'react';
import styled from 'styled-components';
import Widget from './Widget';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Blog = <Widget icon="📝" slug="blog" />;
const Budget = <Widget icon="💰" slug="budget" />;
const Goals = <Widget icon="🥇" slug="goals" />;
const Portfolio = <Widget icon="📁" slug="portfolio" />;
const Resume = <Widget icon="📜" slug="resume" />;
const Schedule = <Widget icon="🕰️" slug="schedule" />;
const Todo = <Widget icon="☑️" slug="todo" />;

const Widgets = () => {
  return (
    <StyledList>
      {[Blog, Budget, Goals, Portfolio, Resume, Schedule, Todo]}
    </StyledList>
  );
};

export default Widgets;

import React from 'react';
import styled from 'styled-components';
import Widget from './Widget';

const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Blog = <Widget icon="📝" slug="blog" key="blog" />;
const Budget = <Widget icon="💰" slug="budget" key="budget" />;
const Goals = <Widget icon="🥇" slug="goals" key="goals" />;
const Portfolio = <Widget icon="📁" slug="portfolio" key="portfolio" />;
const Resume = <Widget icon="📜" slug="resume" key="resume" />;
const Schedule = <Widget icon="🕰️" slug="schedule" key="schedule" />;
const Todo = <Widget icon="☑️" slug="todo" key="todo" />;

const Widgets = () => {
  return (
    <StyledList>
      {[Blog, Budget, Goals, Portfolio, Resume, Schedule, Todo]}
    </StyledList>
  );
};

export default Widgets;

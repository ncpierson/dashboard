import React from 'react';
import Widget from './Widget';

const Blog = (
  <Widget icon="notes" name="Blog" url="https://blog.nick.exposed" />
);

const Budget = (
  <Widget icon="border-all" name="Budget" url="http://budget.nick.exposed" />
);

const Goals = (
  <Widget icon="list" name="Goals" url="http://goals.nick.exposed" />
);

const Widgets = () => {
  return (
    <section id="widgets">
      {Blog}
      {Budget}
      {Goals}
    </section>
  );
};

export default Widgets;

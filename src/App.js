import React from 'react';
import styled from 'styled-components';
import Projects from './Projects';
import Widgets from './Widgets';

const Main = styled.main`
  line-height: 1.5;
  margin: 0 auto;
  max-width: 400px;
  padding: 2rem 1.25rem;

  @media (min-width: 768px) {
    padding-bottom: 4rem;
    padding-top: 4rem;
  }
`;

const Section = styled.section`
  margin-top: 1rem;
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  margin-top: 0;
  padding: 0;
`;

const App = () => {
  return (
    <Main>
      <Section id="header">
        <Title>
          <span role="img" aria-label="hand-waving">
            👋
          </span>{' '}
          Welcome to the dashboard for Nick Pierson.
        </Title>
      </Section>
      <Section id="location">
        <strong>Current location:</strong> Austin, TX
      </Section>
      <Section>
        It's not much right now, but you can check out what I have exposed so
        far:
      </Section>
      <Section id="widgets">
        <Widgets />
      </Section>
      <Section id="projects-header">I also run some side projects:</Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="footer">
        Want to reach me? Find me on twitter{' '}
        <a href="https://twitter.com/NickOnTheWeb">@NickOnTheWeb</a>
      </Section>
    </Main>
  );
};

export default App;

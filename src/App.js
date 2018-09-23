import React from 'react';
import styled from 'styled-components';
import Widgets from './Widgets';

const Main = styled.main`
  line-height: 1.5;
  padding: 1.25rem 2rem;
`;

const Section = styled.section`
  margin-top: 1rem;
`;

const App = () => {
  return (
    <Main>
      <Section id="header">
        👋 Welcome to my dashboard. It's not much right now. Check out what I
        have exposed so far:
      </Section>
      <Section id="widgets">
        <Widgets />
      </Section>
      <Section id="footer">
        Want to reach me? Find me on twitter{' '}
        <a href="https://twitter.com/NickOnTheWeb">@NickOnTheWeb</a>.
      </Section>
    </Main>
  );
};

export default App;

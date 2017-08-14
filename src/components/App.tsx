/**
 * App component
 */

import {
  h,
} from 'preact';
import {
  Button,
  Footer,
  Header,
  Title,
} from 'preact-photon';

export default () => (
  <div class="window">
    <Header>
      <Title>ShareText</Title>
      <Button icon="home">Home</Button>
    </Header>

    <section>
      Hello.
    </section>

    <Footer>
      <span>
        Some content.
      </span>
    </Footer>
  </div>
);

/**
 * Texts view component
 */

import {
  h,
} from 'preact';

import {
  ListGroup,
  ListGroupHeader,
  Pane,
  PaneGroup,
  Sidebar,
  WindowContent,
} from './ProtonUI';

import TextRow from './TextRow';

const TextsView = (props: {
  path: string,
  texts: ShareText.Text[],
}) => (
  <WindowContent>
    <PaneGroup>
      <Sidebar class="pane-sm">
        <ListGroup>
          <ListGroupHeader>
            <input class="form-control" type="text" placeholder="Search for someone" />
          </ListGroupHeader>
          {props.texts.map((text, i) =>
          <TextRow
            active={i === 0}
            avatar={`/assets/image/${text.sender}`}
            sender={text.sender}
            message={text.message}
          />
          )}
        </ListGroup>
      </Sidebar>
      <Pane>
        <div class="padded-more">Main content pane</div>
      </Pane>
    </PaneGroup>
  </WindowContent>
)

export default TextsView;

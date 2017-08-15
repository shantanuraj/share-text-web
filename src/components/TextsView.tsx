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

import {
  TextsState,
} from '../stores/texts';

import TextRow from './TextRow';
import LoadingView from './LoadingView';

interface TextsViewProps extends TextsState {
  path: string;
}

const TextsView = (props: TextsViewProps) => (
  props.loading ?
  <LoadingView /> :
  <WindowContent>
    <PaneGroup>
      <Sidebar class="pane-sm">
        <ListGroup>
          <ListGroupHeader>
            <input class="form-control" type="text" placeholder="Search..." />
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

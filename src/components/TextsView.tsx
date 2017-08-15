/**
 * Texts view component
 */

import {
  h,
} from 'preact';

import {
  TextsState,
} from '../stores/texts';

import {
  getAvatar,
} from '../utils';

import {
  ListGroup,
  ListGroupHeader,
  Pane,
  PaneGroup,
  Sidebar,
  WindowContent,
} from './ProtonUI';

import TextRow from './TextRow';
import LoadingView from './LoadingView';
import Messages from './Messages';

interface TextsViewProps extends TextsState {
  path: string;
}

const TextsView = (props: TextsViewProps) => (
  props.loading ?
  <LoadingView /> :
  <WindowContent>
    <PaneGroup>
      <Sidebar class="pane pane-sm">
        <ListGroup>
          <ListGroupHeader>
            <input class="form-control" type="text" placeholder="Search..." />
          </ListGroupHeader>
          {props.threads.map(([sender, texts], i) =>
          <TextRow
            active={i === 0}
            avatar={getAvatar(sender)}
            sender={sender}
            message={texts[texts.length - 1].message}
          />
          )}
        </ListGroup>
      </Sidebar>
      <Pane>
        {
          props.texts.length > 0 ?
          <Messages sender={props.texts[0].sender} texts={props.texts} /> :
          <div />
        }
      </Pane>
    </PaneGroup>
  </WindowContent>
)

export default TextsView;

/**
 * Texts view component
 */

import {
  h,
} from 'preact';
import {
  orderBy,
} from 'lodash-es';

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

import Search from '../containers/Search';

import TextRow from './TextRow';
import LoadingView from './LoadingView';
import Messages from './Messages';

interface TextsViewProps extends TextsState {
  path: string;
  thread: string;
  showThread: (thread: number) => void;
}

const currentThread = (props: TextsViewProps) => {
  try {
    return parseInt(props.thread, 10) || 0;
  } catch (err) {
    return 0;
  }
}

const renderThread = (props: TextsViewProps) => {
  const thread = currentThread(props);
  const {
    filteredThreads,
  } = props;

  if (thread > props.filteredThreads.length) {
    return <div />;
  }
  const [
    sender,
    texts,
  ] = filteredThreads[thread];

  return (
    <Messages
      sender={sender}
      texts={orderBy<ShareText.Text>(texts, text => text.date, 'asc')}
    />
  );

}

const TextsView = (props: TextsViewProps) => (
  props.loading ?
  <LoadingView /> :
  <WindowContent>
    <PaneGroup>
      <Sidebar class="pane pane-sm">
        <ListGroup>
          <ListGroupHeader>
            <Search />
          </ListGroupHeader>
          {props.filteredThreads.map(([sender, texts], i) =>
          <TextRow
            active={currentThread(props) === i}
            avatar={getAvatar(sender)}
            sender={sender}
            message={texts[0].message}
            showThread={() => props.showThread(i)}
          />
          )}
        </ListGroup>
      </Sidebar>
      <Pane>
        {renderThread(props)}
      </Pane>
    </PaneGroup>
  </WindowContent>
)

export default TextsView;

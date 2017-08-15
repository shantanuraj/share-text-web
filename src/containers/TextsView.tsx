/**
 * TextsView container component
 */

import {
  connect,
} from 'preact-redux';

import {
  State,
} from '../stores/root';

import TextsView from '../components/TextsView';

const mapState = (state: State) => state.texts;

const Connected = connect(
  mapState,
)(TextsView);

export default Connected;

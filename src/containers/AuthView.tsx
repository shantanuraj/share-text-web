/**
 * AuthView container component
 */

import {
  Dispatch,
  bindActionCreators,
} from 'redux';
import {
  connect,
} from 'preact-redux';

import {
  State,
} from '../stores/root';
import {
  updateCode,
  updateHost,
} from '../stores/auth';

import AuthView from '../components/AuthView';

const mapState = (state: State) => state.auth;
const mapDispatch = (dispatch: Dispatch<State>) => bindActionCreators({
  onHostChange: updateHost,
  onCodeChange: updateCode,
}, dispatch);

const Connected = connect(
  mapState,
  mapDispatch,
)(AuthView);

export default Connected;

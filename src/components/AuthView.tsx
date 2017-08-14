/**
 * Auth component
 */

import {
  h,
} from 'preact';

import {
  WindowContent,
} from './ProtonUI';

import {
  onEvent,
} from '../utils';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

interface AuthProps {
  onHostChange: (host: string) => void;
  onCodeChange: (code: string) => void;
}

const AuthView = (props: AuthProps) => (
  <WindowContent style={styles.container}>
    <form>
      <div class="form-group">
        <label>Host</label>
        <input
          type="url"
          class="form-control"
          placeholder="Enter device IP and port"
          onInput={onEvent(props.onHostChange)}
        />
      </div>
      <div class="form-group">
        <label>Code</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter code from app"
          onInput={onEvent(props.onCodeChange)}
        />
      </div>
    </form>
  </WindowContent>
);

export default AuthView;

/**
 * Auth component
 */

import {
  h,
} from 'preact';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const AuthView = (_props: {
  path: string;
}) => (
  <div class="window">
    <div style={styles.container} class="window-content">
      <form>
        <div class="form-group">
          <label>Host</label>
          <input type="url" class="form-control" placeholder="Enter device IP and port" />
        </div>
        <div class="form-group">
          <label>Code</label>
          <input type="password" class="form-control" placeholder="Enter code from app" />
        </div>
      </form>
    </div>
  </div>
);

export default AuthView;

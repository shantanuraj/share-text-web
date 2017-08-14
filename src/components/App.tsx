/**
 * App component
 */

import {
  h,
} from 'preact';

export default () => (
  <div class="window">
    <div class="window-content">
      <div class="pane-group">
        <div class="pane-sm sidebar">
          <div class="padded-more">Sidebar</div>
        </div>
        <div class="pane">
          <div class="padded-more">Main content pane</div>
        </div>
      </div>
    </div>
  </div>
);

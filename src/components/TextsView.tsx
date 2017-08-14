/**
 * SMSView component
 */

import {
  h,
} from 'preact';

const SMSView = () => (
  <div class="window">
    <div class="window-content">
      <div class="pane-group">
        <div class="pane-sm sidebar">
        <ul class="list-group">
          <li class="list-group-header">
            <input class="form-control" type="text" placeholder="Search for someone" />
          </li>
          <li class="list-group-item active">
            <img class="img-circle media-object pull-left" src="/assets/img/avatar.jpg" width="32" height="32" />
            <div class="media-body">
              <strong>List item title</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li class="list-group-item">
            <img class="img-circle media-object pull-left" src="/assets/img/avatar2.png" width="32" height="32" />
            <div class="media-body">
              <strong>List item title</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li class="list-group-item">
            <img class="img-circle media-object pull-left" src="/assets/img/avatar3.jpg" width="32" height="32" />
            <div class="media-body">
              <strong>List item title</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li class="list-group-item">
            <img class="img-circle media-object pull-left" src="/assets/img/avatar4.jpg" width="32" height="32" />
            <div class="media-body">
              <strong>List item title</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li class="list-group-item">
            <img class="img-circle media-object pull-left" src="/assets/img/avatar5.png" width="32" height="32" />
            <div class="media-body">
              <strong>List item title</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
          <li class="list-group-item">
            <img class="img-circle media-object pull-left" src="/assets/img/avatar6.jpg" width="32" height="32" />
            <div class="media-body">
              <strong>List item title</strong>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </li>
        </ul>
        </div>
        <div class="pane">
          <div class="padded-more">Main content pane</div>
        </div>
      </div>
    </div>
  </div>
)

export default SMSView;
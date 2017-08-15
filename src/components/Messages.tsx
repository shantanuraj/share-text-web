/**
 * Messages component
 */

import {
  h,
} from 'preact';

interface MessagesProps {
  sender: string;
  texts: ShareText.Text[];
}

const Messages = (props: MessagesProps) => (
  <div class="messages-view" style="height: 100%; position: relative;">
    <ul class="messages">
      <li data-type="system">
        <div class="message-content">
          Chat with {props.sender}
        </div>
        <div class="message-description">
          Today, {new Date(props.texts[props.texts.length - 1].date).toDateString()}
        </div>
      </li>
      <li data-type="self">
        <div class="message-content">
          Hello
        </div>
        <div class="message-description">
          Sent at 12:00
        </div>
      </li>
      <li data-type="extern">
        <div class="message-content">
          Hi
        </div>
        <div class="message-description">
          Sent at 12:01
        </div>
      </li>
      <li data-type="extern">
        <div class="message-content">
          What's up?
        </div>
        <div class="message-description">
          Sent at 12:21
        </div>
      </li>
      <li data-type="self">
        <div class="message-content">
          Nothing... 🙏
        </div>
        <div class="message-description">
          Sent at 12:26
        </div>
      </li>
      <li data-type="extern">
        <div class="message-content">
          Okay
        </div>
        <div class="message-description">
          Sent at 12:26
        </div>
      </li>
      <li data-type="self">
        <div class="message-content">
          Bye
        </div>
        <div class="message-description">
          Sent at 12:27
        </div>
      </li>
    </ul>
  </div>
);

export default Messages;

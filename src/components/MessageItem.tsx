/**
 * Message item component
 */

import {
  h,
} from 'preact';

interface MessageItemProps {
  type: 'system' | 'extern' | 'self';
  message: string;
  description: string;
}

const MessageItem = (props: MessageItemProps) => (
  <li data-type={props.type}>
    <div class="message-content">
      {props.message}
    </div>
    <div class="message-description">
      {props.description}
    </div>
  </li>
);

export default MessageItem;

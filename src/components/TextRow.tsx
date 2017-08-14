/**
 * Text row component
 */

import {
  h,
} from 'preact';

import {
  ListGroupItem,
} from './ProtonUI';

interface TextRowProps {
  sender: string;
  message: string;
  avatar: string;
  active: boolean;
}

const TextRow = (props: TextRowProps) => (
  <ListGroupItem class={props.active ? 'active': ''}>
    <img class="img-circle media-object pull-left" src={props.avatar} width="32" height="32" />
    <div class="media-body">
      <strong>{props.sender}</strong>
      <p>{props.message}</p>
    </div>
  </ListGroupItem>
);

export default TextRow;

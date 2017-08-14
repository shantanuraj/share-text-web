/**
 * Texts store
 */

import {
  action,
  observable,
} from 'mobx';

import ShareText from '../api/ShareText';

export default class Texts {
  @observable host: string = '';
  @observable code: string = '';
  @observable texts: ShareText.Text[] = [];

  constructor(code: string = '', texts: ShareText.Text[] = []) {
    this.code = code;
    this.texts = texts;
  }

  @action setCode = (code: string) => {
    this.code = code;
    this.getTexts();
  }

  @action getTexts = async () => {
    if (this.host && this.code) {
      this.texts = await new ShareText(
        this.host,
        this.code,
      ).getTexts();
    }
  }
}

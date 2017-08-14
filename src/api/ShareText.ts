/**
 * TextShare API
 */

import { ajax } from 'rxjs/observable/dom/ajax';

export default class ShareText {
  constructor(
    private host: string,
    private code: string,
  ) {}

  /**
   * Authorization header
   */
  static CODE_HEADER = 'x-text-code';

  private api(url: string = '/') {
    const headers = {
      [ShareText.CODE_HEADER]: this.code,
    };

    return ajax({
      url: `${this.host}${url}`,
      headers,
      responseType: 'json',
    });
  }

  public getTexts() {
    return this.api('/texts')
    .map(res => res.response as ShareTextApi.Texts)
    .map(res => res.texts);
  }
}

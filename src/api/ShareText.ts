/**
 * TextShare API
 */

import { ajax } from 'rxjs/observable/dom/ajax';
import {
  Observable,
} from 'rxjs/Observable';

export default class ShareText {
  constructor(
    private host: string,
    private code: string,
  ) {}

  /**
   * Authorization header
   */
  static CODE_HEADER = 'x-text-code';

  /**
   * Success status code
   */
  static STATUS_SUCCESS = 200;

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

  public getAuth(): Observable<boolean> {
    return this.api()
      .map(res => res.status === ShareText.STATUS_SUCCESS)
      .catch(err => {
        console.error(err);
        return Observable.of(false);
      });
  }

  public getTexts(): Observable<ShareText.Text[]> {
    return this.api('/texts')
      .map(res => res.response as ShareTextApi.Texts)
      .map(res => res.texts)
      .catch(err => {
        console.error(err);
        return Observable.of([]);
      });
  }
}

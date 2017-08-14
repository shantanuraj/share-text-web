/**
 * TextShare API
 */
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
    const headers = new Headers();
    headers.append(ShareText.CODE_HEADER, this.code);
    return fetch(`${this.host}${url}`, { headers });
  }

  public async getTexts(): Promise<ShareText.Text[]> {
    try {
      const data = await this.api('/texts');
      const res = await data.json() as ShareTextApi.Texts;
      return res.texts;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}

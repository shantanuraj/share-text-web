/**
 * ShareText Text interface
 */
declare module ShareText {

  export interface Text {
    sender: string;
    message: string;
    date: number;
  }

}

declare module ShareTextApi {

  export interface Texts {
    texts: ShareText.Text[];
  }

}

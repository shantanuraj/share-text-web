/**
 * ShareText Text interface
 */
declare module ShareText {

  export interface Text {
    sender: string;
    message: string;
    date: number;
  }

  export type TextThread = [string, ShareText.Text[]];
}

declare module ShareTextApi {

  export interface Texts {
    texts: ShareText.Text[];
  }

}

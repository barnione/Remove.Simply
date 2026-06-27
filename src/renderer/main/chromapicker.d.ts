declare module "chromapicker/dist/chroma.es.js" {
  export default class Chroma {
    constructor(selector: string, options?: { initialColor?: string });
    element: HTMLElement;
    options: { initialColor: string };
  }
}

declare module "chromapicker/dist/chromapicker.css";

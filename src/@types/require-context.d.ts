declare module "*.png";
declare module "*.jpg";
declare module "*.svg";

declare function require(context: string): {
  keys(): string[];
  (id: string): any;
};

declare namespace NodeJS {
  interface Require {
    context: (path: string, deep?: boolean, filter?: RegExp) => {
      keys(): string[];
      (id: string): any;
    };
  }
}

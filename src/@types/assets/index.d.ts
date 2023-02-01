declare module "*.svg" {
  import { ReactElement, SVGProps } from "react";
  const content: (props: SVGProps<SVGElement>) => ReactElement;
  export default content;
}

declare module "*.JPEG" {
  const value: any;
  export = value;
}

declare module "*.pdf" {
  const value: any;
  export = value;
}

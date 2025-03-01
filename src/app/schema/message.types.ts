import { BaseSchema } from "../core/schema/base.types";

export interface Message extends BaseSchema {
  content: string;
}

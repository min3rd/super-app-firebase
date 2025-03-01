import { Injectable } from "@angular/core";
import { BaseRepository } from "src/app/core/repositories/base.repository";
import { Message } from "../schema/message.types";

Injectable({
  providedIn: "root"
})
export class MessageRepository extends BaseRepository<Message> {
  override collection: string | undefined = "messages";
}

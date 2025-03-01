import { Injectable } from "@angular/core";
import { RealtimeRepository } from "../core/repositories/real-time.repository";
import { Message } from "../schema/message.types";

Injectable({
  providedIn:"root"
})
export class RealtimeMessageRepository extends RealtimeRepository<Message>{
  override _collection: string = "messages";
}

import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { appConfig } from "app.config";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private _client!: SupabaseClient;
  get supabase(): SupabaseClient {
    if (!this._client) {
      this._client = createClient(appConfig.supabaseConfig.baseUrl, appConfig.supabaseConfig.key);
    }
    return this._client;
  }
}

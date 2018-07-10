import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  url = 'http://localhost:8080/';

  constructor(private Http: HttpClient) { 
  }

  getallPlayers():Observable<Player[]>
  {
    return this.Http.get<Player[]>(this.url+'getallplayers');
  }
  addPlayer(player: Player):Observable<any>
  {
    return this.Http.post(this.url+'addplayer',player);
  }
  deletePlayers (): Observable<any> {
    return this.Http.delete(this.url+'delete');
  }
}

import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-container',
  templateUrl: './player-container.component.html',
  styleUrls: ['./player-container.component.css']
})
export class PlayerContainerComponent implements OnInit {

  players: Player[];
  reload: boolean=false;
  constructor(private PlayerService: PlayerService) { }

  ngOnInit() {
    this.PlayerService.getallPlayers().subscribe(data => {this.players=data; });
  }
  deletePlayers(): void {
    this.PlayerService.deletePlayers().subscribe();
  }

  reloadPlayers() {
    this.PlayerService.getallPlayers().subscribe(data => {this.players=data; });
  }
  
  
}

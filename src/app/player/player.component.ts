import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  selectedPlayer: Player;

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  @Input()player:Player;
  constructor() { }

  ngOnInit() {
  }
  

}

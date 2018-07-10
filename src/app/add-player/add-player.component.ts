import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  @Input() reload: boolean;
  @Output() reloadChanged = new EventEmitter<boolean>();

  player: Player= new Player();
  constructor(private playerservice: PlayerService) { }

  ngOnInit() {
  }
  addPlayer()
  {
    console.log(this.player);
    this.playerservice.addPlayer(this.player).subscribe(data => {
      console.log(data);
      this.reload = true;
      this.reloadChanged.emit(this.reload);
    })
  }

}

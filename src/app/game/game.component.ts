import { Component, OnInit, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @Input() heroData = new Array<Array<string>>();
  velha: Array<Array<string>> = this.fillArray(this.fillArray(''));
  images: Array<Array<string>> = this.fillArray(this.fillArray(''));
  curSym = 'X';
  curHero = 0;
  ganhou = false;
  points = [0, 0];
  jogadas = 0;
  // opções de vitória
  options = [
    // diagonais
    [0, 0, 1, 1, 2, 2],
    [2, 0, 1, 1, 0, 2],
    // verticais
    ...this.newVerticais()
  ];

  constructor() { }

  ngOnInit() {
    this.chooseStarter();
  }

  setBtn(i: number, btn: number) {
    if (this.velha[i][btn] === '' && !this.ganhou) {
      const playerSym = this.fillArray(this.curSym).join('');
      this.updateArray('velha', arguments, playerSym[0]);
      this.updateArray('images', arguments, this.heroData[this.curHero][1]);
      if (!this.playerWin(i, playerSym)) {
        this.curSym = this.curSym === 'X' ? 'O' : 'X';
        this.curHero = +!this.curHero;
        this.jogadas += 1;
        if (this.jogadas === 9) {
          this.ganhou = true;
        }
      } else {
        this.points[this.curHero] += 1;
      }
    }
  }

  updateArray(name: string, id: IArguments, val: any) {
    const arr = [...this[name][id[0]]];
    arr[id[1]] = val;
    this[name][id[0]] = arr;
  }

  playerWin(i: number, playerSym: string) {
    const velha = this.velha;
    this.ganhou = velha[i].join('') === playerSym;
    if (!this.ganhou) {
      for (const id1 of this.options) {
        this.ganhou = velha[id1[0]][id1[1]] +
          velha[id1[2]][id1[3]] +
          velha[id1[4]][id1[5]] === playerSym;
        if (this.ganhou) {
          break;
        }
      }
    }
    return this.ganhou;
  }

  restart() {
    this.ganhou = false;
    this.jogadas = 0;
    this.chooseStarter();
    this.velha = this.fillArray(this.fillArray(''));
    this.images = this.fillArray(this.fillArray(''));
  }

  chooseStarter() {
    this.curHero = Math.round(Math.random() * 1);
  }

  fillArray(val: any) {
    return new Array(3).fill(val);
  }

  newVerticais() {
    const verticais = [];
    for (const i of [0, 1, 2]) {
      verticais.push([0, i, 1, i, 2, i]);
    }
    return verticais;
  }

  backgroundBtn(i: number, j: number) {
    return this.images[i][j].length > 0 ? {
      'background-image': this.images[i][j],
      'background-color': 'rgba(188, 32, 32, 0.5)'
    } : '';
  }

}

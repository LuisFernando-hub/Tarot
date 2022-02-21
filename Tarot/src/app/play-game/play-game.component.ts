import { Component, OnInit } from '@angular/core';
import { TarotService } from '../services/tarot.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css'],
})
export class PlayGameComponent implements OnInit {
  data: any = [];
  cards: Array<any> = new Array();
  img = '';
  name = '';
  urlImage = '';
  text =
    'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.';
  constructor(private tarotService: TarotService) {}

  async ngOnInit() {
    this.tarotService.getTarot().subscribe(
      async (data) => {
        this.data = data;
        this.urlImage = this.data['imagesUrl'];
        this.cards = this.data['cards'];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async embaralhar() {
    this.cards = this.shuffleArray(this.cards);
  }

  // Função para randomizar array
  shuffleArray(arr: Array<any>) {
    this.img = '';
    // Loop em todos os elementos
    for (let i = arr.length - 1; i > 0; i--) {
      // Escolhendo elemento aleatório
      const j = Math.floor(Math.random() * (i + 1));
      // Reposicionando elemento
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    // Retornando array com aleatoriedade
    return arr;
  }

  cardModal(card: any) {
    this.img = card.image;
    this.name = card.name;
  }

  reload() {
    window.location.reload();
  }
}

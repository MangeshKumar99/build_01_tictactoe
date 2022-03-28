import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tictactoe';
  ticTacToeArray:string[][]=[['','',''],['','',''],['','','']];
  isOTurn:boolean=true;
  onCellClick(cell:string){
    console.log(`${cell} clicked !`);
    switch(cell){
      case '1':
        this.isOTurn ? this.ticTacToeArray[0][0]='O' : this.ticTacToeArray[0][0]='X';
        break;
      case '2':
        this.isOTurn ? this.ticTacToeArray[0][1]='O' : this.ticTacToeArray[0][1]='X';
        break;
      case '3':
        this.isOTurn ? this.ticTacToeArray[0][2]='O' : this.ticTacToeArray[0][2]='X';
        break;
      case '4':
        this.isOTurn ? this.ticTacToeArray[1][0]='O' : this.ticTacToeArray[1][0]='X';
        break;
      case '5':
        this.isOTurn ? this.ticTacToeArray[1][1]='O' : this.ticTacToeArray[1][1]='X';
        break;
      case '6':
        this.isOTurn ? this.ticTacToeArray[1][2]='O' : this.ticTacToeArray[1][2]='X';
        break;
      case '7':
        this.isOTurn ? this.ticTacToeArray[2][0]='O' : this.ticTacToeArray[2][0]='X';
        break;
      case '8':
        this.isOTurn ? this.ticTacToeArray[2][1]='O' : this.ticTacToeArray[2][1]='X';
        break;
      case '9':
        this.isOTurn ? this.ticTacToeArray[2][2]='O' : this.ticTacToeArray[2][2]='X';
        break;
    }
    this.isOTurn=!this.isOTurn;
    this.decideWinner();
  }
  decideWinner(){
    //horizontally
    if(this.ticTacToeArray[0][0]==this.ticTacToeArray[0][1] && this.ticTacToeArray[0][1] == this.ticTacToeArray[0][2] && (this.ticTacToeArray[0][0]!='')){
      setTimeout(()=>{
        alert(`${this.ticTacToeArray[0][0]} wins`);
        this.resetGame();
      },50);
    }
    if(this.ticTacToeArray[1][0]==this.ticTacToeArray[1][1] && this.ticTacToeArray[1][1] == this.ticTacToeArray[1][2] && (this.ticTacToeArray[1][0]!='')){
      setTimeout(()=>{
        alert(`${this.ticTacToeArray[1][0]} wins`);
        this.resetGame();
      },50);
    }
    if(this.ticTacToeArray[2][0]==this.ticTacToeArray[2][1] && this.ticTacToeArray[2][1] == this.ticTacToeArray[2][2] && (this.ticTacToeArray[2][0]!='')){
      setTimeout(()=>{
        alert(`${this.ticTacToeArray[2][0]} wins`);
        this.resetGame();
      },50);
    }
    //vertically
    if(this.ticTacToeArray[0][0]==this.ticTacToeArray[1][0] && this.ticTacToeArray[1][0] == this.ticTacToeArray[2][0] && (this.ticTacToeArray[0][0]!='')){
      setTimeout(()=>{
        alert(`${this.ticTacToeArray[0][0]} wins`);
        this.resetGame();
      },50);
    }
    if(this.ticTacToeArray[0][1]==this.ticTacToeArray[1][1] && this.ticTacToeArray[1][1] == this.ticTacToeArray[2][1] && (this.ticTacToeArray[0][1]!='')){
      setTimeout(()=>{
        alert(`${this.ticTacToeArray[0][1]} wins`);
        this.resetGame();
      },50);
    }
    if(this.ticTacToeArray[0][2]==this.ticTacToeArray[1][2] && this.ticTacToeArray[1][2] == this.ticTacToeArray[2][2] && (this.ticTacToeArray[0][2]!='')){
      setTimeout(()=>{
        alert(`${this.ticTacToeArray[0][2]} wins`);
        this.resetGame();
      },50);
    }
    //diagonally
    if(this.ticTacToeArray[0][0]==this.ticTacToeArray[1][1] && this.ticTacToeArray[1][1] == this.ticTacToeArray[2][2] && (this.ticTacToeArray[0][0]!='')){
      setTimeout(()=>{
        alert(`${this.ticTacToeArray[0][0]} wins`);
        this.resetGame();
      },50);
    }
    if(this.ticTacToeArray[0][2]==this.ticTacToeArray[1][1] && this.ticTacToeArray[1][1] == this.ticTacToeArray[2][0] && (this.ticTacToeArray[0][2]!='')){
      setTimeout(()=>{
        alert(`${this.ticTacToeArray[0][2]} wins`);
        this.resetGame();
      },50);
    }

  }
  ngOnInit(){
   
  }
  resetGame(){
    this.ticTacToeArray=[['','',''],['','',''],['','','']];
    this.isOTurn=true;
  }
}

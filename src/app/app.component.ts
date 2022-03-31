import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'tictactoe';
  clickedCount:number=0;
  winnerCount:number=0;
  ticTacToeArray:string[][]=[['','',''],['','',''],['','','']];
  isOTurn:boolean=true;
  nameOfCellClicked:string=''
  onCellClick(cell:string){
    this.clickedCount++;
    this.nameOfCellClicked=cell;
    console.log(`${cell} clicked !`);
    switch(cell){
      case '1':
        this.isOTurn ? this.ticTacToeArray[0][0]='O' : this.ticTacToeArray[0][0]='X';
        document.getElementById("1")!.style.pointerEvents = 'none';
        break;
      case '2':
        this.isOTurn ? this.ticTacToeArray[0][1]='O' : this.ticTacToeArray[0][1]='X';
        document.getElementById("2")!.style.pointerEvents = 'none';
        break;
      case '3':
        this.isOTurn ? this.ticTacToeArray[0][2]='O' : this.ticTacToeArray[0][2]='X';
        document.getElementById("3")!.style.pointerEvents = 'none';
        break;
      case '4':
        this.isOTurn ? this.ticTacToeArray[1][0]='O' : this.ticTacToeArray[1][0]='X';
        document.getElementById("4")!.style.pointerEvents = 'none';
        break;
      case '5':
        this.isOTurn ? this.ticTacToeArray[1][1]='O' : this.ticTacToeArray[1][1]='X';
        document.getElementById("5")!.style.pointerEvents = 'none';
        break;
      case '6':
        this.isOTurn ? this.ticTacToeArray[1][2]='O' : this.ticTacToeArray[1][2]='X';
        document.getElementById("6")!.style.pointerEvents = 'none';
        break;
      case '7':
        this.isOTurn ? this.ticTacToeArray[2][0]='O' : this.ticTacToeArray[2][0]='X';
        document.getElementById("7")!.style.pointerEvents = 'none';
        break;
      case '8':
        this.isOTurn ? this.ticTacToeArray[2][1]='O' : this.ticTacToeArray[2][1]='X';
        document.getElementById("8")!.style.pointerEvents = 'none';
        break;
      case '9':
        this.isOTurn ? this.ticTacToeArray[2][2]='O' : this.ticTacToeArray[2][2]='X';
        document.getElementById("9")!.style.pointerEvents = 'none';
        break;
    }
    this.isOTurn=!this.isOTurn;
    this.decideWinner();
  }
  decideWinner(){

    //horizontally
    if(this.ticTacToeArray[0][0]==this.ticTacToeArray[0][1] && this.ticTacToeArray[0][1] == this.ticTacToeArray[0][2] && (this.ticTacToeArray[0][0]!='')){
      this.winnerCount++;
      setTimeout(()=>{
        this.winnerAlert(this.ticTacToeArray[0][0]);
        this.resetGame();
      },50);
    }
    if(this.ticTacToeArray[1][0]==this.ticTacToeArray[1][1] && this.ticTacToeArray[1][1] == this.ticTacToeArray[1][2] && (this.ticTacToeArray[1][0]!='')){
      this.winnerCount++;
      setTimeout(()=>{
        this.winnerAlert(this.ticTacToeArray[1][0]);
        this.resetGame();
      },50);
    }
    if(this.ticTacToeArray[2][0]==this.ticTacToeArray[2][1] && this.ticTacToeArray[2][1] == this.ticTacToeArray[2][2] && (this.ticTacToeArray[2][0]!='')){
      this.winnerCount++;
      setTimeout(()=>{
        this.winnerAlert(this.ticTacToeArray[2][0]);
        this.resetGame();
      },50);
    }
    //vertically
    if(this.ticTacToeArray[0][0]==this.ticTacToeArray[1][0] && this.ticTacToeArray[1][0] == this.ticTacToeArray[2][0] && (this.ticTacToeArray[0][0]!='')){
      this.winnerCount++;
      setTimeout(()=>{
        this.winnerAlert(this.ticTacToeArray[0][0]);
        this.resetGame();
      },50);
    }
    if(this.ticTacToeArray[0][1]==this.ticTacToeArray[1][1] && this.ticTacToeArray[1][1] == this.ticTacToeArray[2][1] && (this.ticTacToeArray[0][1]!='')){
      this.winnerCount++;
      setTimeout(()=>{
        this.winnerAlert(this.ticTacToeArray[0][1]);
        this.resetGame();
      },50);
    }
    if(this.ticTacToeArray[0][2]==this.ticTacToeArray[1][2] && this.ticTacToeArray[1][2] == this.ticTacToeArray[2][2] && (this.ticTacToeArray[0][2]!='')){
      this.winnerCount++;
      setTimeout(()=>{
        this.winnerAlert(this.ticTacToeArray[0][2]);
        this.resetGame();
        
      },50);
    }
    //diagonally
    if(this.ticTacToeArray[0][0]==this.ticTacToeArray[1][1] && this.ticTacToeArray[1][1] == this.ticTacToeArray[2][2] && (this.ticTacToeArray[0][0]!='')){
      this.winnerCount++;
      setTimeout(()=>{
        this.winnerAlert(this.ticTacToeArray[0][0]);
        this.resetGame();
      },50);
    }
    if(this.ticTacToeArray[0][2]==this.ticTacToeArray[1][1] && this.ticTacToeArray[1][1] == this.ticTacToeArray[2][0] && (this.ticTacToeArray[0][2]!='')){
      this.winnerCount++;
      setTimeout(()=>{
        this.winnerAlert(this.ticTacToeArray[0][2]);
        this.resetGame();
      },50);
    }
    //match draw condition
    if(this.clickedCount==9 && this.winnerCount==0){
      setTimeout(()=>{
        this.matchDrawAlert();
        this.resetGame();
      },50);  
    }
  }
  ngOnInit(){
   
  }
  resetGame(){
    this.ticTacToeArray=[['','',''],['','',''],['','','']];
    this.isOTurn=true;
    this.clickedCount=0;
    this.winnerCount=0;
    this.reEnableAllCells();
  }
  winnerAlert(winner:string){
    Swal.fire({
      title: `${winner} wins !`,
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
  }

  matchDrawAlert(){
    Swal.fire({
      title: 'Match draw !',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
  reEnableAllCells(){
    document.getElementById("1")!.style.pointerEvents = 'auto';
    document.getElementById("2")!.style.pointerEvents = 'auto';
    document.getElementById("3")!.style.pointerEvents = 'auto';
    document.getElementById("4")!.style.pointerEvents = 'auto';
    document.getElementById("5")!.style.pointerEvents = 'auto';
    document.getElementById("6")!.style.pointerEvents = 'auto';
    document.getElementById("7")!.style.pointerEvents = 'auto';
    document.getElementById("8")!.style.pointerEvents = 'auto';
    document.getElementById("9")!.style.pointerEvents = 'auto';
  }
}

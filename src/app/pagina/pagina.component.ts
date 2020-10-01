import { viewClassName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  local1:Array<any> = [];
  local2:Array<any> = [];
  local3:Array<any> = [];
  local4:Array<any> = [];
  local0:Array<any> = [];
  posicao:number;
  constructor(
  ) { 
    this.atualizaMatriz()
  }

  ngOnInit(): void {
  }


  adicionaContainer(container:any){
    let posicao = this.verificaMenor()
    if((this.local1.length < 3) && !(this.local1.includes(container))){
      this.local1.push(container);
      return 0;
    }
    if(this.local2.length < 3 && !(this.local2.includes(container))){
      this.local2.push(container);
      return 0;
    }

    if(this.local3.length < 3 && !(this.local3.includes(container))){
      this.local3.push(container);
      return 0;
    }

    if(this.local4.length < 3 && !(this.local4.includes(container))){
      this.local4.push(container);
      return 0;
    }
    this.atualizaMatriz()
  }

  verificaMenor(){
    let i = 4;
    let posicao = 0;
    let array:Array<any> = [];
    for (i = 0; i < this.local0.length; i++) {
      if(array.length < this.local0[i].length){
        array = this.local0[i].length;
        posicao = i;
      }
    }
    console.log(posicao)
    return posicao;
  }
  atualizaMatriz(){
    this.local0 = [];
    this.local0.push(this.local1, this.local2, this.local3, this.local4);
  }

  verificaVetores(container:any){
    this.adicionaContainer(container);
    console.log("1" + this.local1)
    console.log("2" +this.local2)
    console.log("3" +this.local3)
    console.log("4" +this.local4)
  }
}

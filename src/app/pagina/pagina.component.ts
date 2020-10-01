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
    this.local0.push(this.local1, this.local2, this.local3, this.local4);
  }

  ngOnInit(): void {
  }

  adicionaContainer(container:any){
    let erro:number = 0;
    if((this.local1.length < 3) && (this.local1[this.local1.length -1] != container)){
      this.local1.push(container);
      return 0;
    }

    if(this.local2.length < 3 && (this.local2[this.local2.length -1] != container)){
      this.local2.push(container);
      return 0;
    }

    if(this.local3.length < 3 && (this.local3[this.local3.length -1] != container)){
      this.local3.push(container);
      return 0;
    }

    if(this.local4.length < 3 && (this.local4[this.local4.length -1] != container)){
      this.local4.push(container);
      return 0;
    }
  }

  verificaVetores(container:any){
    this.adicionaContainer(container);
    console.clear();
    console.log("1" + this.local1)
    console.log("2" +this.local2)
    console.log("3" +this.local3)
    console.log("4" +this.local4)
  }
}

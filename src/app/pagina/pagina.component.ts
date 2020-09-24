import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  local1 = [];
  local2 = [];
  local3 = [];
  local4 = [];

  constructor(
  ) { }

  ngOnInit(): void {
  }

  adicionaContainer(container:any){
    let erro = 0;
    if(this.local1.length < 3){
      this.local1.push(container);
    }
    else if(this.local2.length < 3){
      this.local2.push(container);
    }
    else if(this.local3.length < 3){
      this.local3.push(container);
    }
    else if(this.local4.length < 3){
      this.local4.push(container);
    }
    else{
      window.alert("Impossível Empilhar!");
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

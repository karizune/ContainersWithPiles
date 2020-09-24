import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  local0 = [];
  local1 = [];
  local2 = [];
  local3 = [];
  local4 = [];

  constructor(
  ) { }
  
  

  ngOnInit(): void {
    this.local0.push(this.local1)
    this.local0.push(this.local2)
    this.local0.push(this.local3)
    this.local0.push(this.local4)
    console.log(this.local0)
  }

  adicionaContainer(container:any){
    for(let i = 0; i < 4; i++){
      if(this.local0[i].lenght < 3){
        this.local0[i].push(container);
        return window.alert("adicionado com sucesso")
      }
    }
    return window.alert("Impossivel adicionar")
  }


}

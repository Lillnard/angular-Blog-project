import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  imageCover:string = "https://img.freepik.com/fotos-gratis/o-ceu-noturno-ilumina-a-majestosa-paisagem-de-inverno-e-a-ia-generativa-das-montanhas_188544-12465.jpg"
  contentTitle:string = "Testando a nova página Content"
  contentDescription:string = "Aparentemente está funcionando corretamente"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

      this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id) [0]

    if(result){
      this.contentTitle = result.title
      this.contentDescription = result.dsecription
      this.imageCover = result.imageCover
    }
  }

}

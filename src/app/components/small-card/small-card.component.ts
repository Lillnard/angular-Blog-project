import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  imageCover:string = ""

  @Input()
  cardTitle:string = "Mais um teste, pra ter certeza que funciona!"

  @Input()
  id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}

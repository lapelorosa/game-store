import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  public productos: string;

  listado = [
    {
      nombre: "b",
      desc: "AVENTURAS"
    },
    {
      nombre: "i",
      desc: "CLASICO"
    },
    {
      nombre: "w",
      desc: "TORNEO"
    },
    {
      nombre: "m",
      desc: "MULTIJUGADOR"
    }
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.productos = this.activatedRoute.snapshot.paramMap.get('id');
  }


}

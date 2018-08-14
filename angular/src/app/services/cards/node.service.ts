import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class NodeService{

  private nodes:Node[] = [
    {
      title: "Titulos 1",
      description: "Descripcion 1"
    },
    {
      title: "Titulos 2",
      description: "Descripcion 2"
    }
  ];

  constructor(private http: HttpClient) {
    console.log('Content Type Listo');
  }

  getNodes() {
    return this.nodes;
  }
}

export interface Node {
  title: string;
  description: string;
}

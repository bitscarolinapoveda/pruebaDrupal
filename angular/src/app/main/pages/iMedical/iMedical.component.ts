import { Component, OnInit } from "@angular/core";
import { CustomCardService,Blurb } from "../../../services/cards/v1-card.services";

@Component({
  selector: "app-iMedical",
  templateUrl: "./iMedical.component.html",
  styleUrls: ["./iMedical.component.scss"]
})
export class iMedicalComponent implements OnInit {
  blurbArray: Blurb[];
  tituloModulos: string;
  descripcionModulos: string;

  constructor(private _http: CustomCardService) {
    this.blurbArray = [];
  }

  ngOnInit() {
    this.getModulesService();
  }

  getModulesService() {
    this._http
      .getCustomCardInformation("moduleinformation")
      .subscribe(params => {
        for (let blurbItem of params.data) {
          let blurbObject: Blurb = {
            imageSrc: "",
            title: "",
            description: ""
          };
          blurbObject.imageSrc = blurbItem.field_image.url;
          blurbObject.title = blurbItem.title;
          blurbObject.description = blurbItem.body;
          this.blurbArray.push(blurbObject);
        }
      });
  }
}

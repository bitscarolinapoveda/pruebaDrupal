import { OnInit, Component } from "@angular/core";
import { CustomCardService } from '../../../services/cards/v1-card.services';


@Component({
    selector: 'app-project-summary',
    templateUrl: './project-summary.component.html',
    styleUrls: ['./project-summary.component.scss']
})
export class ProjectSummaryComponent implements OnInit{

    titleSection:string;
    titleProject:string;
    summaryProject:string;
    tags:any[];
    linkProject:string;

    constructor(
        private _http : CustomCardService
    ) {
        this.titleSection = "El Proyecto";
        this.titleProject = "Sistema de gestión de rotaciones médicas";
        this.summaryProject = "Mollit id aliqua commodo ipsum sit do velit labore id. Id ea ullamco ullamco ea amet dolore sit est veniam qui veniam et ipsum. Aliquip esse eiusmod proident do tempor culpa velit eu fugiat enim deserunt amet.";
        this.tags = ['salud','cloud','angularjs','mobile','tag'];
        this.linkProject = "www.loremipsuotus.com.co";
    }

    ngOnInit(){
        //this.getProjectSummaryService();
    }

    getProjectSummaryService(){
        this._http.getCustomCardInformation('summary-project').subscribe( params => {
            this.titleSection = params.data[0].titleSection;
            this.titleProject = params.data[0].nameProject;
            this.summaryProject = params.data[0].summary;
            this.linkProject = params.data[0].url;
            this.tags = params.data[0].listTags;
        });
    }
}
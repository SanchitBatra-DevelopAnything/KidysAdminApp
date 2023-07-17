import { Component } from '@angular/core';
import { NodeService } from '../services/treeSelect/node.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.scss']
})
export class ReportingComponent {

    nodes!:any[];
    
    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }

    handle(e:any)
    {
      console.log(this.selectedNodes);
      console.log(e);
    }

}

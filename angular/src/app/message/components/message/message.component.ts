import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() dataMessage: DataMessage[];

  constructor() {
    this.dataMessage = [];
  }

  ngOnInit() {
  }

}
export interface DataMessage {
  visible: boolean;
  status: string;
  message: string;
}

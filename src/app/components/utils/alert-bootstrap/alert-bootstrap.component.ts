import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-bootstrap',
  templateUrl: './alert-bootstrap.component.html',
  styleUrls: ['./alert-bootstrap.component.css']
})
export class AlertBootstrapComponent implements OnInit {
  CLASS_SUCCESS = 'alert-success';
  CLASS_INFO = 'alert-info';
  CLASS_WARNING = 'alert-warning';
  CLASS_DANGER = 'alert-danger';
  CLASS_PRIMARY = 'alert-primary';
  @Input() alertShow: boolean;
  @Input() alertClass: string;
  @Input() alertMessage: string;
  constructor() { }

  ngOnInit() {
  }
}

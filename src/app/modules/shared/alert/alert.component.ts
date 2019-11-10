import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() message = "";
  @Input() type = "";

  constructor() { }

  ngOnInit () {
  }

  getAlertTypeClass () {
    switch (this.type) {
      case "primary":
        return 'alert-primary';
      case "info":
        return 'alert-info';
      case "success":
        return 'alert-success';
      case "danger":
        return 'alert-danger';
      case "warning":
        return 'alert-warning';
      case "default":
        return 'alert-default';
      default:
        return 'alert-default';
    }
  }

}

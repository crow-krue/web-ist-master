import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserStateService } from 'src/app/services/userState.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  title = "Medium";

  links = [
    {
      title: "News",
      path: "/"
    },
    {
      title: "News",
      path: "/"
    }
  ];

  constructor(private router: Router, private userStateService: UserStateService) { }

  isCurrentLink (path) {
    return this.router.isActive(path, false);
  }

  toPage (path) {
    this.router.navigate([path]);
  }

  ngOnInit () { }
}

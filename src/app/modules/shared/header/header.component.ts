import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
    }
  ];

  constructor(private router: Router) {}

  isCurrentLink(path) {
    return this.router.isActive(path, false);
  }

  toPage(path) {
    this.router.navigate([path]);
  }

  ngOnInit() {}
}

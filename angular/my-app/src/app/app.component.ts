import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "my-app";
  condition: boolean = false;
  handleClick = () => {
    this.condition = !this.condition;
  };
  y = () => {
    return this.condition;
  };
  users = [
    { id: 1, name: "vivek", age: 20 },
    { id: 2, name: "srijan", age: 22 },
    { id: 3, name: "gaaaa", age: 15 },
  ];
}

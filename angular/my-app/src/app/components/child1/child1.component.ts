import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
@Component({
  selector: "app-child1",
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: "./child1.component.html",
  styleUrl: "./child1.component.css",
})
export class Child1Component {}

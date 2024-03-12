import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { CurrConverterPipe } from "./pipes/curr-converter.pipe";
import { MatButtonModule } from "@angular/material/button";
import { Child1Component } from "./components/child1/child1.component";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    FormsModule,
    RouterOutlet,
    CommonModule,
    CurrConverterPipe,
    MatButtonModule,
    Child1Component,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  name: string = "Cubastion";
  birthday = new Date(1988, 3, 15);

  handleInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log("Input value:", inputElement.value);
  }

  handleClick() {
    console.log("Button clicked!");
  }

  amount = 1000;
  // handleClick() {
  //   console.log("clicked...");
  // }

  methodName() {
    // Method logic here
  }

  imageURL =
    "https://cubastion.com/wp-content/uploads/2023/05/Cubastion-logo-Updated.png";
  isDisabled = true;

  title = "My Angular App";

  user = {
    name: "John",
    age: 30,
  };

  counter = 5;

  incrementCounter() {
    return this.counter;
  }

  // title = "my-app";
  // condition: boolean = false;
  // handleClick = () => {
  //   this.condition = !this.condition;
  // };
  // y = () => {
  //   return this.condition;
  // };
  // users = [
  //   { id: 1, name: "vivek", age: 20 },
  //   { id: 2, name: "srijan", age: 22 },
  //   { id: 3, name: "gaaaa", age: 15 },
  // ];

  // name|pipe
}

import { Component } from "@angular/core";

type userFormFiled = {
  fieldName: string;
  type: string;
  placeHolder: string;
  value?: string | number;
};

@Component({
  selector: "app-summative",
  standalone: true,
  imports: [],
  templateUrl: "./summative.component.html",
  styleUrl: "./summative.component.css",
})
export class SummativeComponent {
  userFormFields: userFormFiled[] = [
    {
      fieldName: "Full-Name",
      type: "text",
      placeHolder: "Enter your full name",
      value: "",
    },
    {
      fieldName: "Date-of-Birth",
      type: "text",
      placeHolder: "Enter your DOB",
      value: "",
    },
    {
      fieldName: "Mobile",
      type: "text",
      placeHolder: "Enter your contact number",
      value: "",
    },
    {
      fieldName: "Age",
      type: "number",
      placeHolder: "Enter your contact number",
      value: "24",
    },
  ];

  handleInput(filedName: any, e: any) {
    switch (filedName) {
      case "Date-of-Birth":
        this.dateInput(e);
        break;
      default:
        window.alert("invalid filed-name");
    }
  }

  dateInput(e: any) {
    console.log(e);

    const key = e.key;
    const value = e.target.value;
    const length = e.target.value.length;

    console.log(length);

    const acceptedKeys: string[] = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
    ];

    if (
      !(
        acceptedKeys.indexOf(key) > -1 ||
        (parseInt(key) >= 0 && parseInt(key) <= 9)
      )
    ) {
      e.preventDefault();
    }

    if (e.key !== "Backspace") {
      setTimeout(() => {
        if (value.length == 1 || value.length === 4) {
          e.target.value += "-";
        }
      }, 25);
    }
  }

  checkForDisabled(fieldName: String) {
    if (fieldName === "Age") {
      return true;
    } else {
      return false;
    }
  }

  // formatDob(e: any) {
  //   const value = e.target.value;
  //   if (value.length === 2 || value.length === 5) e.target.value += "-";
  // }
}

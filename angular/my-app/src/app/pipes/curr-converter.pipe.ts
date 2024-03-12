import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "currConverter",
  standalone: true,
})
export class CurrConverterPipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    console.log(value);
    console.log(args);
    const curr = args[0];
    const toConvert = args[1];
    let ans = 0;
    switch (toConvert) {
      case "INR":
        if (curr === "USD") ans = value * 80;
        break;
      default:
    }
    return ans;
  }
}

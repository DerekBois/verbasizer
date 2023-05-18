// These will be included in the main file
import { templates } from "./templates.js";
import { tags, lookup, genders } from "./tags.js";
import { Random } from "./randomizer.js";

let R = new Random();
let rb = +R.random_bool(0.5);

// Replace the tags that start with < and end with > with the
// corresponding reference at random
let replaceTags = (str) => {
  let rx = /\^\w+\b/g;

  const whatever = str
    .replaceAll(rx, (s) => {
      let t = s.replace("^", "");

      if (/^g\d/.test(t)) return s;

      return `<span>${
        tags[t][Math.floor(R.random_dec() * tags[t].length)]
      }</span>`;
    })
    .replaceAll(
      rx,
      (s) =>
        `<span>${genders[s.slice(2, 3) - 1][/a/.test(s) ? +rb : +!rb]}</span>`
    );

  // return whatever
  //   .split("\n")
  //   .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
  //   .join("\n")

  return whatever;
};

// Replace the numbers used in the template with readable tags
// for the reference output
let replaceNums = (temp) =>
  temp.replaceAll(/\^\w+\b/g, (s) => {
    let t = s.replace("^", "");
    if (/^g\d/.test(t)) {
      let final = /a/.test(t) ? t.replace("a", "f") : t + "m";
      return `&lt${final}&gt`;
    }
    return `&lt${lookup[t]}&gt`;
  });

templates.forEach((template) => {
  document.querySelector("#output").innerHTML +=
    `<p>${replaceTags(template)}</p>` + replaceNums(template) + "<hr/>";
});

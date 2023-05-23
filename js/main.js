// These will be included in the main file
import { templates } from "./templates.js";
import { tags, lookup, genders as g } from "./tags.js";
import { Random } from "./randomizer.js";

let R = new Random();

// Replace the tags that start with < and end with > with the
// corresponding reference at random
// let replaceTags = (str) => {
//   let rx = /\^\w+\b/g;
//   let g1 = R.random_bool(0.5);
//   let g2 = R.random_bool(0.5);
//   let g3 = R.random_bool(0.5);
//   g2 = g1 && g2 ? !g2 : g2;

//   return str
//     .replaceAll(rx, (s) => {
//       let t = s.replace("^", "");
//       if (/^g\d/.test(t)) return s;

//       return `<span>${
//         tags[t][Math.floor(R.random_dec() * tags[t].length)]
//       }</span>`;
//     })
//     .replaceAll(
//       rx,
//       (s) =>
//         `<span>${
//           genders[/o/.test(s) ? +g2 : +g1][s.slice(2, 3) - 1][+g3]
//         }</span>`
//     );
// };

let replaceTags = (str) => {
  let rx = /\^\w+\b/g;
  let g1 = R.random_bool(0.5);
  let g2 = R.random_bool(0.5);
  let g3 = R.random_bool(0.5);
  g2 = g1 && g2 ? !g2 : g2;

  return str
    .replaceAll(rx, (s) => {
      let t = s.replace("^", "");
      if (/^g\d/.test(t)) return s;
      return tags[t][Math.floor(R.random_dec() * tags[t].length)];
    })
    .replaceAll(rx, (s) => g[/o/.test(s) ? +g2 : +g1][s.slice(2, 3) - 1][+g3])
    .split("\n")
    .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
    .join("\n");
};

// Replace the numbers used in the template with readable tags
// for the reference output
let replaceNums = (temp) =>
  temp.replaceAll(/\^\w+\b/g, (s) => {
    let t = s.replace("^", "");
    if (/^g\d/.test(t)) {
      let final = /o/.test(t) ? t : t + "s";
      return `&lt${final}&gt`;
    }
    return `&lt${lookup[t]}&gt`;
  });

templates.forEach((template) => {
  document.querySelector("#output").innerHTML +=
    `<p>${replaceTags(template)}</p>` + replaceNums(template) + "<hr/>";
});

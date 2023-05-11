// These will be included in the main file
// const will be replaced with var (save every byte)
import { templates, lookup } from "./templates.js";
import { tags } from "./tags.js";
import { Random } from "./randomizer.js";

const R = new Random();

const replaceTags = (temp) =>
  temp.replaceAll(
    /<(.*?)>/g,
    (_, s) =>
      `<span>${tags[+s][Math.floor(R.random_dec() * tags[+s].length)]}</span>`
  );

const replaceNums = (temp) =>
  temp.replaceAll(/<(.*?)>/g, (_, s) => `&lt${lookup[+s]}&gt`);

templates.forEach((template, i) => {
  document.querySelector("#output").innerHTML += `<p><strong>${replaceTags(
    template
  )}</strong></p>`;

  document.querySelector("#output").innerHTML +=
    replaceNums(template) + "<hr/>";
  // originals[i].replace(/</g, "&lt") +
  // "\n\n";
});

// console.log(single);

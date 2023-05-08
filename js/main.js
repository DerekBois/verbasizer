// These will be included in the main file
// const will be replaced with var (save every byte)
import { templates, originals } from "./templates.js";
import { tags } from "./tags.js";

// console.log(single.match(regex));
// console.log([...single.matchAll(regex)]);
// console.log(regex.exec(single));

templates.forEach((template, i) => {
  const final = template.replaceAll(/<(.*?)>/g, (_, s) => {
    return tags[+s][Math.floor(Math.random() * tags[+s].length)];
  });
  document.querySelector("#output").innerHTML +=
    `<strong>${final}</strong>` + "\n";
  document.querySelector("#output").innerHTML +=
    originals[i].replace(/</g, "&lt") + "\n\n";
});

// console.log(single);

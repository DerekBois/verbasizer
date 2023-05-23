import { lookup } from "./tags.js";

const form = document.getElementById("submit-form");
const output = document.getElementById("process-output");

const newLookup = Object.fromEntries(
  Object.entries(lookup).map(([key, value]) => [value.toLowerCase(), key])
);

form.onsubmit = () => {
  document
    .getElementById("ingest")
    .value.replaceAll(/<(.*?)>/g, (_, s) => {
      if (/^g\d/.test(s)) {
        return `^${s.replace("s", "")}`;
      }
      return `^${newLookup[s] ?? s}`;
    })
    .split("\n\n")
    .forEach((v) => {
      output.innerHTML += JSON.stringify(v).replace(/"/g, "`") + ",\n";
    });

  return false;
};

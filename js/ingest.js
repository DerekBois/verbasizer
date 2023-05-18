import { lookup } from "./tags.js";

const form = document.getElementById("submit-form");
const output = document.getElementById("process-output");

const newLookup = Object.fromEntries(
  Object.entries(lookup).map(([key, value]) => [value.toLowerCase(), key])
);

form.onsubmit = () => {
  const value = document.getElementById("ingest").value;
  const final = value
    .replaceAll(/<(.*?)>/g, (_, s) => {
      if (/^g\d/.test(s)) {
        return `^${s.replace("m", "").replace("f", "a")}`;
      }
      return `^${newLookup[s] ?? s}`;
    })
    .split("\n\n");
  output.innerHTML = JSON.stringify(final, null, 2);
  return false;
};

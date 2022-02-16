// "use strict";

const HydrateFn = setInterval(() => document.write("<p>Hello!</p>"), 2000);

setTimeout(StopFn, 60000);

function StopFn() {
  clearInterval(HydrateFn);
}

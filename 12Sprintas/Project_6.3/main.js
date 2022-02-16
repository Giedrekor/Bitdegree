const canvas1 = document.getElementById("canvas1");
const ctx = canvas1.getContext("2d");
let canvasH;
let canvasW;
let bgColor = "#C4AEAD";
let animations = [];
let circles = [];

const pickColor = (function () {
  // const colors = ["#E2A76F", "#228B22", "#F62817", "#8C001A"];
  const colors = ["#C4AEAD", "#8B8000", "#C7A317", "#3B3131", "#C0C0C0", "#504A4B", "#9CB071", "#7D0541", "#98FF98", "#708090", "#DAEE01", "#B7CEEC", "#8FBC8F", "#7A5DC7", "#FF2400", "#006400", "#7BCCB5", "#0909FF", "#2554C7", "#E2F516", "#00A36C", "#D291BC", "#F3E3C3", "#5FFB17", "#E75480", "#F8B88B", "#F70D1A", "#616D7E", "#565051", "#4C4646", "#8B008B", "#D2B9D3", "#E45E9D", "#EE9A4D", "#FF7722", "#F08080", "#66CDAA", "#8D38C9", "#15317E", "#493D26", "#827B60", "#008080", "#5E7D7E", "#7B68EE", "#0AFFFF", "#8467D7", "#3D3C3A", "#8E35EF", "#E30B5D", "#C12869", "#8B0000", "#C25283", "#666362", "#704214", "#FDF5E6", "#E77471", "#F1E5AC", "#A52A2A", "#B048B5", "#7F5A58", "#663399", "#D2691E", "#6C2DC7", "#36F57F", "#B6B6B4", "#77BFC7", "#D5D6EA", "#571B7E", "#64E986", "#79BAEC", "#C2B280", "#5C3317", "#E3E4FA", "#FF4500", "#57FEFF", "#FFEFD5", "#F88158", "#736F6E", "#FF6347", "#556B2F", "#306EFF", "#954535", "#FF8C00", "#F660AB", "#B22222", "#4E8975", "#F2BB66", "#3D0C02", "#9F000F", "#C71585", "#6A0DAD", "#FFF9E3", "#123456", "#786D5F", "#B8860B", "#E55451", "#1589FF", "#FF7F50", "#FED8B1", "#437C17", "#EDE6D6", "#F62217", "#9ACD32", "#36454F", "#667C26", "#2B3856", "#728FCE", "#F3E5AB", "#EBF4FA", "#FCDFFF", "#FFFAFA", "#FFAE42", "#E6BF83", "#FFE87C", "#F75D59", "#3D3635", "#D2B48C", "#FDEEF4", "#797979", "#C36241", "#F6358A", "#FF00FF", "#C12283", "#32CD32", "#000080", "#2B65EC", "#C3FDB8", "#387C44", "#00008B", "#E7A1B0", "#E8ADAA", "#726E6D", "#95B9C7", "#FFFAF0", "#FDD7E4", "#B0E0E6", "#808000", "#046307", "#FFA62F", "#617C58", "#842DCE", "#F88017", "#3A3B3C", "#BDF516", "#151B54", "#F433FF", "#00CED1", "#CD5C5C", "#3090C7", "#B5EAAA", "#C45AEC", "#614051", "#F0E68C", "#4CC417", "#AFEEEE", "#E8A317", "#5F9EA0", "#00FFFF", "#9E7BFF", "#52D017", "#DCDCDC", "#FAF884", "#FD1C03", "#C25A7C", "#368BC1", "#6698FF", "#4E387E", "#FAAFBA", "#FFF380", "#BDEDFF", "#ADDFFF", "#E55B3C", "#3BB9FF", "#4C787E", "#0000FF", "#008000", "#D3D3D3", "#7F4E52", "#FF0000", "#FA8072", "#3EB489", "#6A5ACD", "#F8F8FF", "#FF5F1F", "#5CB3FF", "#FFFF33", "#B1FB17", "#FAF5EF", "#43302E", "#872657", "#583759", "#FAEBD7", "#C8B560", "#7D0552", "#837E7C", "#6AFB92", "#931314", "#B666D2", "#5E5A80", "#7F38EC", "#48D1CC", "#00FF00", "#5C5858", "#7E3817", "#8A4117", "#696969", "#4EE2EC", "#F9A7B0", "#F87217", "#16E2F5", "#D462FF", "#6CC417", "#66FF00", "#728C00", "#438D80", "#990012", "#98F516", "#3F000F", "#BDB76B", "#7FFF00", "#FFF0F5", "#F5DEB3", "#93FFE8", "#347235", "#90EE90", "#7F5217", "#7E354D", "#967BB6", "#FFEBCD", "#357EC7", "#82CAFF", "#89C35C", "#B5651D", "#CD7F32", "#C8AD7F", "#2B547E", "#9370DB", "#FBBBB9", "#4863A0", "#F9B7FF", "#E78A61", "#157DEC", "#CCFFFF", "#46C7C7", "#F0E2B6", "#7F462C", "#FFFFC2", "#DF73D4", "#4B0082", "#C9C0BB", "#E4287C", "#F62817", "#D16587", "#C35817", "#5EFB6E", "#827839", "#800080", "#FBB917", "#52595D", "#6960EC", "#DA70D6", "#ADD8E6", "#F52887", "#659EC7", "#50C878", "#3B2F2F", "#FFEF00", "#3CB371", "#ADFF2F", "#FFFFE0", "#C19A6B", "#E3F9A6", "#FFE6E8", "#2916F5", "#C21E56", "#CB6D51", "#FFFFF7", "#1974D2", "#B21807", "#86608E", "#646D7E", "#C8A2C8", "#ECE5B6", "#00BFFF", "#E56717", "#FBE7A1", "#59E817", "#B5A642", "#DBF9DB", "#FFA500", "#C6DEFF", "#342D7E", "#FFB6C1", "#C12267", "#BCE954", "#FFFFF0", "#483D8B", "#C04000", "#7F525D", "#1569C7", "#966F33", "#B0BF1A", "#4CC552", "#CECECE", "#EDC9AF", "#FFDEAD", "#25383C", "#DA8A67", "#FFA07A", "#87CEEB", "#A23BEC", "#7CFC00", "#FBCFCD", "#737CA1", "#C32148", "#9D00FF", "#EDDA74", "#56A5EC", "#B3446C", "#AF9B60", "#7FFFD4", "#E799A3", "#800517", "#40E0D0", "#2B1B17", "#665D1E", "#87F717", "#810541", "#FFF5EE", "#848B79", "#4E9258", "#F67280", "#29465B", "#B38481", "#2B60DE", "#85BB65", "#0000A5", "#C68E17", "#EE82EE", "#D891EF", "#F5FFFA", "#FFE4E1", "#FF69B4", "#73A16C", "#78866B", "#7E3517", "#BCB88A", "#7DFDFE", "#FF8040", "#6495ED", "#98FB98", "#348781", "#228B22", "#CCFB5D", "#8E7618", "#347C17", "#C5908E", "#FFE4B5", "#F9966B", "#E56E94", "#FD349C", "#38ACEC", "#551606", "#C48189", "#566D7E", "#E9CFEC", "#BCC6CC", "#0020C2", "#461B7E", "#FBF6D9", "#5453A6", "#F5F5DC", "#E9AB17", "#DC381F", "#C2DFFF", "#E6E6FA", "#657383", "#3B9C9C", "#D4A017", "#C6AEC7", "#C38EC7", "#6A287E", "#34282C", "#FFFFFF", "#4B0150", "#413839", "#C11B17", "#347C2C", "#FFFF00", "#C47451", "#DCD0FF", "#915F6D", "#34A56F", "#C34A2C", "#FFDAB9", "#48CCCD", "#483C32", "#654321", "#000000", "#FAAFBE", "#4169E1", "#92C7C7", "#CFECEC", "#FFCCCB", "#7575CF", "#DC143C", "#033E3E", "#C24641", "#AAF0D1", "#FFD700", "#893BFF", "#E67451", "#6CBB3C", "#848482", "#BC8F8F", "#997070", "#808080", "#F5F5F5", "#E2A76F", "#49413F", "#EAC117", "#0041C2", "#50EBEC", "#EEE8AA", "#6B8E23", "#0000CD", "#550A35", "#F0FFF0", "#F535AA", "#FFC0CB", "#ECC5C0", "#F778A1", "#16F529", "#D4AF37", "#3C565B", "#191970", "#E3319D", "#7FE817", "#A1C935", "#D1D0CE", "#F2A2E8", "#BA55D3", "#C58917", "#3EA055", "#008B8B", "#306754", "#757575", "#FFE5B4", "#FFDDCA", "#8C001A", "#513B1C", "#CC6600", "#FFFFCC", "#800000", "#DEB887", "#A9A9A9", "#9AFEFF", "#B87333", "#F4A460", "#FFD801", "#F5E216", "#FAF0DD", "#7E587E", "#F6BE00", "#736AFF", "#98AFC7", "#CA226B", "#F87431", "#E38AAE", "#F9DB24", "#DB7093", "#307D7E", "#660000", "#31906E", "#F7E7CE", "#54C571", "#FEA3AA", "#C9BE62", "#43BFC7", "#A70D2A", "#DAA520", "#835C3B", "#00FF7F", "#FFCBA4", "#00FA9A", "#B93B8F", "#A0CFEC", "#FBFBF9", "#C88141", "#3EA99F", "#488AC7", "#77DD77", "#E41B17", "#9172EC", "#FFFACD", "#FAFAD2", "#B86500", "#FFF8DC", "#E0FFFF", "#4B5320", "#4682B4", "#1E90FF", "#AFDCEC", "#9400D3", "#36013F", "#FAF0E6", "#254117", "#E9967A", "#43C6DB", "#E66C2C", "#E0B0FF", "#9DC209", "#4AA02C", "#806517", "#C48793", "#0000A0", "#FDD017", "#E6A9EC", "#F0FFFF", "#151B8D", "#6D6968", "#E9E4D4", "#838996", "#41A317", "#87CEFA", "#FEFCFF", "#0C090A", "#9932CC", "#E5E4E2", "#A0522D", "#FFDFDD", "#6AA121", "#B0CFDE", "#2C3539", "#D8BFD8", "#87AFC7", "#20B2AA", "#FFE4C4", "#463E3F", "#57E964", "#EBDDE2", "#78C7C7", "#625D5D", "#CD853F", "#12AD2B", "#8B4513", "#8EEBEC", "#E42217", "#4E5180", "#A74AC7", "#778899", "#2E8B57", "#E238EC", "#B2C248", "#F0F8FF", "#B041FF", "#B4CFEC", "#CCCCFF", "#81D8D0", "#6F4E37", "#8A2BE2", "#C9DFEC", "#6D7B8D", "#99C68E", "#FFDF00", "#BAB86C", "#045F5F", "#F8F0E3", "#FF1493", "#1F45FC", "#FBB117", "#DDA0DD", "#EDE275", "#FC6C85", "#FFDB58", "#454545", "#FF6700"];
  let index = 0;
  function next() {
    index = index++ < colors.length - 1 ? index : 0;
    return colors[index];
  }
  function current() {
    return colors[index];
  }
  return {
    next: next,
    current: current,
  };
})();

function removeAnimation(animation) {
  let index = animations.indexOf(animation);
  if (index > -1) animations.splice(index, 1);
}

function calcPageFillRadius(x, y) {
  let l = Math.max(x - 0, canvasW - x);
  let h = Math.max(y - 0, canvasH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

function addClickListeners() {
  document.addEventListener("click", handleEvent);
  document.addEventListener("mousedown", handleEvent);
}

function handleEvent(e) {
  let currentColor = pickColor.current();
  let nextColor = pickColor.next();
  let targetR = calcPageFillRadius(e.pageX, e.pageY);
  let rippleSize = Math.min(200, canvasW * 0.4);
  let minCoverDuration = 750;

  const pageFill = new Circle({
    x: e.pageX,
    y: e.pageY,
    r: 0,
    fill: nextColor,
  });

  const fillAnimation = anime({
    targets: pageFill,
    r: targetR,
    duration: Math.max(targetR / 2, minCoverDuration),
    easing: "easeOutQuart",
    complete: function () {
      bgColor = pageFill.fill;
      removeAnimation(fillAnimation);
    },
  });

  // 6.2 Project
  let ripple = new Circle({
    x: e.pageX,
    y: e.pageY,
    r: 0,
    fill: currentColor,
    stroke: {
      width: 3,
      color: currentColor,
    },
    opacity: 1,
  });

  let rippleAnimation = anime({
    targets: ripple,
    r: rippleSize,
    opacity: 0,
    easing: "easeOutExpo",
    duration: 900,
    complete: removeAnimation,
  });

  // 6.3 Project
  let particles = [];
  for (let i = 0; i < 32; i++) {
    let particle = new Circle({
      x: e.pageX,
      y: e.pageY,
      fill: currentColor,
      r: anime.random(24, 48),
    });
    particles.push(particle);
  }

  let particlesAnimation = anime({
    targets: particles,
    x: function (particle) {
      return particle.x + anime.random(rippleSize, -rippleSize);
    },
    y: function (particle) {
      return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
    },
    r: 0,
    easing: "easeOutExpo",
    duration: anime.random(1000, 1300),
    complete: removeAnimation,
  });
  animations.push(fillAnimation, rippleAnimation, particlesAnimation);
}

function extend(a, b) {
  for (let key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

// 6.1project
const Circle = function (opts) {
  extend(this, opts);
};

Circle.prototype.draw = function () {
  ctx.globalAlpha = this.opacity || 1;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  if (this.stroke) {
    ctx.strokeStyle = this.stroke.color;
    ctx.lineWidth = this.stroke.width;
    ctx.stroke();
  }
  if (this.fill) {
    ctx.fillStyle = this.fill;
    ctx.fill();
  }
  ctx.closePath();
  ctx.globalAlpha = 1;
};

// no task for code:
let animate = anime({
  duration: Infinity,
  update: function () {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasW, canvasH);
    animations.forEach(function (anim) {
      anim.animatables.forEach(function (animatable) {
        animatable.target.draw();
      });
    });
  },
});

const resizeCanvas = function () {
  canvasW = window.innerWidth;
  canvasH = window.innerHeight;
  canvas1.width = canvasW * devicePixelRatio;
  canvas1.height = canvasH * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
};

(function init() {
  resizeCanvas();
  if (window.CP) {
    window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
  }

  window.addEventListener("resize", resizeCanvas);
  addClickListeners();
  if (!!window.location.pathname.match(/fullcpgrid/)) {
    startFauxClicking();
  }
  handleInactiveUser();
})();

function handleInactiveUser() {
  let inactive = setTimeout(function () {
    NoClick(canvasW / 2, canvasH / 2);
  }, 2000);

  function clearInactiveTimeout() {
    clearTimeout(inactive);
    document.removeEventListener("mousedown", clearInactiveTimeout);
    document.removeEventListener("touchstart", clearInactiveTimeout);
  }
  document.addEventListener("mousedown", clearInactiveTimeout);
  document.addEventListener("touchstart", clearInactiveTimeout);
}

function startFauxClicking() {
  setTimeout(function () {
    NoClick(
      anime.random(canvasW * 0.2, canvasW * 0.8),
      anime.random(canvasH * 0.2, canvasH * 0.8)
    );
    startFauxClicking();
  }, anime.random(200, 900));
}

function NoClick(x, y) {
  let NoClick = new Event("mousedown");
  NoClick.pageX = x;
  NoClick.pageY = y;
  document.dispatchEvent(NoClick);
}

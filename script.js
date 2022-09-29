let pattern = '';

for (let i = 0; i < 4; i++) {
  if (Math.random() < 0.5) {
    pattern += 'D ';
  } else {
    pattern += '&nbsp; ';
  }
  if (Math.random() < 0.5) {
    pattern += 'u ';
  } else {
    pattern += '&nbsp; ';
  }
}

document.getElementById("pattern").innerHTML = pattern;

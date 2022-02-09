module.exports = (name1, name2, result, err) => {
  if (!name1 || !name2) return err("Need two name arguments");
  if (name1.toLowerCase() === name2.toLowerCase())
    return err("Both names cannot be the same");

  let first = name1.toUpperCase().replaceAll(" ", ""),
    second = name2.toUpperCase().replaceAll(" ", "");
  if (first === "" || second === "") return err("Whitespaces aren't names");

  [...first].forEach((char) => {
    if (second.includes(char)) {
      second = second.replace(char, "");
      first = first.replace(char, "");
    }
  });

  let l = (first + second).length,
    ar = ["F", "L", "A", "M", "E", "S"],
    stp = 0;

  for (let x = 6; x > 1; x--) {
    let ptr = (l % x) + stp;
    if (ptr > x) {
      ptr = ptr % x;
    }
    if (ptr == 0) {
      ptr = ar.length;
    }
    ar.splice(ptr - 1, 1);
    stp = ptr - 1;
  }

  result(ar.join(""));
};

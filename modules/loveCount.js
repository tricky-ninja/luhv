module.exports = (name1, name2, love, err) => {
  if (!name1 || !name2) return err("Need 2 name arguments");

  if (name1.toLowerCase() === name2.toLowerCase())
    return err("Both names cannot be the same");

  let fname = name1.toUpperCase().replaceAll(" ", ""),
    sname = name2.toUpperCase().replaceAll(" ", "");

  if (fname === "" || sname === "") return err("Whitespaces aren't names");

  let totalName = fname + sname,
    three = "AEIO",
    four = "UV",
    lovecount = 0;

  [...totalName].forEach((char) => {
    if (four.includes(char)) lovecount += 4;
    else if (three.includes(char)) lovecount += 3;
    else if (char === "L") lovecount += 1;
  });
  lovecount /= totalName.length / 8;

  let rem = Math.floor(lovecount / 2);
  let Total = rem * 10 - totalName.length / 2;
  if (Total < 0) Total = 0;
  if (Total > 99) Total = 99;

  let result = Math.floor(Total).toString();
  love(result);
};

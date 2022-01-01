// const birthday = new Date("11/26/2004");
// let today = new Date();

// let DiffYear = today.getFullYear() - birthday.getFullYear();

  var d1 = 26;
  var m1 = 11;
  var y1 = 2004;

  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  var d = d2 - d1;
  var m = m2 - m1;
  var y = y2 - y1;

  let DiffYear = y + " Years, " + m + " Months & " + d + " Days";

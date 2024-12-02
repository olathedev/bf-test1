const checklongestPrefix = (arrayOfStrings) => {
  if (!arrayOfStrings) return "";

  arrayOfStrings.sort();
  const first = arrayOfStrings[0];
  const last = arrayOfStrings[arrayOfStrings.length - 1];

  let i = 0;

  while (i < first.length && i < last.length && first[i] === last[i]) {
    i++;
  }

  if (first.substring(0, i)) {
    return first.substring(0, i);
  }

  return " '' ";
};

// Test for a case where no prefix macth
console.log('no prefix match')
console.log(checklongestPrefix(["far", "ess", "aff"]));


// test for case with identical prefixes
console.log('case where prefix match')
console.log(checklongestPrefix(["shalewa", "shalaye", "shoko"]))

// GRACIAS!!!

test("TESTS", function(assert) {
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-1:RtI");
  assert.propEqual(convertRomanToInteger("111"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-2:RtI");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-3:RtI");
  assert.propEqual(convertRomanToInteger("K"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-4:RtI");
  assert.propEqual(convertRomanToInteger("M.C"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-5:RtI");
  assert.propEqual(convertRomanToInteger('7'), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-6:RtI");
  assert.propEqual(convertRomanToInteger("-M"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-7:RtI");
  assert.propEqual(convertRomanToInteger("LXXXIX"), {value: 89, message: '', result: true}, "TC-8:RtI");
  assert.propEqual(convertRomanToInteger("EL"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-9:RtI");
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-10:RtI");
  assert.propEqual(convertRomanToInteger(" "), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-11:RtI");
  assert.propEqual(convertRomanToInteger("I"), {value: 1, message: '', result: true}, "TC-12:RtI");
  assert.propEqual(convertRomanToInteger("LXXX1X"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-13:RtI");
  assert.propEqual(convertRomanToInteger("lxxxix"), {value: 89, message: '', result: true}, "TC-14:RtI");//added from task 4



  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-1:ItR");
  assert.propEqual(convertIntegerToRoman("X"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-2:ItR");
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-3:ItR");
  assert.propEqual(convertIntegerToRoman("0"), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-4:ItR");
  assert.propEqual(convertIntegerToRoman(-1), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-5:ItR");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-6:ItR");
  assert.propEqual(convertIntegerToRoman(643), {value: "DCXLIII", message: '', result: true}, "TC-7:ItR");
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-8:ItR");
  assert.propEqual(convertIntegerToRoman("25"), {value: "XXV", message: '', result: true}, "TC-9:ItR");//different from task 4
  assert.propEqual(convertIntegerToRoman(6.5), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-10:ItR");
  assert.propEqual(convertIntegerToRoman(9.0), {value: "IX", message: '', result: true}, "TC-11:ItR");//different from task 4
  assert.propEqual(convertIntegerToRoman(6/7), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-12:ItR");
  assert.propEqual(convertIntegerToRoman(6/3), {value: "II", message: '', result: true}, "TC-13:ItR");
  assert.propEqual(convertIntegerToRoman("one"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-14:ItR");
});

/*
test("INTEGER to ROMAN", function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-1");
  assert.propEqual(convertIntegerToRoman("X"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-2");
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-3");
  assert.propEqual(convertIntegerToRoman("0"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-4");
  assert.propEqual(convertIntegerToRoman(-1), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-5");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: 'Out of range (1-3999)', result: false}, "TC-6");
  assert.propEqual(convertIntegerToRoman(643), {value: "DCXLIII", message: '', result: false}, "TC-7");
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-8");
  assert.propEqual(convertIntegerToRoman("25"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-9");
  assert.propEqual(convertIntegerToRoman(6.5), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-10");
  assert.propEqual(convertIntegerToRoman(9.0), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-11");
  assert.propEqual(convertIntegerToRoman(6/7), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-12");
  assert.propEqual(convertIntegerToRoman("one"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-13");
});*/


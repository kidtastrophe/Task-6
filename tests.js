test("Example", function(assert) {
  assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-1");
  assert.propEqual(convertIntegerToRoman("X"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-2");
  assert.propEqual(convertRomanToInteger("X"), {value: 10, message: '', result: true}, "TC-3");
  assert.propEqual(convertRomanToInteger("111"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-4");
  assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: "", result: true}, "TC-5");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-6");
  assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: "Out of range (1-3999)", result: false}, "TC-7");
  assert.propEqual(convertIntegerToRoman(0), {value: 0, message: "Out of range (1-3999)", result: false}, "TC-9");
  assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-10");
});

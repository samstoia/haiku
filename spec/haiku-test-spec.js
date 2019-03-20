import Haiku from "./../src/checker.js"

describe('syllableChecker', function() {
  it("should check how many syllables a word has", function(){
    let testHaiku = new Haiku("hello", "b", "c");
    let count = testHaiku.syllableChecker(testHaiku.line1);
    expect(count).toEqual(2);
  });

  it("should not count repeated vowels", function(){
    let testHaiku = new Haiku("boo", "b", "c");
    let count = testHaiku.syllableChecker(testHaiku.line1);
    expect(count).toEqual(1);
  });

  it("should add a syllable if word ends in y", function(){
    let testHaiku = new Haiku("crummy", "b", "c");
    let count = testHaiku.syllableChecker(testHaiku.line1);
    expect(count).toEqual(2);
  })
});

describe("isValid", function(){
  it("should verify a correct haiku", function(){
    let testHaiku = new Haiku("hi my name is bob", "hi my name is bob bob bob", "hi my name is bob");
    let result = testHaiku.isValid();
    expect(result).toEqual("That is a Haiku!");
  });

  it("should tell when a haiku is invalid", function(){
    let testHaiku = new Haiku("hi my name is bob", "hi my name is bob bob", "hi my name is bob");
    let result = testHaiku.isValid();
    expect(result).toEqual("That is not a Haiku");
  });
});

describe("generateHaiku", function(){
  it("should generate a correct haiku", function(){
    let haiku = new Haiku("", "", "");
    let testHaiku = haiku.generateHaiku();
    console.log(testHaiku.line1 + testHaiku.line2 + testHaiku.line3);
    let result = testHaiku.isValid();
    expect(result).toEqual("That is a Haiku!");
  });
});

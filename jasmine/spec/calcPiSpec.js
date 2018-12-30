describe("Simulation parameters should not be undefined or null", function () {

  const sideLengthInput = document.createElement('input');
  sideLengthInput.id = "sizeInput";
  sideLengthInput.value=100;

  const numberOfPointsInput = document.createElement('input')
  numberOfPointsInput.id= "numberOfPointsInput";
  numberOfPointsInput.value=999;

  it("when cookies are not checked", function () {
    document.body.appendChild(sideLengthInput);
    document.body.appendChild(numberOfPointsInput);
    let { sideLength, numberOfPoints } = getInputParameters(false);
    sideLengthInput.parentElement.removeChild(sideLengthInput);
    numberOfPointsInput.parentElement.removeChild(numberOfPointsInput);

    expect(sideLength).toBeDefined();
    expect(numberOfPoints).toBeDefined();
  });

  it("when cookies are checked", function () {
    document.body.appendChild(sideLengthInput);
    document.body.appendChild(numberOfPointsInput);
    let { sideLength, numberOfPoints } = getInputParameters(true);
    sideLengthInput.parentElement.removeChild(sideLengthInput);
    numberOfPointsInput.parentElement.removeChild(numberOfPointsInput);

    expect(sideLength).toBeDefined();
    expect(numberOfPoints).toBeDefined();
  });
});

describe("Generated output should ", function () {
  it("be correct", function () {
    expect(generateOutput(100,25)).toContain("3.2");
    expect(generateOutput(100,25)).toContain("80");
    expect(generateOutput(100,25)).toContain("20%");
  });
  it("not have undefined values", function () {
    expect(generateOutput(100,12)).not.toContain("undefined");
    expect(generateOutput()).not.toContain("undefined");
  });

  it("not have NaN values", function () {
    expect(generateOutput(100,12)).not.toContain("NaN");
    expect(generateOutput(0,0)).not.toContain("NaN");
  });

  it("not have null values", function () {
    expect(generateOutput(100,12)).not.toContain("null");
    expect(generateOutput(null,null)).not.toContain("null");
  });

});

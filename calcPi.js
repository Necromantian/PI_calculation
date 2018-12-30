function refresh(checkCookies = false) {
    let { sideLength, numberOfPoints } = getInputParameters(checkCookies);

    let c = document.getElementById("myCanvas");
    c.width = c.height = sideLength;
    let ctx = c.getContext("2d")

    let circle = new Circle(ctx, sideLength);
    circle.draw();

    let inside = 0;
    let outside = 0;
    for (let i = 0; i < numberOfPoints; i++) {
        let point = new Point(ctx, sideLength);
        let isInCircle = point.checkIfInCircle(circle);
        let color = "";
        if (isInCircle) {
            inside++;
            color = "#FF0000";
        } else {
            outside++;
            color = "#0000FF";
        }

        point.draw(color, 2);
    }

    document.getElementById("output").innerHTML = generateOutput(inside, outside);
};

function getInputParameters(checkCookies) {
    let savedNumberOfPoints = localStorage.getItem('iterations');
    let savedSize = localStorage.getItem('size');

    let sideLength;
    let numberOfPoints;
    if (checkCookies === false || savedNumberOfPoints === null || savedSize === null) {
        sideLength = document.getElementById("sizeInput").value;
        numberOfPoints = document.getElementById("numberOfPointsInput").value;
    } else {
        numberOfPoints = savedNumberOfPoints;
        sideLength = savedSize;
        document.getElementById("sizeInput").value = sideLength;
        document.getElementById("numberOfPointsInput").value = numberOfPoints;
    }

    localStorage.setItem('iterations', numberOfPoints);
    localStorage.setItem('size', sideLength);

    return { sideLength, numberOfPoints };
};

function generateOutput(insideCount, outsideCount) {
    try {
        if (insideCount == undefined || outsideCount == undefined) //null or undefined
            throw ('one of parameters is null or undefined!');

        let pi = 4 * insideCount / (insideCount + outsideCount);
        let procentOfDotsInside = (insideCount * 100 / (insideCount + outsideCount)).toFixed();
        let procentOfDotsOutside = (outsideCount * 100 / (insideCount + outsideCount)).toFixed();

        if (isNaN(pi) || isNaN(procentOfDotsInside) || isNaN(procentOfDotsOutside))
            throw ('one of the results of calculations is NaN (Not a Number)');

        let output =
            `    <span>Dots inside: ${insideCount} (${procentOfDotsInside}%)
    Dots outside: ${outsideCount} (${procentOfDotsOutside}%)
    <b><u>Calculated pi: ${pi.toFixed(4)}</u></b></span>`;

        return output;
    }
    catch (e) {
        console.error(`Function generateOutput -> ${e}`); //some logger in future
        return `Calculation error occured.
    Try to put different parameters.`;
    }

};



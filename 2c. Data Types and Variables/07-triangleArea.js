function triangleArea(a, b, c) {
    let semiPerimeter = 1 / 2 * (a + b + c);
    let area = Math.sqrt(semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c));
    console.log(area);
}


triangleArea(2, 3.5, 4); //3. 4994419197923547
triangleArea(3, 5.5, 4); //5.854685623498498

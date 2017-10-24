function testFactorial(a) {
    var x = 1;
    for (var z = 2; z <= a; z = z + 1)
        x *= z;
    return x;
}
const fibonacci = function(n) {
    const sequence = [0, 1, 1];

    if (n < 0) return "OOPS";
    if (n <= 2) return sequence[n];

    for (let i = 0; i < n - 2; i++) {
        sequence[0] = sequence[1];
        sequence[1] = sequence[2];

        sequence[2] = sequence[0] + sequence[1];
    }

    return sequence[2];
};

// Do not edit below this line
module.exports = fibonacci;

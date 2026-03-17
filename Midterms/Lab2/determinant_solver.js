/**
 * Name: Guardo, Don Joshua G.
 * Course: Math 101 - Linear Algebra, UPHSD Molino Campus
 * Assignment: 3x3 Matrix Determinant Solver
 * Date: March 18, 2026
 * Description: Computes the determinant of a specific, hardcoded 3x3 matrix 
 * by performing a cofactor expansion along the first row. 
 * Outputs a detailed step-by-step calculation to the console.
 */

// Define the 3x3 matrix specifically assigned to Guardo, Don Joshua G.
const matrix = [
    [6, 2, 3],
    [4, 5, 1],
    [3, 1, 4]
];

/**
 * Outputs the 3x3 matrix in a bordered, readable format matching the Java output.
 */
const printMatrix = (m) => {
    console.log("===================================================");
    console.log("  3x3 MATRIX DETERMINANT SOLVER");
    console.log("  Student: GUARDO, DON JOSHUA G.");
    console.log("  Assigned Matrix:");
    console.log("===================================================");
    m.forEach(row => {
        console.log(`  | ${row[0].toString().padStart(2)}  ${row[1].toString().padStart(2)}  ${row[2].toString().padStart(2)}  |`);
    });
    console.log("===================================================\n");
};

/**
 * Calculates the determinant for a 2x2 matrix subset (minor).
 */
const computeMinor = (a, b, c, d) => {
    return (a * d) - (b * c);
};

/**
 * Handles the core logic: expanding Row 1, computing minors, applying
 * cofactor signs, and printing the step-by-step proof.
 */
const solveDeterminant = (m) => {
    // Show the matrix first
    printMatrix(m);
    console.log("Expanding along Row 1 (cofactor expansion):\n");

    // Compute the three 2x2 minors for the top row
    const minor11 = computeMinor(m[1][1], m[1][2], m[2][1], m[2][2]);
    const minor12 = computeMinor(m[1][0], m[1][2], m[2][0], m[2][2]);
    const minor13 = computeMinor(m[1][0], m[1][1], m[2][0], m[2][1]);

    // Print the step-by-step math for the minors
    console.log(`  Step 1 — Minor M₁₁: det([${m[1][1]},${m[1][2]}],[${m[2][1]},${m[2][2]}]) = (${m[1][1]}×${m[2][2]}) - (${m[1][2]}×${m[2][1]}) = ${m[1][1]*m[2][2]} - ${m[1][2]*m[2][1]} = ${minor11}`);
    console.log(`  Step 2 — Minor M₁₂: det([${m[1][0]},${m[1][2]}],[${m[2][0]},${m[2][2]}]) = (${m[1][0]}×${m[2][2]}) - (${m[1][2]}×${m[2][0]}) = ${m[1][0]*m[2][2]} - ${m[1][2]*m[2][0]} = ${minor12}`);
    console.log(`  Step 3 — Minor M₁₃: det([${m[1][0]},${m[1][1]}],[${m[2][0]},${m[2][1]}]) = (${m[1][0]}×${m[2][1]}) - (${m[1][1]}×${m[2][0]}) = ${m[1][0]*m[2][1]} - ${m[1][1]*m[2][0]} = ${minor13}\n`);

    // Apply the alternating cofactor signs (+, -, +)
    const cofactor11 = 1 * m[0][0] * minor11;
    const cofactor12 = -1 * m[0][1] * minor12;
    const cofactor13 = 1 * m[0][2] * minor13;

    // Display the cofactor multiplication
    console.log(`  Cofactor C₁₁ = (+1) × ${m[0][0]} × ${minor11} =  ${cofactor11}`);
    console.log(`  Cofactor C₁₂ = (-1) × ${m[0][1]} × ${minor12} = ${cofactor12}`);
    console.log(`  Cofactor C₁₃ = (+1) × ${m[0][2]} × ${minor13} = ${cofactor13}\n`);

    // Sum everything for the final determinant
    const det = cofactor11 + cofactor12 + cofactor13;
    console.log(`  det(M) = ${cofactor11} + (${cofactor12}) + (${cofactor13})\n`);

    // Print final bounding box
    console.log("===================================================");
    console.log(`  ✓  DETERMINANT = ${det}`);
    console.log("===================================================");

    // Explicitly handle a zero determinant per the instructions
    if (det === 0) {
        console.log("The matrix is SINGULAR — it has no inverse.");
    }
};

// Run the script
solveDeterminant(matrix);
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25, .33, .31,
    .25, .29, .27, .22, .31, .25, .25, .33,
    .21, .25, .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25, .25, .25,
    .27, .25, .26, .29];

var highScore, bestSolutions;

//
// Obliczamy najwyższy wynik i wyświetlamy go.
//
highScore = printAndGetHighScore(scores);
console.log("Liczba testów: " + scores.length);
console.log("Największa liczba wytworzonych baniek: " + highScore);

//
// Określamy najlepszy pły i wyświetlamy go.
//
bestSolutions = getBestResults(scores, highScore);
console.log("Płyny z najlepszym wynikiem: " + bestSolutions);

//
// Określamy najbardziej opłacalny płyn i wyświetlamy go.
//
mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Płyn numer " + mostCostEffective + " jest najbardziej opłacalny.");

function printAndGetHighScore(scores) {
    var highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output = "Płyn do baniek nr " + i + " wynik: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}


function getMostCostEffectiveSolution(scores, costs, highscore) {
    var cost = 100.00; // Wartość większa od najwyższego kosztu.
    var index;

    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highscore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}

//
// Innym sposobem napisania tej funkcji jest użycie tablicy
// bestSolutions oraz jej indeksu do określenia kosztu tego płynu.
// Takie rozwiązanie jest nieco bardziej wydajne, lecz mniejsz
// czytelne.
//
function getMostCostEffectiveSolution2(bestSolutions, costs, highscore) {
    var cost = 100.0;
    var solutionIndex;
    var lowCostIndex;

    for (var i = 0; i < bestSolutions.length; i++) {
        solutionIndex = bestSolutions[i];
        if (cost > costs[solutionIndex]) {
            lowCostIndex = solutionIndex;
            cost = costs[i];
        }
    }
    return lowCostIndex;
}
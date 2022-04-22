'use strict';

function getScore(playerOneScore, playerTwoScore) {
    const scoreNames = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty",
        deuce: "Deuce",
        advantageAndWin: {
            "1": "Advantage player1",
            "-1": "Advantage player2",
            "2": "Win for player1",
            "-2": "Win for player2",
            getScoreName: (playerOneScore, playerTwoScore) => scoreNames.advantageAndWin[Math.max(-2, Math.min(2, playerOneScore - playerTwoScore)).toString()]
        }
    };

    if (playerOneScore === playerTwoScore) {
        if (playerOneScore >= 3) { return scoreNames.deuce; }

        return `${scoreNames[playerOneScore]}-All`;
    }

    if (playerOneScore >= 4 || playerTwoScore >= 4) {
        return scoreNames.advantageAndWin.getScoreName(playerOneScore, playerTwoScore);
    }

    return `${scoreNames[playerOneScore]}-${scoreNames[playerTwoScore]}`;
}

module.exports = getScore;

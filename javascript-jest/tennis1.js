'use strict';

function getScore(playerOneScore, playerTwoScore) {
    const scoreNames = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty"
    };
    const equalScoreNames = {
        0: "Love-All",
        1: "Fifteen-All",
        2: "Thirty-All",
        3: "Deuce",
    };
    const advantageScoreNames = {
        '1': "Advantage player1",
        '-1': "Advantage player2",
        '2': "Win for player1",
        '-2': "Win for player2",
    };

    if (playerOneScore === playerTwoScore) {
        return equalScoreNames[Math.min(playerOneScore, 3)];
    }

    if (playerOneScore >= 4 || playerTwoScore >= 4) {
        return advantageScoreNames["" + Math.max(-2, Math.min(2, playerOneScore - playerTwoScore))];
    }

    return `${scoreNames[playerOneScore]}-${scoreNames[playerTwoScore]}`;

}

module.exports = getScore;

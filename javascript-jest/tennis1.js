'use strict';

function getScore(playerOneScore, playerTwoScore) {
    const scoreNames = new ScoreNames();
    if (playerOneScore === playerTwoScore) {
        return scoreNames.getTiedScoreName(playerOneScore);
    }

    if (playerOneScore >= 4 || playerTwoScore >= 4) {
        return scoreNames.getAdvantageScoreName(playerOneScore, playerTwoScore);
    }

    return scoreNames.getScoreName(playerOneScore, playerTwoScore)
}

class ScoreNames {
    #scoreNames = {
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
        }
    };

    getScoreName(playerOneScore, playerTwoScore) {
        return `${this.#scoreNames[playerOneScore]}-${this.#scoreNames[playerTwoScore]}`
    }

    getTiedScoreName(score) {
        if (score >= 3) { return this.#scoreNames.deuce; }
        return `${this.#scoreNames[score]}-All`
    }

    getAdvantageScoreName(playerOneScore, playerTwoScore) {
        return this.#scoreNames.advantageAndWin[Math.max(-2, Math.min(2, playerOneScore - playerTwoScore)).toString()]
    }
}

module.exports = getScore;

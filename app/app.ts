/// <reference path="player.ts" />

function startGame() {

    let playerName: string | undefined = getInputValue('playername');

    logPlayer(playerName);

    postScore(80, playerName);
    postScore(-5, playerName);
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {

    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }

    let scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

function getInputValue(elementID: string): string | undefined {
    let inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}

document.getElementById('startGame')!.addEventListener('click', startGame);

let logMessage = (message: string): void => console.log(message);

function logError(error: string): void {
    console.error(error);
}

let firstPlayer : Player = new Player();

firstPlayer.name = 'Anil';
console.log(firstPlayer.formatName());

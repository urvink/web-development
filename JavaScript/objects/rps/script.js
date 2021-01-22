console.log("HOWDY");

// const paper = 0;
// const rock = 1;
// const scissor = 2;



function start(player1, computer) {
    console.log("Start game");
    game = new Game();
}

/**
 * img
 * id
 * 
 */
class Game{
    constructor(rock, paper, scissor){
        this.p1 = new Player;
        this.pc = new Player;
        this.rock = rock;
        this.paper = paper;
        this.scissor = scissor;

        function checkWinner(p1, pc) {
            switch (p1) {
                case rock:
                    if (pc === scissor) {
                        return `${p1} WINS!`;
                    }else if (pc === p1 ){
                        return `${p1} DRAW ${pc}`;
                    }
                    break;
                case paper:
                    if (pc === rock) {
                        return `${p1} WINS!`;
                    }
                    break;
                case scissor:
                    if (pc === rock) {
                        return `${p1} WINS!`;
                    }
                    break;
                default:
                //
                    break;
            }
            

            document.getElementById('msg') = checkWinner(p1, pc);
        }
    }
}

class GO{
    constructor(id, go_obj){
        this.id = id;
        this.go_obj = go_obj;
    }
}

const paper = new GO("✋");
const rock = new GO("🗿");
const scissor = new GO("✂️");


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

/**
 * AnimationFrame object allows to control framerate of the animation passed inside the constructor.
 */
class AnimationFrame {
    /**
     * @constructor CreatesAnimationFrame object which allows to control framerate of the animation.
     * @param {number} fps Desired framerate of the animation (def. 60 fps).
     * @param {function} animate Animation function to be controlled.
     */
    constructor(fps = 60, animate) {
        this.requestID = 0;
        this.fps = fps;
        this.animate = animate;
    }

    /**
     * Starts the animation
     */
    start() {
        let then = performance.now();
        const interval = 1000 / this.fps;
        const tolerance = 0.1;

        const animateLoop = now => {
            this.requestID = requestAnimationFrame(animateLoop);
            const delta = now - then;

            if (delta >= interval - tolerance) {
                then = now - (delta % interval);
                this.animate(delta);
            }
        };
        this.requestID = requestAnimationFrame(animateLoop);
    }
    /**
    * Stops the animation
    */
    stop() {
        cancelAnimationFrame(this.requestID);
    }

}
/**
 * Sprite object represents image to be displayed in game.
 */
class Sprite extends Image {
    /**
    * Creates a Sprite object which represents image to be displayed in game.
    * @param {string}  src Source of the image to be displayed in game.   
    */
    constructor(src) {
        super();
        this.src = src;
    };
};

/**
 * Contains all the images of the woodman and a method to draw them on Canvas.
 */
const woodman = {
    standingLeft: new Sprite("sprites/woodman/wdman_stand_l.png"),
    standingRight: new Sprite("sprites/woodman/wdman_stand_r.png"),
    choppingLeft: new Sprite("sprites/woodman/wdman_chop_l.png",),
    choppingRight: new Sprite("sprites/woodman/wdman_chop_r.png"),

    /**
     * Draws the image on Canvas depending on the input value.
     * @param {number} input Selects the image of woodman to be displayed
     * - 1: Woodman standing on the left side of the tree
     * - 2: Woodman chopping the tree from the left side
     * - 3: Woodman standing on the right side of the tree
     * - 4: Woodman chopping the tree from the right side
     */
    draw(input) {
        switch (input) {
            case 1:
                ctx.drawImage(this.standingLeft, 50, 405);
                break;
            case 2:
                ctx.drawImage(this.choppingLeft, 50, 405);
                break;
            case 3:
                ctx.drawImage(this.standingRight, 215, 405);
                break;
            case 4:
                ctx.drawImage(this.choppingRight, 215, 405);
                break;

            default:
                break;
        };
    }
};

/**
 * Contains all the images of the tree fragments. 
 */
const tree = {
    trunkBottom: new Sprite("sprites/tree/trunk_bottom.png"),
    trunkPlain: new Sprite("sprites/tree/trunk_plain.png"),
    branchLargeLeft: new Sprite("sprites/tree/branch_lg_l.png"),
    branchLargeRight: new Sprite("sprites/tree/branch_lg_r.png"),
    branchSmallLeft: new Sprite("sprites/tree/branch_sm_l.png"),
    branchSmallRight: new Sprite("sprites/tree/branch_sm_r.png"),
};

/**
 * Represents current state of the trees trunk.
 */
const trunk = {
    /**
     * Contains current state of the trunk from bottom to the top of the tree
     * (max. 5 elements displayed at once).
     */
    queue: [
        tree.trunkPlain,
        tree.branchLargeLeft,
        tree.branchLargeRight,
        tree.branchSmallLeft,
        tree.branchSmallRight
    ],

    /**
     * Contains co-ordinates of the tree trunk fragments used to properly draw them in Canvas.
     * @value [x, y]
     * - x - x co-ordinate of Canvas
     * - y - y co-ordinate of Canvas
     */
    position: [
        [45, 400],
        [45, 300],
        [45, 200],
        [45, 100],
        [45, 0]
    ],

    /**
     * Draws the tree trunk in Canvas.
     */
    draw() {
        ctx.drawImage(tree.trunkBottom, 145, 500);
        this.queue.forEach((el, i) => {
            if (el != 0)
                ctx.drawImage(el, ...trunk.position[i]);
        });
    },

    /**
     * Removes the first element of the queue and pushes random new trunk fragment.
     */
    chop() {
        this.queue.shift();
        newTrunkQueueElementNumber = Math.floor(Math.random() * 5);
        switch (newTrunkQueueElementNumber) {
            case 0:
                this.queue.push(tree.trunkPlain);
                break;
            case 1:
                this.queue.push(tree.branchLargeLeft);
                break;
            case 2:
                this.queue.push(tree.branchLargeRight);
                break;
            case 3:
                this.queue.push(tree.branchSmallLeft);
                break;
            case 4:
                this.queue.push(tree.branchSmallRight);
                break;

            default:
                break;
        }

    }


};


/**
 * Contains all the images of the ground and a method to draw them on Canvas. 
 */
const ground = {
    left: new Sprite("sprites/ground/ground_l.png"),
    right: new Sprite("sprites/ground/ground_r.png"),

    draw() {
        ctx.drawImage(this.left, 0, 565);
        ctx.drawImage(this.right, 240, 565);
    }
};

/**
 * Handles users input.
 * @property value - contains information about user input
 * - 1: LeftArrow   ->  up
 * - 2: LeftArrow   ->  down
 * - 3: RightArrow  ->  up
 * - 3: RightArrow  ->  down
 */
const userInput = {
    value: 1,

    keyDownHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            userInput.value = 4;
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            userInput.value = 2;
        }
    },

    keyUpHandler(e) {
        if (e.key == "Right" || e.key == "ArrowRight") {
            userInput.value = 3;
            trunk.chop();
            game.addScore();
        }
        else if (e.key == "Left" || e.key == "ArrowLeft") {
            userInput.value = 1;
            trunk.chop();
            game.addScore();
        }
    }
};

document.addEventListener("keydown", userInput.keyDownHandler, false);
document.addEventListener("keyup", userInput.keyUpHandler, false);

const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
};

const drawFrame = () => {
    clearCanvas();
    ground.draw();
    trunk.draw();
    woodman.draw(userInput.value);
    collisionDetection();
};

/**
 * Contains information about animation, score and provides method which restarts the game.
 */
const game = {
    animation: null,
    score: 0,
    
    addScore() {
        this.score++;
    },
    restart() {
        this.score = 0;
        trunk.queue = [
            tree.trunkPlain,
            tree.branchLargeLeft,
            tree.branchLargeRight,
            tree.branchSmallLeft,
            tree.branchSmallRight
        ];
        userInput.value = 1;
        game.animation.start();
    }
};

/**
 * Detects if the woodman hit the three brunch.
 * If he did it stops the game.animation.
 */
const collisionDetection = () => {
    if (userInput.value === 1 && trunk.queue[0] == tree.branchLargeLeft ||
        userInput.value === 1 && trunk.queue[0] == tree.branchSmallLeft ||
        userInput.value === 3 && trunk.queue[0] == tree.branchLargeRight ||
        userInput.value === 3 && trunk.queue[0] == tree.branchSmallRight) {
        game.animation.stop();
        if (confirm("GAME OVER\nScore: " + game.score + "\n Try again?")) game.restart();
    } else;
};

window.addEventListener("load", () => {
    game.animation = new AnimationFrame(30, drawFrame);
    game.animation.start();
});


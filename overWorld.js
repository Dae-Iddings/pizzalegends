class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
      }
// code does nothing till init is called
    init() {
        const image = new Image();
        image.onload = () => {
        this.ctx.drawImage(image, 0, 0); // what image to draw and x y cord of where to draw starting in top left corner
        };
        image.src = 'images/maps/DemoLower.png';
        // canvas images stack new things cover up old
        const x = 5;
        const y = 6;
        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
            shadow, 
            0, 
            0, 
            32, 
            32, 
            x * 16 - 8, 
            y * 16 -18, 
            32, 
            32,
            )
        }
        shadow.src = 'images/characters/shadow.png'
        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero, // what we are drawing
                0, //  left cut
                0, // top cut
                32, // width of cut
                32, // height of cut
                x * 16 - 8, // *16 compensates for background being 16 x 16 and hero being 32 x 32
                y * 16 -18, // -8 / -18 compensates for extra space around hero
                32, //size of character 
                32, //size of character
                )
        }
        hero.src = 'images/characters/people/hero.png'
    }

}
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
        const x = 0;
        const y = 0;
        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero, // what we are drawing
                0, //  left cut
                0, // top cut
                32, // width of cut
                32, // height of cut
                x,
                y,
                32, //size of character 
                32, //size of character
                )
        }
        hero.src = 'images/characters/people/hero.png'
    }

}
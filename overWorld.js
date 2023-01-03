class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
      }
// code does nothing till init is called
    init() {
        console.log('Hello from overworld', this)
    }

}
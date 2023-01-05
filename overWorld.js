class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    }
    //fires everysingle frame step is not calling itself its being called when new frame
   startGameLoop() {
    const step = () => {

        //keeps charcters from leaving line when they move 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        //draw lower layer
        this.map.drawLowerImage(this.ctx);

        //draw game objects 
        Object.values(this.map.gameObjects).forEach(object => {
            object.sprite.draw(this.ctx);
            object.x += 0.02;
        })

        //draw upper layer
        this.map.drawUpperImage(this.ctx);
        
        requestAnimationFrame(() => {
            step();
        })
    }
    step();
   }
   // code does nothing till init is called
    init() {
        this.map = new OverworldMap(window.OverworldMaps.Kitchen)
        this.startGameLoop();

       
    }

}
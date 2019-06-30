namespace WGE {
    export class Engine {
        private _count: number;
        private _element: HTMLElement;
        public constructor() {

        }

        //Start up this engine.
        public start(): void {
            this._count = 100;
            this._element = document.getElementById("content") as HTMLElement;
            this.loop();
        }

        //The engine main loop.
        private loop(): void {
            this._element.innerHTML = this._count.toString();
            this._count++;
            requestAnimationFrame(this.loop.bind(this));
        }
    }
}
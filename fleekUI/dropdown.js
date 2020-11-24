class Drop {
    constructor(container) {
        this.container = container;
        this.trigger = container.querySelector('.btn');
        this.text = container.querySelector('.text');
    }
    init() {
        this.trigger.addEventListener('click', () =>{
            this.trigger.classList.toggle('active');
            this.text.classList.toggle('active');
        });
    }
}
export {Drop};
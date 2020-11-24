class Alert{
    constructor(){
        this.alert=document.createElement('div');
    }
    init(){
        this.alert.classList.add('alert');
        document.querySelector('body').appendChild(this.alert)
    }
    poruka(message){
        this.alert.textContent=message;
        this.alert.classList.add('active');
        setTimeout(() => {
            this.alert.classList.remove('active');
        }, 2000);
    }
}
export{Alert};
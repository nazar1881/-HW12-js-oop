class ClockTimer {
    constructor(el) {
        this.el = el;
        this.formatWithSeconds  = true;
       
        this.el.addEventListener('click', () => {
            this.toggleFormat();
        });
    }
    getTime() {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds(); 
    
        return [hours, minutes, seconds];
    }
    toggleFormat() {
        this.formatWithSeconds = !this.formatWithSeconds;
    }
    render = () =>  { 
        let time = this.getTime();
        let hours = time[0];
        let minutes = time[1];
        let seconds = time[2];
    
        if(hours < 10){hours = "0"+ hours;}
        if(minutes < 10){minutes = "0"+ minutes;}
        if(seconds < 10){seconds = "0"+ seconds;}
        
        this.el.innerText = this.formatWithSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
    }
}

let time1 = document.getElementById('clock1')
let clock1 = new ClockTimer(time1);
setInterval(clock1.render,250);


let time2 = document.getElementById('clock2')
let clock2 = new ClockTimer(time2);
setInterval(clock2.render,250);
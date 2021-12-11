class ClockTimer {
    constructor() {
        let clock = document.getElementById("clock");
        this.formatWithSeconds  = true;
        clock.addEventListener('click', () => {
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
    render() { 
        let time = this.getTime();
        let hours = time[0];
        let minutes = time[1];
        let seconds = time[2];
    
        if(hours < 10){hours = "0"+ hours;}
        if(minutes < 10){minutes = "0"+ minutes;}
        if(seconds < 10){seconds = "0"+ seconds;}
        
        return this.formatWithSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
    }
    clockTimer = () => {
        clock.innerText = this.render();
    }
}

let clock1 = new ClockTimer();
clock1.getTime();
clock1.render();
clock1.clockTimer();
setInterval(clock1.clockTimer,250);
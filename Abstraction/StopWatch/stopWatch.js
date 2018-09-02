function StopWatch(){
    let duration = 0;
    let running = false;
    let startTime = 0;
    this.start = function(){
        if(running)
        throw new Error('stop watch is started already');
        running = true;
        startTime = new Date();
    }
    
    this.stop = function(){
        if(!running)
        throw new Error('stopwatch has to be started first');
        seconds = new Date() - startTime;
        duration = seconds;
        running = false;
    }

    Object.defineProperty(this,'duration',{
        set: function(value){
            if(running)
                throw new Error('duration cant be set when stopwatch is running');
            if(!value)
                throw new Error('duration cant be null');
                duration=value;
        },
        get: function(){
            if(running)
            throw new Error("stopwatch is running");
            return duration;
        }
    });
}

let watch = new StopWatch();
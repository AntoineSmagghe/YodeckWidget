class MovingText
{
    constructor(doctorText, animation, animationTime, timeout)
    {
        this.doctorText = doctorText;
        this.animation = animation;
        this.animationTime = animationTime;
        this.timeout = timeout;
        this.index = 0;
    }

    show()
    {
        this.doctorText[this.index].style.display = "block";
        this.doctorText[this.index].style.animation = this.animation + " " + this.animationTime + " ease";
        setTimeout(()=>{
            this.time();
        }, this.timeout);
    }

    time()
    {
        setInterval(()=>{
            this.doctorText[this.index].style.display = "none";
            
            if (this.index < (this.doctorText.length - 1)){
                this.index += 1;
            } else {
                this.index = 0;
            }

            this.doctorText[this.index].style.display = "block";
            this.doctorText[this.index].style.animation = this.animation + " " + this.animationTime + " ease";
        }, this.timeout);
    }

    init()
    {
        this.show();
    }
}
class MovingText
{
    constructor(doctorText, timeout)
    {
        this.doctorText = doctorText;
        this.timeout = timeout;
        this.index = 0;
    }

    show()
    {
        this.doctorText[this.index].style.display = "block";
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

            console.log(this.index);

            this.doctorText[this.index].style.display = "block";
        }, this.timeout);
    }

    init()
    {
        this.show();
    }
}
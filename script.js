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
    }

    time()
    {
        setTimeout({
            
        },this.timeout)
    }

    init()
    {

    }
}
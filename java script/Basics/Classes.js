class Toyota
{
    start()
    {
        console.log("Start")
    }
    stop()
    {
        console.log("stop")
    }
    carName(name)
    {
        this.name=name;
    }
}

let Fortuner = new Toyota(); //object creation
Fortuner.carName("Fortuner")

let Helux = new Toyota(); //object creation
Fortuner.carName("Helux")
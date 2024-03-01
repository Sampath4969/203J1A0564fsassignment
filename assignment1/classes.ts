class Car 
{
    make:string
    model:string
    year:number
     constructor(x:string,y:string,z:number)
    {
         this.make=x
        this.model=y
        this.year=z

    }
     displayinfo()
        {
        
        console.log(this.make+" "+this.model+" "+this.year)
        }
    
}
const ob=new Car("TATA","nexon",2022)
let ob1=new Car("TOYOTA","innova",2020)
ob.displayinfo()
ob1.displayinfo()
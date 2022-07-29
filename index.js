class person {
    constructor(){
        this.price = [];
        this.total =0;
    }
    getInput(){
        this.price = prompt("Enter the  price ").split(" ");
    }
    getTotal(){
        this.total =this.price.reduce((xxx,y)=>{
            return xxx + parseInt(y);
        },0);
    }
    getAvg(){
        return this.total / this.price.length;
    }
    toString(){
        console.log(this.total);
        console.log(this.price);
        console.log(this.getAvg);
    }
}
let person = new person();
person.getInput();

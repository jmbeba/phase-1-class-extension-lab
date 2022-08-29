// Your code here
class Polygon{
    constructor(array){
        this.array = array;
    }

    //Get methods
    get countSides(){
        return this.array.length;
    }

    get perimeter(){
        return this.array.reduce((prev, curr)=> {
            return prev + curr;
        })
    }
}

class Triangle extends Polygon{
    get isValid(){
        if(this.array[0]+this.array[1] > this.array[2]){
            if(this.array[0]+this.array[2] > this.array[1]){
                if(this.array[2]+this.array[1] > this.array[0]){
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}

class Square extends Polygon{
    get isValid(){
        return this.perimeter === this.array[0]*4;
    }

    get area(){
        return Math.pow(this.array[0],2)
    }
}
//Assignment 1

function check(num1)
{
    console.log((num1<0)?"It is a negative number":"It is a positive number");
}

check(-12);

//Assignment 2
let largestNum=(nums)=>{
    let sum=nums[0];
    for (let i=0;i<nums.length;i++)
    {
        if (nums[i]>sum)
        {
            sum=nums[i];
        }
    }
    return sum
}

console.log(`The largest number is ${largestNum([1,2,3,4])}`);

//Assignment 3
let cylinder={
    radius: 12,
    height: 10,
    area: function (r, h){
        return 3.17*r*r*h;
    }
}

console.log(cylinder.area(cylinder.radius, cylinder.height));

//Assignment 4
let square={
    length:2,
    breadth:2,
    area1:area
}
let rectangle={
    length:2,
    breadth:3,
    area2:area
}

function area()
{
    return this.length*this.breadth;
}

console.log(square.area1())
console.log(rectangle.area2());
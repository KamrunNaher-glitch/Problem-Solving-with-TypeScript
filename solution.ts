function formatValue(value:string | number | boolean) : string | number | boolean {
    if (typeof value === "string"){
        return value.toUpperCase();
    } else if (typeof value === "number"){
        return value * 10
    } else {
        return !value
    }
}


function getLength <T extends string | any[]>(value:T) : number {
    if(typeof value === "string"){
        return value.length;
    }else if (Array.isArray(value)){
        return value.length
    }
    return 0 ;
}


class Person {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name= name,
        this.age  = age
    }
    getDetails() : string{
        return `'Name:${this.name},Age: ${this.age}'`

    }
}


interface IFilterItems {
    title: string;
    rating: number;
}

function filterByRating(items: IFilterItems[]): IFilterItems[] {
    return items.filter((item) => item.rating >= 4);
}


interface IUser {
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}
 function filterActiveUsers(users:IUser[]): IUser[]{
    return users.filter((user) =>user.isActive === true)
 }

 
interface IBook {
    title:string;
    author:string;
    publishedYear:number;
    isAvailable: boolean
}

function printBookDetails(book:IBook): void{
    const availibility = book.isAvailable ? "Yes" :'No'

    console.log(`Title: ${book.title}`);
    console.log(`Author:${book.author}`);
    console.log(`Published: ${book.publishedYear}`)
    console.log(`Available:${availibility}`)
    
}



function getUniqueValues <T extends number | string>(array1:T[],array2:T[]) :T[] {
    const result : T[] = [];
    let index =0;

     for(let i = 0; i<array1.length; i++){
        let exist = false;
        for (let j = 0; j <index; j++ ){
            if (result[j] === array1[i]){
                exist = true
            }
        }
        if(!exist ){
            result[index] = array1[i]!;
            index++
        }
    }
    for (let i = 0; i< array2.length; i++){
        let exist = false ;
        for (let j = 0; j<index; j++){
            if(result[j] === array2[i]){
                exist = true
            }
        }
        if(!exist ){
            result[index] = array2[i]!;
            index++;
        }
    }

    return result

}



interface IProduct {
    name: string;
    price:number;
    quantity: number;
    discount?:number;
}

function calculateTotalPrice(products:IProduct[]) : number {
    const totalPrice = products.reduce((acc,item)=>{
        const discount = item.discount ?? 0 ;
        const result = item.price * item.quantity *(1-discount/100);
        return acc + result;
    },0);
    return totalPrice
}












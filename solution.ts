function formatValue(value:string | number | boolean) : string | number | boolean {
    if (typeof value === "string"){
        return value.toUpperCase();
    } else if (typeof value === "number"){
        return value * 10
    } else {
        return !value
    }
}

// console.log(formatValue("keya"));
// console.log(formatValue(50));
// console.log(formatValue(false));

function getLength <T extends string | any[]>(value:T) : number {
    if(typeof value === "string"){
        return value.length;
    }else if (Array.isArray(value)){
        return value.length
    }
    return 0 ;
}

// console.log(getLength("typescript"));
// console.log(getLength("typescriptwithgenericfunction"));
// console.log(getLength([10,20,30,40,25,14,78]));

class Person {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name= name,
        this.age  = age
    }
    getDetails() : string{
        return `Name:${this.name},Age: ${this.age}`

    }
}

// const person1 = new Person("Jon Don" ,30)
// console.log(person1.getDetails())


interface IFilterItems {
    title: string;
    rating: number;
}

function filterByRating(items: IFilterItems[]): IFilterItems[] {
    return items.filter((item) => item.rating >= 4);
}

// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));

interface IUser {
    id:number;
    name:string;
    email:string;
    isActive:boolean;
}
 function filterActiveUsers(users:IUser[]): IUser[]{
    return users.filter((user) =>user.isActive === true)
 }

//  const users: IUser[] = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 2, name: 'keya', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));

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

// const myBook: IBook = {
//   title: 'The Great Gatsby',
//   author: 'F. Scott Fitzgerald',
//   publishedYear: 1925,
//   isAvailable: false,
// };

// printBookDetails(myBook);

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
// const array1 = [1, 2, 3, 4, 5,15,22,24];
// const array2 = [3, 4, 5, 6, 7,11,25,22];
// console.log(getUniqueValues(array1, array2));










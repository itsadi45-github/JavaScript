// let coding = ["js","ruby","java","python","cpp"];

// let values = coding.forEach((item)=>{ // jaba hami yeslai variable bhitra store garxam then yeslay undefined value dinxa
//     // so we use the filter property
//      console.log(item);
//      return item;
// });
// console.log(values);

// Filter:-jaba pani hami Filter() use garxam then filter ma auta hamlai call back funtion paunxa jasma harek value lai each access garna sakxam lekin tespaxi hamlai kai condition dinu parxa ani jun jun item teyo condition lai satisfy garxan teyahi value haru return paunxa hamlai ani jun condition lai satisfy gardaiina teyo value return hudaina..this is called a basic filter concept

//Creates a new array containing only the elements that satisfy a condition (true). 
// filter lay taba matra naya array dinxa jaba hamro condition true hunxa or hamle deko condition satisfy hunxa.

let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//  let newNums = myNums.filter((num) => num > 5)
//   console.log(newNums);

let newNums = myNums.filter((num) => {
  return num > 5;
}); // it gives the empty array because hami yesma chai curly {} use garera naya scope start garxam so hamlai return lekhnu parxa.
// scope open garxam bhane hamlai return keyword use garnu parxa and if scope use gardainam bhaney then yek line mai parenthesis mai lekhda hunxa
console.log(newNums);

// example:-
let books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === 'History');
   
 userBooks = books.filter((bk) => {
   return bk.publish >= 2000 && bk.genre === "History"
 });
console.log(userBooks);


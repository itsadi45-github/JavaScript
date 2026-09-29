function one(){
    const username = "aditya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
}
one();

if (true) {
    const username = "aditya"
    if (username === "aditya") {
        const website = "youtube";
        // console.log(username + website);
    }
    // console.log(website); //not defined
}
// console.log(username);  //not defined

// agar ham koi bhi variable ko uskey decelration say pahele access karney ki kosis kartey hay aur woo error nahi deta hay toh woo variable hoist hogya hay ....lekin agar ham const kardey toh bhi hoist hota hay lekin usko haam access nahi karsaktey aur usi ko boltey hay temporal dead jone

//hami kunai pani variable lai declare garnu bahnda pahila access garna khojxam ani teyo error didaina then teyo variable hoist bhako hunxa..teyahi same kura hami const raw let sanga ni garxam and teyo ni hoist bhako hunxa but undefined ko sato refernce error dekhaunxa.

console.log(a);

let a = 10;

const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post Two" },
    { title: "Post Three", body: "This is post Three" }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<h1>${post.title}<h1>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
//when using promises we don't need callback
function createPost(post) {
    //its own callback, resolve and reject
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
        posts.push(post);
        //create variable error to false, aka error is "off"
        const error = false;
        //if no error, then resolve promise
        if(!error) {
            resolve();
            //anything else send error message
        } else{
            reject('Error: Something went wrong"')
        }
    }, 2000);
});
}
//instead of calling other function, with promises we will use the .then method
// createPost({ title: "Post Four", body: "This is post Four"})
// .then(getPosts);
// .catch(err => console.log(err));

// Promose.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject))
setTimeout(resolve, 2000, 'Goodbye');
//when using fetch, you will need two .then, first formatting to json
const promise4 = fetch('put-website-here').then(res 
    =>
        res.json()
);

 //takes in array of promises,
 //.then() pass in our callback, that will take in values and print values
 //
Promise.all([promise1, promise2, promise3, promise4]).then(values => console.log(values));


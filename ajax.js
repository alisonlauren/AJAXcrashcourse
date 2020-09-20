const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post Two" },
    { title: "Post Three", body: "This is post Three" }
];
//delays by one second
//using arrow function
// purpose is to get posts and put on page
function getPosts() {
    setTimeout(() => {

        let output = '';
        //loops through array, parameters of post and index
        posts.forEach((post, index) => {
            // output is equal to output + post title in a list
            output += `<li>${post.title}<li>`;
        });
        //append the output to the document body in the inner HTML
        document.body.innerHTML = output;
        //delay by 1 second or 1000 milliseconds
    }, 1000);
}
//createPost function with post as the arguement
//callback is a predefined function
function createPost(post, callback) {
    //setting the timeout with an arrow function
    setTimeout(() => {
        //using the push method to add to the array
        posts.push(post);
        callback();
        //delay it two seconds
    }, 2000);
}
//calling the function
//it will load the two posts after the second

//waited two seconds for all to be called, first the createPost and then calling
//the function from earlier the getPosts. must call this way because if
//getPosts is called first, the DOM has already been painted and cannot
//take in new posts.
createPost({ title: 'Post Four', body: "This is post Four"}, getPosts);


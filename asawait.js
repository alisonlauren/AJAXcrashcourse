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
function createPost(post) {
    return new Promise((resolve, reject) => { 
    setTimeout(() => {
        posts.push(post);
        const error = false;
        if(!error) {
            resolve();
        } else{
            reject('Error: Something went wrong"')
        }
    }, 2000);
});
}
//must be labeled async to use await method
//
async function init() {
    //must call await, awaiting for it to be done before we call next function
    await createPost({ title: 'Post Four', body: "This is post Four"});
    //stil calling get posts, async is considered a "fancy" way of doing the same
    getPosts();
}
init();

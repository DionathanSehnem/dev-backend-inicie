const GoRest = require("./goRest.js")

main();
async function main() {
    let randomString = (Math.random() + 1).toString(36).substring(5);
    const body = `${randomString} ${randomString} ${randomString} ${randomString} ${randomString} ${randomString} `;
    const post = {
        title: `${randomString}`,
        body: `${randomString} ${randomString} ${randomString}`
    }
    const USER_DATA = {
        "name": `${randomString}`,
        "email": `${randomString}@${randomString}.com`,
        "gender": "male",
        "status": "inactive"
    }

    const userID = await GoRest.createNewUser(USER_DATA);
    console.log(`ID of Created User: ${userID}`)

    const userData = await GoRest.getUserByID(userID);
    console.log(`ID of Found User: ${userData.id}`);

    const postID = await GoRest.createNewPost(userID, post);
    console.log(`ID of Created Post: ${postID}`);

    const newCommentID = await GoRest.createNewComment(postID, userData, body);
    console.log(`ID of Created Comment: ${newCommentID}`);

    const commentFirstPostID = await GoRest.createCommentOnFirstPost(userData, body);
    console.log(`ID of Created Comment on First Post: ${commentFirstPostID}`);

    const deletedCommentID = await GoRest.deleteComment(commentFirstPostID);
    console.log(`The comment with id ${deletedCommentID} was successfully deleted!`)
}
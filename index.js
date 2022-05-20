const GoRest = require("./goRest.js")

main();

async function main() {

    const userID = await GoRest.createNewUser();
    const userData = await GoRest.getUserByID(userID);
    const postID = await GoRest.createNewPost(userID);
    await GoRest.createNewComment(postID, userData);
    const commentFirstPostID = await GoRest.createCommentOnFirstPost(userData);
    await GoRest.deleteComment(commentFirstPostID);
}
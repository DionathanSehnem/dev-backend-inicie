const GoRest = require("./goRest.js")

describe('Testing the GoRest functions', () => {
    let userID, userData, postID, commentFirstPostID;
    test('Create New User', async() => {
        userID = await GoRest.createNewUser();
        expect(typeof userID == 'number').toBe(true);
    })
    test('Get User By ID', async() => {
        userData = await GoRest.getUserByID(userID);
        expect(typeof userData == 'object').toBe(true);
    })
    test('Create New Post', async() => {
        postID = await GoRest.createNewPost(userID);
        expect(typeof postID == 'number').toBe(true);
    })
    test('Create New Comment', async() => {
        const commentID = await GoRest.createNewComment(postID, userData);
        expect(typeof commentID == 'number').toBe(true);
    })
    test('Comment First Post ID', async() => {
        commentFirstPostID = await GoRest.createCommentOnFirstPost(userData);
        expect(typeof commentFirstPostID == 'number').toBe(true);
    })
    test('Delete Comment', async() => {
        const deleteComment = await GoRest.deleteComment(commentFirstPostID);
        expect(typeof deleteComment == 'number').toBe(true);
    })

})
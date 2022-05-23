const GoRest = require("./goRest.js")

describe('Testing the GoRest functions', () => {
    let userID, userData, postID, commentFirstPostID;
    test('Criar um novo usuário dentro do sistema', async() => {
        let r = (Math.random() + 1).toString(36).substring(5);
        const userData = {
            "name": `${r}`,
            "email": `${r}@${r}.com`,
            "gender": "male",
            "status": "active"
        }

        userID = await GoRest.createNewUser(userData);
        expect(typeof userID == 'number').toBe(true);
    })
    test('Listar todos os usuários da API e encontrar o usuário criado através do ID do mesmo', async() => {
        userData = await GoRest.getUserByID(userID);
        expect(typeof userData == 'object').toBe(true);
    })
    test('Criar um novo post para o usuário criado', async() => {
        postID = await GoRest.createNewPost(userID);
        expect(typeof postID == 'number').toBe(true);
    })
    test('Criar um novo comentário dentro do post criado', async() => {
        const commentID = await GoRest.createNewComment(postID, userData);
        expect(typeof commentID == 'number').toBe(true);
    })
    test('Criar um novo comentário dentro do primeiro post da lista pública de posts', async() => {
        commentFirstPostID = await GoRest.createCommentOnFirstPost(userData);
        expect(typeof commentFirstPostID == 'number').toBe(true);
    })
    test('Apagar o comentário criado no requisito acima', async() => {
        const deleteComment = await GoRest.deleteComment(commentFirstPostID);
        expect(typeof deleteComment == 'number').toBe(true);
    })
})
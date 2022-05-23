const GoRest = require("./goRest.js")

describe('Testing the GoRest functions', () => {
    let userID, userData, postID, commentFirstPostID;
    let randomString = (Math.random() + 1).toString(36).substring(5);
    const body = `${randomString} ${randomString} ${randomString} ${randomString} ${randomString} ${randomString} `;

    test('Criar um novo usuário dentro do sistema', async() => {
        const userData = {
            "name": `${randomString}`,
            "email": `${randomString}@${randomString}.com`,
            "gender": "male",
            "status": "inactive"
        }

        userID = await GoRest.createNewUser(userData);
        expect(typeof userID == 'number').toBe(true);
    })

    test('Listar todos os usuários da API e encontrar o usuário criado através do ID do mesmo', async() => {
        userData = await GoRest.getUserByID(userID);
        expect(typeof userData == 'object').toBe(true);
    })

    test('Criar um novo post para o usuário criado', async() => {
        const post = {
            title: `${randomString}`,
            body: `${randomString} ${randomString} ${randomString}`
        }
        postID = await GoRest.createNewPost(userID, post);
        expect(typeof postID == 'number').toBe(true);
    })

    test('Criar um novo comentário dentro do post criado', async() => {
        const commentID = await GoRest.createNewComment(postID, userData, body);
        expect(typeof commentID == 'number').toBe(true);
    })

    test('Criar um novo comentário dentro do primeiro post da lista pública de posts', async() => {
        commentFirstPostID = await GoRest.createCommentOnFirstPost(userData, body);
        expect(typeof commentFirstPostID == 'number').toBe(true);
    })

    test('Apagar o comentário criado no requisito acima', async() => {
        const deleteComment = await GoRest.deleteComment(commentFirstPostID);
        expect(typeof deleteComment == 'number').toBe(true);
    })
})
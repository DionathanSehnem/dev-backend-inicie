const axios = require("axios");
require('dotenv').config();

const USER_DATA = {
    "name": "Elvis Elvino",
    "email": "elvinho@gmail.com",
    "gender": "male",
    "status": "active"
}

async function createNewUser() {
    await axios.post(
            "https://gorest.co.in/public/v1/users", USER_DATA, {
                headers: {
                    Authorization: "Bearer " + process.env.TOKEN,
                },
            }
        ).then(({ data }) => {
            const userId = data.data.id;
            console.log(userId);
            return userId;
        })
        .catch(err => {
            console.log(err.response.data.data);
        });
}

async function getAllUsers() {
    try {
        const { data } = await axios.get(
            "https://gorest.co.in/public/v1/users", {
                headers: {
                    Authorization: `Bearer ${process.env.TOKEN}`,
                },
            }
        );
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


async function deleteUser() {
    try {
        const { data } = await axios.post(
            "https://gorest.co.in/public/v1/users", {
                "name": "Elvis Elvino",
                "email": "elvis@gmail.comm",
                "gender": "male",
                "status": "active"
            }, {
                headers: {
                    Authorization: 'Bearer bb34b7cf29ddcfb3f4bf1fd0e1f8947fa15b41b6fabf22a2f4b318a5119b6b5d',
                },
            }
        );
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

console.log(createNewUser());
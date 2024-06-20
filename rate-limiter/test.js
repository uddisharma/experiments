const axios = require('axios');


function getRandomNumber() {
    return Math.floor(Math.random() * 100);
}


async function makeApiCall() {
    const a = getRandomNumber();
    const b = getRandomNumber();

    try {
        const response = await axios.post('http://localhost:3000/sum', { a, b });
        console.log(`Sum of ${a} and ${b} is ${response.data.sum}`);
    } catch (error) {
        console.error('Error making API call:', error);
    }
}


(async function infiniteLoop() {
    while (true) {
        await makeApiCall();

    }
})();

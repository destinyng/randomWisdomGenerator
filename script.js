// Function to generate a random number between 0 and 'num - 1'
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
};
// console.log(generateRandomNumber(9));

// Object containing arrays with different options for sign, fortune, and advice
const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
};

// Array to store the generated random messages
let personalWisdom = []

// Iterate over each property in the 'collectiveWisdom' object
for (let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)

    switch (prop) {
        case 'signInfo':
            personalWisdom.push(`Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`);
            break;
        case 'fortuneOutput':
            personalWisdom.push(`You are having : "${collectiveWisdom[prop][optionIdx]}".`);
            break;
        case 'advice':
            personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`);
            break;
        default:
            personalWisdom.push('There is not enough infomation.');
    }
};

// Function to format and display the generated wisdom messages
function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n');
    console.log(formatted)
}

//call function
formatWisdom(personalWisdom);
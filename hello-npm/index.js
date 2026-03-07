import inquirer from "inquirer";

inquirer.prompt(
    [
        {
            type: 'input',
            name: 'nome',
            message: 'Qual seu nome?',

        }, {
            type: 'list',
            name: 'idade',
            message: 'Qual sua idade?',
            choices: ['19 a 39', '40 a 50', '50 +']

        }
    ]
).then((answers) => {
    console.log("oi " + answers.nome + " com " + answers.idade + " de vida")
});
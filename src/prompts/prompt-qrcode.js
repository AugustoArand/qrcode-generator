import chalk from "chalk";

const promptQRCode = [

    {
        name: "link",
        description: chalk.bgBlueBright("Digite o link para gerar o QRCode"),
    },

    {
        name: "type",
        description: chalk.bgBlueBright("Escolha entre o tipo (1- NORMAL ou 2- TERMINAL)"),
        pattern: /^[1|2]+$/,
        message: chalk.bgGray.bold.italic("Escolha apenas entre 1 e 2"),
        required: true,
    },
];



export default promptQRCode;
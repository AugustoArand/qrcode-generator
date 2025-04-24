import chalk from "chalk";
import message from "prompt";

const mainPrompt = [
    {
        name: 'select',
        description: chalk.yellow.bold("Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)"),
        pattern: /^(1|2)+$/,
        message: chalk.bgGray.bold.italic("Apenas números entre 1 e 2"),
        required: true,

    },
]

export default mainPrompt;
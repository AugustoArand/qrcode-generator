import qrcode from "qrcode";
import chalk from "chalk";
import createQRCode from "./create.js";
import promptQRCode from "../../prompts/prompt-qrcode.js";

async function handle(err, result) {
    const { link } = result;
    if (err) {
        console.error("Error on application:", err);
        return;
    }
    if (result.type == 1) {
        qrcode.toString(link, { type: "terminal" }, function (err, qrcode) {
            if (err) {
                console.error("Error on application:", err);
                return;
            }
            console.log(chalk.bgBlueBright.bold("QRCode gerado com sucesso!"));
            console.log(chalk.bgBlueBright.bold("QRCode: \n", qrcode));
        });
    }

}
export default handle;
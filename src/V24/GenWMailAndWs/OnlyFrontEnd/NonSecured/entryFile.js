const vscode = require('vscode');
const fse = require('fs-extra');
const path = require('path');

const CommonRegisterCommand = "GenerateWMail.OnlyFrontEndNonSec";

const { StartFunc: StartFuncrunNodeApp } = require("./ServerRun");

// pull the columns schema from the json file referred from schema.json

const StartFunc = () => {
    vscode.commands.registerCommand(CommonRegisterCommand, LocalFuncToActivate);
};

const LocalFuncToActivate = async () => {
    const LocalToPath = LocalFuncGetWorkSpaceFolder();
    LocalFuncCheckFolder({ inToPath: LocalToPath });

    StartFuncrunNodeApp(LocalToPath)
};

const LocalFuncCheckFolder = ({ inToPath }) => {
    const LocalToPath = `${inToPath}\\ForFrontEnd`;

    if (fse.existsSync(LocalToPath) && fse.lstatSync(LocalToPath).isDirectory()) {
        console.log('Folder exists!');
        return false;
    };

    const LocalFromTablePath = path.join(__dirname, "CopyCode");

    fse.copySync(`${LocalFromTablePath}/ForFrontEnd`, LocalToPath);
};

const LocalFuncGetWorkSpaceFolder = () => {
    if (vscode.workspace.workspaceFolders) {
        const rootUri = vscode.workspace.workspaceFolders[0].uri;
        const rootPath = rootUri.fsPath; // Get the file path
        return rootPath;
    } else {
        console.log("No workspace folders found.");
    };
};

module.exports = { StartFunc };
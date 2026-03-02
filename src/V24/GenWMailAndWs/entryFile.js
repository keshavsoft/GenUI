const { StartFunc: StartFuncFromOnlyFrontEnd } = require("./OnlyFrontEnd/entryFile");

const StartFunc = () => {
    StartFuncFromOnlyFrontEnd();
};

module.exports = { StartFunc };
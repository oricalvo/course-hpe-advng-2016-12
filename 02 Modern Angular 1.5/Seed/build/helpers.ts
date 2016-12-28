import * as shelljs from "shelljs";

export function shellExec(command, options?) {
    const code = shelljs.exec(command, options).code;
    if(code != 0) {
        throw new Error("Shell command \"" + command + "\" failed with code: " + code);
    }
}

export function shellExecAsync(command, options?) {
    const child = shelljs.exec(command, options, function() {
    });
}


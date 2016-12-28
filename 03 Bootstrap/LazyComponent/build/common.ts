import {shellExec, shellExecAsync} from "./helpers";

export function ts(monitorChanges: boolean) {
    console.log("Compiling Typescript");
    if(monitorChanges) {
        shellExecAsync("START node_modules\\.bin\\tsc -w");
    }
    else {
        shellExec("node_modules\\.bin\\tsc");
    }
}

export function sass(monitorChanges: boolean) {
    console.log("Compiling SASS");
    if(monitorChanges) {
        shellExecAsync("START node_modules\\.bin\\node-sass --watch --recursive ./app --output ./app");
    }
    else {
        shellExec("node_modules\\.bin\\node-sass --recursive ./app --output ./app");
    }
}

export function server() {
    console.log("Run NodeJS server");
    shellExecAsync("START node_modules\\.bin\\http-server");
}

export function browser() {
    console.log("Open browser");
    shellExec("node_modules\\.bin\\opener http:localhost:8080");
}

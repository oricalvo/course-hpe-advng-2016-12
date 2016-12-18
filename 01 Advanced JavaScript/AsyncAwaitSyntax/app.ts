main();

async function main() {
    try {
        await runTask1();
        await runTask2();
        await runTask3();
        console.log("OK");
    }
    catch(err) {
        console.log("Error: " + err.message);
    }
}

function runTask1() {
    return new Promise(function(resolve, reject) {
        console.log("before setTimeout");
        setTimeout(function() {
            console.log("ON setTimeout");
            
            resolve(42);
        }, 1500);
    });
}

function runTask2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject(new Error("Task2 failed"));
        }, 1500);
    });
}

function runTask3() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(42);
        }, 1500);
    });
}

setTimeout(function() {
    calc();
}, 2500);

function calc() {
    const before = new Date();

    while(true) {
        const now = new Date();
        if(now - before > 5000) {
            break;
        }
    }
}
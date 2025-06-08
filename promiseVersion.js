const probability = Math.random();
const names = ["Cheyla", "Osvaldo", "Oscar", "Pablo", "Deborah", "Tony"];
const pickedName = names[Math.floor(Math.random() * names.length)]
console.log(`The probability of ${pickedName} finishing all their chores is ${(probability*100).toFixed(2)}%`);
console.log(`Let's see if ${pickedName} can finish all their chores or just fall asleep...`);
doSummerChores(pickedName);

function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("One Mississipi...");
            console.log("Two Mississipi...");
            console.log(`${name} mowed the yard.`);
            resolve(name);
        }, 2000);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < probability) {
                console.log("One Mississipi...");
                console.log("1/2 Mississipi...");
                console.log(`${name} finished using the weed eater.`);
                resolve(name);
            } else {
                console.log("One Mississipi...");
                console.log("1/2 Mississipi...");
                reject(`${name} fell asleep after mowing the yard.`);
            }
        }, 1500);
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < probability) {
                console.log("One Mississipi...");
                console.log(`${name} finished trimming the hedges.`);
                resolve(name);
            } else {
                console.log("One Mississipi...");
                reject(`${name} fell asleep after weed eating the yard.`);
            }
        }, 1000);
    });
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < probability) {
                console.log("One Mississipi...");
                console.log("Two Mississipi...");
                console.log("1/2 Mississipi...");
                console.log(`${name} finished collecting wood.`);
                resolve(name);
            } else {
                console.log("One Mississipi...");
                console.log("Two Mississipi...");
                reject(`${name} fell asleep after trimming the hedges.`);
            }
        }, 2500);
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < probability) {
                console.log("1/2 Mississipi...");
                console.log(`${name} finished watering the garden.`);
                console.log(`${name} finished all their chores!`);
                resolve();
            } else {
                console.log("1/2 Mississipi...");
                reject(`${name} fell asleep after collecting wood.`);
            }
        }, 500);
    });
}

function doSummerChores(pickedName) {
    mowYard(pickedName)
        .then(name => weedEat(name))
        .then(name => trimHedges(name))
        .then(name => collectWood(name))
        .then(name => waterGarden(name))
        .catch((error) => {
            console.log(error);
        });
}



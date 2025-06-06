const probability = Math.random();
const names = ["Cheyla", "Osvaldo", "Oscar", "Pablo", "Deborah", "Tony"];
const pickedName = names[Math.floor(Math.random() * names.length)]
console.log(`The probability of ${pickedName} finishing all their chores is ${(probability*100).toFixed(2)}%`);
console.log(`Let's see if ${pickedName} can finish all their chores or just fall asleep...`);
doSummerChores(pickedName);

function mowYard(name, weedEat) {
    setTimeout(()=> {
        console.log("One Mississipi...");
        console.log("Two Mississipi...");
        console.log(`${name} mowed the yard.`);
        weedEat(name, trimHedges);
    }, 2000)
    
};

function weedEat(name, trimHedges) {
    setTimeout(()=> {
        if (Math.random() < probability) {
            console.log("One Mississipi...");
            console.log("1/2 Mississipi...");
            console.log(`${name} finished using the weed eater.`);
            trimHedges(name, collectWood);
        } else {
            console.log("One Mississipi...");
            console.log("1/2 Mississipi...");
            console.log(`${name} fell asleep after mowing the yard.`);
        }
    }, 1500);
}

function trimHedges(name, collectWood) {
    setTimeout(()=> {
        if (Math.random() < probability) {
            console.log("One Mississipi...");
            console.log(`${name} finished trimming the hedges.`);
            collectWood(name, waterGarden);
        } else {
            console.log("One Mississipi...");
            console.log(`${name} fell asleep after weed eating the yard.`);
        }
    }, 1000);
}

function collectWood(name, waterGarden) {
    setTimeout(()=> {
        if (Math.random() < probability) {
            console.log("One Mississipi...");
            console.log("Two Mississipi...");
            console.log("1/2 Mississipi...");
            console.log(`${name} finished collecting wood.`);
            waterGarden(name);
        } else {
            console.log("One Mississipi...");
            console.log("Two Mississipi...");
            console.log(`${name} fell asleep after trimming the hedges.`);
        }
    }, 2500);
}

function waterGarden(name) {
    setTimeout(()=> {
        if (Math.random() < probability) {
            console.log("1/2 Mississipi...");
            console.log(`${name} finished watering the garden.`);
            console.log(`${name} finished all their chores!`);
        } else {
            console.log("1/2 Mississipi...");
            console.log(`${name} fell asleep after collecting wood.`);
        }
    }, 500);
}

function doSummerChores(name) {
    mowYard(name, weedEat);
}



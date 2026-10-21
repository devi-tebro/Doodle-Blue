function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data received");
        }, 2000);
    });
}

async function displaydata() {
    console.log("start");

    const result = await getData();

    console.log(result);
    console.log("end");
}

displaydata();

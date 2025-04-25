
async function yap(text, voice = "tenshitalk") {
    return new Promise((resolve) => {
        // var flag = true; 
        // var diagSound = new Audio(`sounds/${voice}.mp3`); 
        // diagSound.addEventListener('ended', function() {
        //     if(flag = false) {
        //         this.currentTime = 0;
        //         this.play();
        //     }
        // }, false);
        // diagSound.play();


        const div = document.createElement("button");
        div.id = "textbox";
        div.style.cssText = "font-size: 200% ;width: 90%; height:10%; border-color: gray; background-color: white; border-radius: 0.5%; border-width: 0.5%; border: solid gray; position:absolute; top: 80%; left:5%; margin:0.5%";
        div.innerHTML = `<p class="typewriter-text">${text}</p>`;
    
        document.body.appendChild(div);
    
        div.addEventListener("click", function() {
            div.remove();
            // flag = false;
            resolve();
        });

    });
}


async function yapSlow(text, voice = "tenshitalk") {
    return new Promise((resolve) => {
        // var flag = true; 
        // var diagSound = new Audio(`sounds/${voice}.mp3`); 
        // diagSound.addEventListener('ended', function() {
        //     if(flag = false) {
        //         this.currentTime = 0;
        //         this.play();
        //     }
        // }, false);
        // diagSound.play();


        const div = document.createElement("button");
        div.id = "textbox";
        div.style.cssText = "font-size: 200% ;width: 90%; height:10%; border-color: gray; background-color: white; border-radius: 0.5%; border-width: 0.5%; border: solid gray; position:absolute; top: 80%; left:5%; margin:0.5%";
        div.innerHTML = `<p class="typewriter-text-slow">${text}</p>`;
    
        document.body.appendChild(div);
    
        div.addEventListener("click", function() {
            div.remove();
            // flag = false;
            resolve();
        });

    });
}

async function fadeToBlack(duration = 1000) {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 0;
        z-index: 9999;
        pointer-events: none;
        transition: opacity ${duration}ms ease;
    `;
    document.body.appendChild(overlay);
    overlay.offsetHeight;

    requestAnimationFrame(() => {
        overlay.style.opacity = 1;
    });
    
    await new Promise(resolve => setTimeout(resolve, duration));
    overlay.remove();
}
async function fadeFromBlack(duration = 1000) {
    const overlay = document.createElement("div");
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: black;
        opacity: 1;
        z-index: 9999;
        pointer-events: none;
        transition: opacity ${duration}ms ease;
    `;
    document.body.appendChild(overlay);
    overlay.offsetHeight;

    requestAnimationFrame(() => {
        overlay.style.opacity = 0;
    });
    
    await new Promise(resolve => setTimeout(resolve, duration));
    overlay.remove();
}


// fuuuck this shit??? Add mayhaps a keep black on for x duration shit??? IM killing myself auhfasuhfashfas
// k + c my asshole bro
// async function fadeToAndBackFromBlack(duration = 1000, pause = 0) {
//     const overlay = document.createElement("div");
//     overlay.style.cssText = `
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100vw;
//         height: 100vh;
//         background-color: black;
//         opacity: 0;
//         z-index: 9999;
//         pointer-events: none;
//         transition: opacity ${duration}ms ease;
//     `;
//     document.body.appendChild(overlay);
//     overlay.offsetHeight;

//     requestAnimationFrame(() => {
//         overlay.style.opacity = 1;
//     });
//     // we gotta wait for the animation to complete and then pause dawg bruhhhh
//     await new Promise(resolve => setTimeout(resolve, duration));
//     await new Promise(resolve => setTimeout(resolve, pause));


//     requestAnimationFrame(() => {
//         overlay.style.opacity = 0;
//     });
    
//     await new Promise(resolve => setTimeout(resolve, duration));
//     overlay.remove();
// }
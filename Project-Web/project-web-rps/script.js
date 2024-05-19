const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");
        userResult.src = cpuResult.src = "./assets/hand-rock-left.png";
        result.textContent = "Tunggu...";
        optionImages.forEach((image2, index2) => {
            if (index !== index2) image2.classList.remove("active");
        });
        gameContainer.classList.add("start");

        setTimeout(() => {
            gameContainer.classList.remove("start");
            const imageSrc = e.target.querySelector("img").src;
            const newImageSrc = imageSrc.replace('./assets/scissor.jpeg', './assets/hand-scissor-left.png')
                                       .replace('./assets/rock.jpeg', './assets/hand-rock-left.png')
                                       .replace('./assets/paper.jpeg', './assets/hand-paper-left.png');
            userResult.src = newImageSrc;

            const randomNumber = Math.floor(Math.random() * 3);
            const cpuImages = ["./assets/hand-scissor-left.png", "./assets/hand-rock-left.png", "./assets/hand-paper-left.png"];
            cpuResult.src = cpuImages[randomNumber];

            const cpuValue = ["S", "R", "P"][randomNumber];
            const userValue = ["S", "R", "P"][index];
            const outcomes = {
                RR: "Seri",
                RP: "Komputer",
                RS: "Kamu",
                PP: "Seri",
                PR: "Kamu",
                PS: "Komputer",
                SS: "Seri",
                SR: "Komputer",
                SP: "Kamu",
            };

            const outcomeValue = outcomes[userValue + cpuValue];
            result.textContent = userValue === cpuValue ? "Oke, kali ini Seri." : `${outcomeValue} Menang!! Hahaha`;
        }, 2500);
    });
});

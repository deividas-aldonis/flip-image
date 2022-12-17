const input = document.querySelector("input");
const button = document.querySelector("button");

const container = document.querySelector(".container");

button.addEventListener("click", () => {
  //   const inputValue = input.value.trim();
  //   if (inputValue.length === 0) return;

  const image = new Image();
  //   image.src = inputValue;
  image.src = "error.webp";

  image.addEventListener("error", () => {
    console.log("failed to load");
  });

  image.addEventListener("load", () => {
    const div = document.createElement("div");
    div.classList.add("image");

    div.style.height = image.height + "px";
    div.style.width = image.width + "px";
    div.style.border = "1px solid";

    for (let i = 0; i < 4; i++) {
      const slicedImage = document.createElement("div");
      div.appendChild(slicedImage);

      slicedImage.style.backgroundImage = `url(${image.src})`;
      slicedImage.style.backgroundSize = `${image.width}px ${image.height}px`;
      if (i === 0) {
        slicedImage.style.backgroundPositionX = `${image.width}px`;
        slicedImage.style.backgroundPositionY = `${image.height}px`;
      }
      if (i === 1) {
        slicedImage.style.backgroundPositionX = `-${image.width / 2}px`;
        slicedImage.style.backgroundPositionY = `${image.height}px`;
      }
      if (i === 2) {
        slicedImage.style.backgroundPositionX = `-${image.width}px`;
        slicedImage.style.backgroundPositionY = `${image.height / 2}px`;
      }
      if (i === 3) {
        slicedImage.style.backgroundPositionX = `-${image.width / 2}px`;
        slicedImage.style.backgroundPositionY = `${image.height / 2}px`;
      }
    }

    container.appendChild(div);
  });
});

const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".container");
const controls = document.querySelector(".controls");

let selected = null;

const setSelectedImage = (e) => {
  const slicedImage = e.target.closest(".sliced-image");
  if (!slicedImage) return;

  const id = Number(slicedImage.dataset.id);

  console.log(id);
  document.querySelectorAll(".sliced-image").forEach((img, i) => {
    console.log(i);
    if (i === id) {
      img.classList.add("selected");
    } else {
      img.classList.remove("selected");
    }
  });
};

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
    div.addEventListener("click", setSelectedImage);

    div.style.height = image.height + "px";
    div.style.width = image.width + "px";
    div.style.border = "1px solid";

    for (let i = 0; i < 4; i++) {
      const slicedImage = document.createElement("div");
      slicedImage.classList.add("sliced-image");
      slicedImage.dataset.id = i;
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

      div.appendChild(slicedImage);
    }

    container.insertAdjacentElement("afterbegin", div);
    controls.classList.remove("hide");
  });
});

controls.addEventListener("click", (e) => {
  const arrow = e.target.closest("svg");
  if (!arrow) return;
});

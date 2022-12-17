const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".container");
const controls = document.querySelector(".controls");

let selected = null;

const setSelectedImage = (e) => {
  const slicedImage = e.target.closest(".sliced-image");
  if (!slicedImage) return;

  const id = Number(slicedImage.dataset.id);

  document.querySelectorAll(".sliced-image").forEach((img, i) => {
    if (i === id) {
      img.classList.add("selected");
      selected = id;
    } else {
      img.classList.remove("selected");
    }
  });
};

button.addEventListener("click", () => {
  const inputValue = input.value.trim();
  if (inputValue.length === 0) return;

  const image = new Image();
  image.src = inputValue;
  //   image.src = "error.webp";

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
  const arrow = e.target.closest(".arrow");
  if (!arrow) return;
  if (selected === null) return;

  const { direction } = arrow.dataset;
  const imageToChange = document.querySelectorAll(".sliced-image")[selected];

  const imageTransform = getComputedStyle(imageToChange).transform;
  const matrixValues = imageTransform.match(/-?\d+/g);

  const imageScaleX = matrixValues ? matrixValues[0] : "1";
  const imageScaleY = matrixValues ? matrixValues[3] : "1";

  if (selected === 0) {
    if (direction === "left") {
      imageToChange.style.transform = `scaleX(-1) scaleY(${imageScaleY})`;
    }
    if (direction === "right") {
      imageToChange.style.transform = `scaleX(1) scaleY(${imageScaleY})`;
    }
    if (direction === "top") {
      imageToChange.style.transform = `scaleY(-1) scaleX(${imageScaleX})`;
    }
    if (direction === "bottom") {
      imageToChange.style.transform = `scaleY(1) scaleX(${imageScaleX})`;
    }
  }

  if (selected === 1) {
    if (direction === "right") {
      imageToChange.style.transform = `scaleX(-1) scaleY(${imageScaleY})`;
    }
    if (direction === "left") {
      imageToChange.style.transform = `scaleX(1) scaleY(${imageScaleY})`;
    }
    if (direction === "top") {
      imageToChange.style.transform = `scaleY(-1) scaleX(${imageScaleX})`;
    }
    if (direction === "bottom") {
      imageToChange.style.transform = `scaleY(1) scaleX(${imageScaleX})`;
    }
  }

  if (selected === 2) {
    if (direction === "left") {
      imageToChange.style.transform = `scaleX(-1) scaleY(${imageScaleY})`;
    }
    if (direction === "right") {
      imageToChange.style.transform = `scaleX(1) scaleY(${imageScaleY})`;
    }
    if (direction === "top") {
      imageToChange.style.transform = `scaleY(-1) scaleX(${imageScaleX})`;
    }
    if (direction === "bottom") {
      imageToChange.style.transform = `scaleY(1) scaleX(${imageScaleX})`;
    }
  }

  if (selected === 3) {
    if (direction === "right") {
      imageToChange.style.transform = `scaleX(-1) scaleY(${imageScaleY})`;
    }
    if (direction === "left") {
      imageToChange.style.transform = `scaleX(1) scaleY(${imageScaleY})`;
    }
    if (direction === "top") {
      imageToChange.style.transform = `scaleY(-1) scaleX(${imageScaleX})`;
    }
    if (direction === "bottom") {
      imageToChange.style.transform = `scaleY(1) scaleX(${imageScaleX})`;
    }
  }
});

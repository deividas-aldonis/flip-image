const imageWrapper = document.querySelector(".images");
const images = document.querySelectorAll(".image");
const addImageBtn = document.querySelector(".add-image-btn");
const addImageInput = document.querySelector(".add-image-input");

function showErrorImg() {
  const errorImg = new Image();
  errorImg.classList.add("image-cover");
  errorImg.src = "./error.webp";
  imageWrapper.appendChild(errorImg);
}

function addImage() {
  // imageWrapper.textContent = "";

  const url = addImageInput.value;

  // if (url.trim().length === 0) {
  //   showErrorImg();
  //   return;
  // }

  const img = new Image();
  img.classList.add("image-cover");
  img.src = url;

  img.onerror = showErrorImg;
  img.onload = () => {
    const { width: imgWidth, height: imgHeight } = img;

    console.log();

    const { width: containerWidth, height: containerHeight } =
      imageWrapper.getBoundingClientRect();

    for (let i = 0; i < images.length; i++) {
      images[i].style.backgroundImage = `url(${img.src})`;
      images[i].style.backgroundRepeat = "no-repeat";
      images[i].style.backgroundSize = "contain";

      if (i === 0) {
        images[i].style.backgroundPosition = `${containerWidth / 4}px ${
          containerHeight / 4
        }px`;
      }
      if (i === 1) {
        images[i].style.backgroundPosition = `-${containerWidth / 4}px ${
          containerHeight / 4
        }px`;
      }

      if (i === 2) {
        images[i].style.backgroundPosition = `${containerWidth / 4}px -${
          containerHeight / 4
        }px`;
      }

      if (i === 3) {
        images[i].style.backgroundPosition = `-${containerWidth / 4}px -${
          containerHeight / 4
        }px`;
      }
    }
  };
}

document.querySelector(".left").onclick = (e) => {
  console.log(e.target.parentElement);
};

addImageBtn.addEventListener("click", addImage);

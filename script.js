const flipImageWrapper = document.querySelector(".image-container");
const addImageBtn = document.querySelector(".add-image-btn");
const addImageInput = document.querySelector(".add-image-input");

function showErrorImg() {
  const errorImg = new Image();
  errorImg.classList.add("image-cover");
  errorImg.src = "./error.webp";
  flipImageWrapper.appendChild(errorImg);
}

function addImage() {
  flipImageWrapper.textContent = "";

  const url = addImageInput.value;

  if (url.trim().length === 0) {
    showErrorImg();
    return;
  }

  const img = new Image();
  img.classList.add("image-cover");
  img.src = url;

  img.onerror = showErrorImg;
  img.onload = () => flipImageWrapper.appendChild(img);
}

addImageBtn.addEventListener("click", addImage);

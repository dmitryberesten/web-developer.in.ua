document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".image");

  images.forEach(function (image) {
    image.addEventListener("click", function () {
      var overlay = document.createElement("div");
      overlay.classList.add("overlay");

      var modalImage = document.createElement("img");
      modalImage.src = this.src;
      modalImage.alt = this.alt;
      modalImage.classList.add("modal-image");

      overlay.appendChild(modalImage);
      document.body.appendChild(overlay);

      setTimeout(function () {
        overlay.classList.add("open");
      }, 0);

      overlay.addEventListener("click", function () {
        overlay.classList.remove("open");

        setTimeout(function () {
          document.body.removeChild(overlay);
        }, 300);
      });
    });
  });
});

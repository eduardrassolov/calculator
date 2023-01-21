const Theme_1 = {
  "--text-color": "whitesmoke",
  "--bg": "hsl(222, 26%, 31%)",
  "--bg-output": "hsl(224, 36%, 15%)",
  "--bg-btn-field": "hsl(223, 31%, 20%)",
  "--bg-slider": "hsl(224, 36%, 15%)",
  "--bg-slider-thumb": "hsl(6, 63%, 50%)",
  "--bg-buttons": "hsl(30, 25%, 89%)",
  "--bg-buttons-shadow": "hsl(28, 16%, 65%)",
  "--buttons-text": "hsl(223, 31%, 20%)",

  "--button-del-res": "hsl(225, 21%, 49%)",
  "--button-del-res-text": "hsl(0, 0%, 100%)",
  "--button-del-res-shadow": "hsl(224, 28%, 35%)",

  "--button-equal": "hsl(6, 63%, 50%)",
  "--button-equal-text": "hsl(0, 0%, 100%)",
  "--button-equal-shadow": "hsl(6, 70%, 34%)",
};

const Theme_2 = {
  "--text-color": "hsl(60, 10%, 19%)",
  "--bg": "hsl(0, 0%, 90%)",
  "--bg-output": "hsl(0, 0%, 93%)",
  "--bg-btn-field": "hsl(0, 5%, 81%)",
  "--bg-slider": "hsl(0, 5%, 81%)",
  "--bg-slider-thumb": "hsl(25, 98%, 40%)",
  "--bg-buttons": "hsl(30, 25%, 89%)",
  "--bg-buttons-shadow": "hsl(28, 16%, 65%)",
  "--buttons-text": "hsl(223, 31%, 20%)",

  "--button-del-res": "hsl(185, 42%, 37%)",
  "--button-del-res-text": "hsl(0, 0%, 100%)",
  "--button-del-res-shadow": "hsl(185, 58%, 25%)",

  "--button-equal": "hsl(25, 98%, 40%)",
  "--button-equal-text": "hsl(0, 0%, 100%)",
  "--button-equal-shadow": "hsl(6, 70%, 34%)",
};

const Theme_3 = {
  "--text-color": "hsl(52, 100%, 62%)",
  "--bg": "hsl(268, 75%, 9%)",
  "--bg-output": "hsl(268, 71%, 12%)",
  "--bg-btn-field": "hsl(268, 71%, 12%)",
  "--bg-slider": "hsl(268, 71%, 12%)",
  "--bg-slider-thumb": "hsl(176, 100%, 44%)",
  "--bg-buttons": "hsl(268, 47%, 21%)",
  "--bg-buttons-shadow": "hsl(290, 70%, 36%)",
  "--buttons-text": "hsl(52, 100%, 62%)",

  "--button-del-res": "hsl(281, 89%, 26%)",
  "--button-del-res-text": "hsl(0, 0%, 100%)",
  "--button-del-res-shadow": "hsl(285, 91%, 52%)",

  "--button-equal": "hsl(176, 100%, 44%)",
  "--button-equal-text": "hsl(198, 20%, 13%)",
  "--button-equal-shadow": "hsl(177, 92%, 70%)",
};

const SLIDER = document.querySelector(".theme-choose");

const themeArr = [Theme_1, Theme_2, Theme_3];

SLIDER.addEventListener("change", (element) => {
  console.log(element.target.value);
  changeTheme(Number(element.target.value) - 1);
});

function changeTheme(index) {
  for (let key in themeArr[index]) {
    document.documentElement.style.setProperty(key, themeArr[index][key]);
  }
}

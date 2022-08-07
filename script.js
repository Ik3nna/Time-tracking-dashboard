const data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          "current": 5,
          "previous": 7
        },
        weekly: {
          "current": 32,
          "previous": 36
        },
        monthly: {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          "current": 1,
          "previous": 2
        },
        weekly: {
          "current": 10,
          "previous": 8
        },
        monthly: {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          "current": 0,
          "previous": 1
        },
        weekly: {
          "current": 4,
          "previous": 7
        },
        monthly: {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          "current": 1,
          "previous": 1
        },
        weekly: {
          "current": 4,
          "previous": 5
        },
        monthly: {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          "current": 1,
          "previous": 3
        },
        weekly: {
          "current": 5,
          "previous": 10
        },
        monthly: {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          "current": 0,
          "previous": 1
        },
        weekly: {
          "current": 2,
          "previous": 2
        },
        monthly: {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

const hr1 = document.getElementById("hr1");
const hr2 = document.getElementById("hr2");
const hr3 = document.getElementById("hr3");
const hr4 = document.getElementById("hr4");
const hr5 = document.getElementById("hr5");
const hr6 = document.getElementById("hr6");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");


window.addEventListener("DOMContentLoaded", function () {
    weekly.classList.add("color");
})

daily.addEventListener("click", function () {
    daily.classList.add("color");
    weekly.classList.remove("color");
    weekly.classList.add("nocolor");
    monthly.classList.remove("color");
    monthly.classList.add("nocolor");

    hr1.textContent = "5hrs";
    hr2.textContent = "1hr";
    hr3.textContent = "0";
    hr4.textContent = "1hr";
    hr5.textContent = "1hr";
    hr6.textContent = "0";

    one.textContent = "7hrs";
    two.textContent = "2hrs";
    three.textContent = "1hr";
    four.textContent = "1hr";
    five.textContent = "3hrs";
    six.textContent = "1hr";
});

weekly.addEventListener("click", function () {
    weekly.classList.add("color");
    daily.classList.remove("color");
    daily.classList.add("nocolor");
    monthly.classList.remove("color");
    monthly.classList.add("nocolor");

    hr1.textContent = "32hrs";
    hr2.textContent = "10hrs";
    hr3.textContent = "4hrs";
    hr4.textContent = "4hrs";
    hr5.textContent = "5hrs";
    hr6.textContent = "2hrs";

    one.textContent = "36hrs";
    two.textContent = "8hrs";
    three.textContent = "7hrs";
    four.textContent = "5hrs";
    five.textContent = "10hrs";
    six.textContent = "2hrs";
});

monthly.addEventListener("click", function () {
    monthly.classList.add("color");
    daily.classList.remove("color");
    daily.classList.add("nocolor");
    weekly.classList.remove("color");
    weekly.classList.add("nocolor");

    hr1.textContent = "103hrs";
    hr2.textContent = "23hrs";
    hr3.textContent = "13hrs";
    hr4.textContent = "11hrs";
    hr5.textContent = "21hrs";
    hr6.textContent = "7hrs";

    one.textContent = "128hrs";
    two.textContent = "29hrs";
    three.textContent = "19hr";
    four.textContent = "18hrs";
    five.textContent = "23hrs";
    six.textContent = "11hrs";
});


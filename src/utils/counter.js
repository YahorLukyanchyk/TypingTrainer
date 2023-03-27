import $ from "jquery";

function counter() {
  $(document).ready(function () {
    var counter = 3;

    var timer = setInterval(function () {
      $("#countdown").remove();

      var countdown = $(
        '<span id="countdown">' +
          (counter === 0 ? "КЛАЦАЙ!" : counter) +
          "</span>"
      );
      countdown.appendTo($(".main"));
      setTimeout(() => {
        if (counter > -1) {
          $("#countdown").css({ "font-size": "40vw", opacity: 0 });
        } else {
          $("#countdown").css({ "font-size": "10vw", opacity: 100 });
          setTimeout(() => {
            $("#countdown").css({ "font-size": "10vw", opacity: 0 });
          }, 10);
        }
      }, 20);
      counter--;
      if (counter === -1) clearInterval(timer);
    }, 1000);
  });
}

export default counter;

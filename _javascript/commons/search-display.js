/*
* This script make #search-result-wrapper switch to unloaded or shown automatically.
*/

$(function() {
<<<<<<< HEAD

  const btnSbTrigger = $("#sidebar-trigger");
  const btnSearchTrigger = $("#search-trigger");
  const btnCancel = $("#search-cancel");
  const btnClear = $("#search-cleaner");

=======
  const btnSbTrigger = $("#sidebar-trigger");
  const btnSearchTrigger = $("#search-trigger");
  const btnCancel = $("#search-cancel");
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
  const main = $("#main");
  const topbarTitle = $("#topbar-title");
  const searchWrapper = $("#search-wrapper");
  const resultWrapper = $("#search-result-wrapper");
  const results = $("#search-results");
  const input = $("#search-input");
  const hints = $("#search-hints");

  const scrollBlocker = (function () {
    let offset = 0;
    return {
      block() {
        offset = window.scrollY;
        $("html,body").scrollTop(0);
      },
      release() {
        $("html,body").scrollTop(offset);
      },
      getOffset() {
        return offset;
      }
    };
  }());

<<<<<<< HEAD

  /*--- Actions in small screens (Sidebar unloaded) ---*/
=======
  /*--- Actions in mobile screens (Sidebar hidden) ---*/
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe

  const mobileSearchBar = (function () {
    return {
      on() {
        btnSbTrigger.addClass("unloaded");
        topbarTitle.addClass("unloaded");
        btnSearchTrigger.addClass("unloaded");
        searchWrapper.addClass("d-flex");
        btnCancel.addClass("loaded");
      },
      off() {
        btnCancel.removeClass("loaded");
        searchWrapper.removeClass("d-flex");
        btnSbTrigger.removeClass("unloaded");
        topbarTitle.removeClass("unloaded");
        btnSearchTrigger.removeClass("unloaded");
      }
    };
  }());

  const resultSwitch = (function () {
    let visible = false;

    return {
      on() {
        if (!visible) {
          // the block method must be called before $(#main) unloaded.
          scrollBlocker.block();
          resultWrapper.removeClass("unloaded");
          main.addClass("unloaded");
          visible = true;
        }
      },
      off() {
        if (visible) {
          results.empty();
          if (hints.hasClass("unloaded")) {
            hints.removeClass("unloaded");
          }
          resultWrapper.addClass("unloaded");
<<<<<<< HEAD
          btnClear.removeClass("visible");
=======
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
          main.removeClass("unloaded");

          // now the release method must be called after $(#main) display
          scrollBlocker.release();

          input.val("");
          visible = false;
        }
      },
      isVisible() {
        return visible;
      }
    };

  }());

<<<<<<< HEAD

=======
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
  function isMobileView() {
    return btnCancel.hasClass("loaded");
  }

  btnSearchTrigger.click(function() {
    mobileSearchBar.on();
    resultSwitch.on();
    input.focus();
  });

  btnCancel.click(function() {
    mobileSearchBar.off();
    resultSwitch.off();
  });

  input.focus(function() {
    searchWrapper.addClass("input-focus");
  });

  input.focusout(function() {
    searchWrapper.removeClass("input-focus");
  });

<<<<<<< HEAD
  input.on("keyup", function(e) {
    if (e.keyCode === 8 && input.val() === "") {
      if (!isMobileView()) {
        resultSwitch.off();
      } else {
        hints.removeClass("unloaded");
      }
    } else {
      if (input.val() !== "") {
        resultSwitch.on();

        if (!btnClear.hasClass("visible")) {
          btnClear.addClass("visible");
        }

        if (isMobileView()) {
          hints.addClass("unloaded");
        }
=======
  input.on("input", () => {
    if (input.val() === "") {
      if (isMobileView()) {
        hints.removeClass("unloaded");
      } else {
        resultSwitch.off();
      }

    } else {
      resultSwitch.on();
      if (isMobileView()) {
        hints.addClass("unloaded");
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
      }
    }
  });

<<<<<<< HEAD
  btnClear.on("click", function() {
    input.val("");
    if (isMobileView()) {
      hints.removeClass("unloaded");
      results.empty();
    } else {
      resultSwitch.off();
    }
    input.focus();
    btnClear.removeClass("visible");
  });

=======
>>>>>>> 339321defc3aec22b7e4a86af8fffb659a57e5fe
});

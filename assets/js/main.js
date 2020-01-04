$(document).ready(function() {
  // navbar on mobile view
  $(".box").click(function() {
    $("nav").toggleClass("hidden");
  });
  $(".hidden-href").click(function() {
    $("nav").addClass("hidden");
  });

  // skill animation
  // $(".skillbar").each(function() {
  //   $(this)
  //     .find(".skillbar-bar")
  //     .animate({ width: $(this).attr("data-percent") }, 4000);
  // });

  // hidden-boxes on portfolio page
  $(".work-imgs").hover(function(event) {
    $(event.currentTarget.firstElementChild).toggleClass("active");
  });

  // anchor on click change color
  $(".hidden-href").on("click", function(event) {
    // on click add class to anchor tag
    $("a.active").removeClass("active");
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .removeClass("active");

    event.preventDefault();

    var hash = this.hash;

    $("html").animate({
      scrollTop: $(hash).offset().top
    });
  });

  // about to contact
  $(".anchor-link").on("click", function(event) {
    $(".home-page").removeClass("active");
    $(".about-page").removeClass("active");
    $(".projects-page").removeClass("active");
    $(".contact-page").addClass("active");

    event.preventDefault();

    var hash = this.hash;

    $("html").animate({
      scrollTop: $(hash).offset().top
    });
  });

  // logo
  $(".navbar-brand").on("click", function(event) {
    $(".about-page").removeClass("active");
    $(".contact-page").removeClass("active");
    $(".projects-page").removeClass("active");
    $(".home-page").addClass("active");

    event.preventDefault();

    var hash = this.hash;

    $("html").animate({
      scrollTop: $(hash).offset().top
    });
  });

  // scroll position
  $(window).scroll(function() {
    var $height = $(window).scrollTop();

    if ($height > 10) {
      $(".home-page").addClass("active");

      $(".about-page").removeClass("active");
      $(".projects-page").removeClass("active");
      $(".contact-page").removeClass("active");
    }

    if ($height > 500) {
      $(".about-page").addClass("active");

      $(".home-page").removeClass("active");
      $(".projects-page").removeClass("active");
      $(".contact-page").removeClass("active");
    }

    if ($height > 1300) {
      $(".projects-page").addClass("active");

      $(".home-page").removeClass("active");
      $(".about-page").removeClass("active");
      $(".contact-page").removeClass("active");
    }

    if ($height > 2400) {
      $(".contact-page").addClass("active");

      $(".home-page").removeClass("active");
      $(".about-page").removeClass("active");
      $(".projects-page").removeClass("active");
    }
  });
});

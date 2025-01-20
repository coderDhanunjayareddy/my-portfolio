$(document).ready(function () {
  AOS.init();
  const eventswiper = document.querySelector(".swiper-wrapper");
  const event = [
    // eslint-disable-next-line linebreak-style
    {
      title: "DevFest 2024, HYD",
      image: "assets/images/event/IMG1.jpg",
    },
    {
      title: "DevFest 2024, HYD",
      image: "assets/images/event/IMG2.jpg",
    },
    { title: "DevFest 2024, HYD",
      image: "assets/images/event/IMG3.jpg" ,
    },
    {
      title: "DevFest 2024, HYD",
      image: "assets/images/event/IMG4.jpg",
    },
    {
      title: "Hacker_Meetup(THM) @Salesforce",
      image: "assets/images/event/IMG5.jpg",
    },
    {
      title: "Hacker_Meetup(THM) @Salesforce",
      image: "assets/images/event/IMG6.png",
    },
    {
      title: "Hacker_Meetup(THM) @Salesforce",
      image: "assets/images/event/IMG7.jpg",
    },
    {
      title: "Knowledgw City,HYD",
      image: "assets/images/event/IMG8.jpg",
    },
    {
      title: "GitTogether @Microsoft HYD",
      image: "assets/images/event/IMG9.jpg",
    },
    {
      title: "GitTogether @Microsoft HYD",
      image: "assets/images/event/IMG10.jpg",
    },
    { title: "GitTogether @Microsoft HYD",
      image: "assets/images/event/IMG11.jpg" ,
    },
    {
      title: "Student_Tribe Meetup 22 @THub",
      image: "assets/images/event/IMG12.jpg",
    },
    {
      title: "Student_Tribe Meetup 22 @THub",
      image: "assets/images/event/IMG13.jpg",
    },
    {
      title: "Student_Tribe Meetup 22 @THub",
      image: "assets/images/event/IMG14.jpg",
    },
    {
      title: "Student_Tribe Meetup 22 @THub",
      image: "assets/images/event/IMG15.jpg",
    },
    {
      title: "Student_Tribe Meetup 22 @THub",
      image: "assets/images/event/IMG16.jpg",
    },
    {
      title: "Abroad EXPO 2024",
      image: "assets/images/event/IMG17.jpg",
    },
    {
      title: "Abroad EXPO 2024",
      image: "assets/images/event/IMG18.jpg",
    },
    { title: "Abroad EXPO 2024",
      image: "assets/images/event/IMG19.jpg" ,
    },
    {
      title: "FlutterInProduction_Meetup (FlutterHYD)",
      image: "assets/images/event/IMG20.jpg",
    },
    {
      title: "FlutterInProduction_Meetup (FlutterHYD)",
      image: "assets/images/event/IMG21.jpg",
    },
    {
      title: "FlutterInProduction_Meetup (FlutterHYD)",
      image: "assets/images/event/IMG22.jpg",
    },
    {
      title: "GitTogether @Microsoft HYD",
      image: "assets/images/event/IMG23.jpg",
    },
   
  ];
  // Filling the details from the object array event
  function fillData() {
    let output = "";
    for (let x = 0; x < event.length; x++) {
      output += `
    <div class="swiper-slide">
    <div class="img-container">
      <img src=${event[x].image} alt="" class="img-fluid" />
    </div>
    <div class="container arrow_contain">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="wrapper">
            <div class="content">
              <div class="title">
                <div class="text-wrapper">
                  <div class="text-inner">
                  ${event[x].title}
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div> 
          <!-- wraper freee -->
      </div>
    </div>
  </div>`;
    }
    eventswiper.innerHTML = output;
  }
  document.addEventListener("DOMContentLoaded", fillData());
  const parallaxSliderOptions = {
    speed: 1000,
    effect: "coverflow",
    autoplay: false,
    parallax: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 30,
      depth: 20,
      stretch: 0,
      modifier: 1,
      slideShadows: true,
    },
    // parallax effect
    on: {
      init: function () {
        const swiper = this;
        for (let i = 0; i < swiper.slides.length; i++) {
          $(swiper.slides[i])
            .find(".img-container")
            .attr({
              "data-swiper-parallax": 0.75 * swiper.width,
              "data-swiper-paralalx-opacity": 0.5,
            });
        }
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      transitionEnd: function () {
        const swiper = this;
        const index = swiper.activeIndex;
        $(swiper.slides).removeClass("active");
        $(swiper.slides[index]).addClass("active");
      },
      resize: function () {
        this.update();
      },
    },
    navigation: {
      nextEl: ".image-slider .next-ctrl",
      prevEl: ".image-slider .prev-ctrl",
    },
  };
  // initializing swiper
  const slider = new Swiper(".image-slider", parallaxSliderOptions);
});

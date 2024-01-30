"strict";
const days_bottom = document.querySelector(".day-bottom");
const days_top = document.querySelector(".day-top");
const hours_top = document.querySelector(".hours-top");
const hours_bottom = document.querySelector(".hours-bottom");
const min_top = document.querySelector(".min-top");
const min_bottom = document.querySelector(".min-bottom");
let secs_top = document.querySelector(".secs-top");
let secs_bottom = document.querySelector(".secs-bottom");

const section_page = document.querySelector(".section-page");

//timer function
const st_day = 8;
const st_hours = 23;
const st_min = 55;
const st_secs = 40;
// total time value
let time = st_day * 24 * 60 * 60 + st_hours * 60 * 60 + st_min * 60 + st_secs;

const time_function = () => {
  //testing theory out
  const day = Math.floor(time / (24 * 60 * 60));
  const hour = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const secs = time % 60;

  days_top.textContent = day;
  days_bottom.textContent = day;

  hours_top.textContent = hour;
  hours_bottom.textContent = hour;

  min_top.textContent = minutes;
  min_bottom.textContent = minutes;

  secs_top.textContent = secs;
  secs_bottom.textContent = secs;
  const html = `
  <section class="w-full h-full flex justify-center  md:gap-14">
  <!-- days -->
  <div class="">
    <div class=" rounded-md  z-40  shadow-md w-24 h-16 bg-Very-dark-blue flex flex-col items-center justify-center">
      <p class="text-Soft-red text-4xl font-semibold day-top">${day}</p>
    </div>
    <div class="-mt-8  rounded-md shadow-md w-24 h-16 bg-Very-dark-mostly-black flex flex-col items-center justify-center">
      <p class="text-Soft-red text-4xl font-semibold day-bottom ">${day}</p>
    </div>
    <p class="text-Dark-desaturated-blue font-semibold text-xl capitalize text-center">days</p>
  </div>
  <!-- hours -->
  <div>
    <div class=" rounded-md z-40  shadow-md w-24 h-16 bg-Very-dark-blue flex flex-col items-center justify-center">
      <p class="text-Soft-red text-4xl font-semibold  hours-top">${hour}</p>
    </div>
    <div class="-mt-8  rounded-md shadow-md w-24 h-16 bg-Very-dark-mostly-black flex flex-col items-center justify-center">
      <p class="text-Soft-red text-4xl font-semibold hours-bottom ">${hour}</p>
    </div>
    <p class="text-Dark-desaturated-blue font-semibold text-xl capitalize text-center">hours</p>
  </div>
  <!-- mins -->
  <div>
    <div class="rounded-md z-40  shadow-md w-24 h-16 bg-Very-dark-blue flex flex-col items-center justify-center">
      <p class="text-Soft-red text-4xl font-semibold min-top">${minutes}</p>
    </div>
    <div class="-mt-8  rounded-md shadow-md w-24 h-16 bg-Very-dark-mostly-black flex flex-col items-center justify-center">
      <p class="text-Soft-red text-4xl font-semibold min-bottom ">${minutes}</p>
    </div>
    <p class="text-Dark-desaturated-blue font-semibold text-xl capitalize text-center">minutes</p>
  </div>
  <!-- secs -->
  <div>
    <div class=" rounded-md z-40  shadow-md w-24 h-16 bg-Very-dark-blue flex flex-col items-center justify-center">
      <p class="text-Soft-red text-4xl font-semibold secs-top">${secs}</p>
    </div>
    <div class="-mt-8  rounded-md shadow-md w-24 h-16 bg-Very-dark-mostly-black flex flex-col items-center justify-center">
      <p class="text-Soft-red text-4xl font-semibold secs-bottom">${secs}</p>
    </div>
    <p class="text-Dark-desaturated-blue font-semibold text-xl capitalize text-center">seconds</p>
  </div>
</section>
  `;
  section_page.innerHTML = html;

  if (time <= 0) {
    clearInterval(invalid);
  }

  time--;
};

const invalid = setInterval(time_function, 1000);

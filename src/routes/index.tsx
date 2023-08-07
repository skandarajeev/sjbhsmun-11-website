import { component$ } from "@builder.io/qwik";
import style from 'styles.css'
import logo from '../media/MUN LOGO.png';
import circle from '../media/Ellipse 1.svg';
import bgGradient from '../media/backgroundGradient.png'



export default component$(() => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>

      {/* HERO SECTION! */}

      <div class="flex flex-col items-center justify-center my-auto h-screen">
        <div class="">
          <h1 class="text-[2rem] m-auto text-gradient-to-r font-poppins from-yellow-500 to-white bg-clip-text mun-gradient mun-typography">SJBHSMUN 2023</h1>
        </div>
        <img class=" w-80 md:w-6/12 h-auto md:h-200   " src={logo} alt="" />
        <img class=" w-80 md:w-6/12 h-auto md:h-200   " src={circle} alt="" />

        <div class="text-center my-5">
          <p class="text-[#646464] font-poppins text-xl ">Welcome to our</p>
          <p class="text-white font-poppins text-4xl tracking-[11px]">11TH EDITION</p>
        </div>
      </div>
      {/* HERO SECTION END! */}

      {/* DATE REVEAL SECTION */}
      <div class="background-gradient text-center flex flex-col h-[100%]">
        <p class="font-poppins text-white mb-2 ">JOIN US ON</p>
        <p class="font-poppins mun-gradient text-5xl font-semibold mb-2">OCTOBER</p>

        <div class="flex m-auto gap-[3rem] mb-2">
          <p class="font-poppins text-white ">23rd</p>
          <p class="font-poppins text-white">24th</p>
          <p class="font-poppins text-white">25th</p>
        </div>

        <div class="flex gap-[3rem] m-auto mb-2">
          <p class="font-poppins mun-gradient text-5xl font-semibold">30</p>
          <p class="font-poppins mun-gradient text-5xl font-semibold">12</p>
          <p class="font-poppins mun-gradient text-5xl font-semibold">60</p>
          <p class="font-poppins mun-gradient text-5xl font-semibold">30</p>
        </div>

        <div class="flex gap-[3rem] m-auto mb-2">
          <p class="font-poppins text-white">Days</p>
          <p class="font-poppins text-white">Hours</p>
          <p class="font-poppins text-white">Minutes</p>
          <p class="font-poppins text-white">Seconds</p>
        </div>

      </div>

      {/* DATE REVEAL END */}

      {/* Committees Reveal section */}
      <section class="m-3">
        <div class="committees" >
          <div class="committees-background"></div>

          <div class=" flex flex-col gap-3 headingText">
            <h1 class="font-poppins text-5xl text-center text-white ">What are the</h1>
            <h1 class="font-poppins text-5xl text-center text-white tracking-[5px] ">Committees?</h1>
          </div>

          <div>
            <div class="mt-[1rem] gradient-zero mx-auto w-[70vw] h-[140px] rounded-lg p-[10px] ">
              <div class="flex justify-center flex-col  gradient-zeroOne  rounded-md  w-[100%] h-[100%]">
                <p class="text-white font-poppins text-center text-5xl align-middle ">Committee Name</p>
              </div>
            </div>

            <div class="mt-[1rem] gradient-zero mx-auto w-[70vw] h-[140px] rounded-lg p-[10px] ">
              <div class="flex justify-center flex-col  gradient-zeroOne  rounded-md  w-[100%] h-[100%]">
                <p class="text-white font-poppins text-center text-5xl align-middle ">Committee Name</p>
              </div>
            </div>

            <div class="mt-[1rem] gradient-zero mx-auto w-[70vw] h-[140px] rounded-lg p-[10px] ">
              <div class="flex justify-center flex-col  gradient-zeroOne  rounded-md  w-[100%] h-[100%]">
                <p class="text-white font-poppins text-center text-5xl align-middle ">Committee Name</p>
              </div>
            </div>

            <div class="mt-[1rem] gradient-zero mx-auto w-[70vw] h-[140px] rounded-lg p-[10px] ">
              <div class="flex justify-center flex-col  gradient-zeroOne  rounded-md  w-[100%] h-[100%]">
                <p class="text-white font-poppins text-center text-5xl align-middle ">Committee Name</p>
              </div>
            </div>

            <div class="mt-[1rem] gradient-zero mx-auto w-[70vw] h-[140px] rounded-lg p-[10px] ">
              <div class="flex justify-center flex-col  gradient-zeroOne  rounded-md  w-[100%] h-[100%]">
                <p class="text-white font-poppins text-center text-5xl align-middle ">Committee Name</p>
              </div>
            </div>

            <div class="mt-[1rem] gradient-zero mx-auto w-[70vw] h-[140px] rounded-lg p-[10px] ">
              <div class="flex justify-center flex-col  gradient-zeroOne  rounded-md  w-[100%] h-[100%]">
                <p class="text-white font-poppins text-center text-5xl align-middle ">Committee Name</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
});


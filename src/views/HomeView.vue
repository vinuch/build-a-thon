<script setup lang="ts">
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  // console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

<template>
  <main>
    <div class="bg-primary text-white py-24  h-">
      <div class="md:px-24 px-8">
        <div class="flex flex-wrap gap-4 ">
          <img src="/FMoCIDE-logo.png" alt="FMoCIDE logo" class="w-auto h-12 md:h-24">
          <img src="/raspberry.png" alt="raspberry pi logo" class="w-aut0 h-12 md:h-24">
          <img src="/build-a-thon.png" alt="build-a-thon logo" class="w-auto h-12 md:h-24">
        </div>

        <div class="flex flex-wrap items-start justify-between my-24 ">
          <div class=" w-full md:w-6/12">
            <h1 class="font-bold text-2xl mb-4 md:text-5xl md:leading-relaxed">Introducing senior secondary students to
              embedded systems
              and maker culture</h1>
            <p>Join us for the biggest Build-A-Thon yet!</p>
            <p class="inline-block bg-secondary text-primary p-3 my-8 md:my-4"><span class="font-medium">LOCATIONS</span>
              IMO,
              MAIDUGURI, OGUN</p>
          </div>
          <div class="relative w-full md:w-6/12">
            <img src="/students.svg" alt="FMoCIDE logo" class="banner-img h-auto object-fill">

          </div>

        </div>
      </div>


      <div class="flex justify-center ">
        <p class="w-full md:w-8/12 text-center text-white font-bold text-lg leading-relaxed">Build-A-Thon goes beyond just
          programming but presents an opportunity to introduce
          a
          new learning experience designed to cultivate critical thinking, teamwork, and problem-solving skills among our
          secondary school students</p>
      </div>

      <div class="bg-white md:px-24 md:py-64 py-32 h-auto text-primary clip-svg overflow-hidden">
        <div class="flex flex-wrap justify-center items-start">
          <div class="w-full flex justify-center md:w-2/12">
            <img src="/speaker.svg" alt="speaker" class=" banner-img h-auto object-fill">

          </div>
          <div class="w-full md:w-8/12 flex justify-center my-6">

            <h4 class="text-2xl text-center md:text-5xl leading-relaxed font-bold w-10/12">3 locations, <br> 4-days,<br> 50 schools,
              <br> 1500 young students
            </h4>
          </div>
          <div class="w-full hidden md:flex justify-center md:w-2/12">

            <img src="/mentor.svg" alt="mentor" class="banner-img h-auto object-fill">
          </div>

        </div>
        <div class="flex flex-wrap  justify-center items-start">
          <div class="w-full hidden md:flex justify-center md:w-2/12">
            <img src="/hardware.svg" alt="netowrking hardware" class=" banner-img h-auto object-fill">

          </div>
          <div class="w-full md:w-8/12 flex justify-center text-center ">
            <div class="w-10/12 flex-row">
              <h4 class="text-2xl md:text-5xl leading-relaxed font-bold w-full justify-self-center text-secondary my-4">simultaneously
                collaborating
                with technology.</h4>
              <p class="font-medium">Exceptional teams in each location will be recognised across different categories,
                including, the most
                innovative design, most sustainable project and an award for the project with the most utility.</p>

            </div>
          </div>
          <div class="w-full flex justify-center md:w-2/12 self-end">

            <img src="/black-child.svg" alt="black-child" class="banner-img h-auto object-fill">
          </div>

        </div>
        <svg width="1440" class="h-10 md:h-64" viewBox="0 0 1440 0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="svgPath">
              <path
                d="M2309.26 896.207C2316.52 729.514 2206.52 625.018 2075.07 606.815C2034.86 601.252 2002.6 575.512 1988.06 539.9C1981.84 524.669 1974.76 509.648 1966.79 494.881C1898.41 368.358 1778.41 285.878 1641.68 256.237C1602.17 247.669 1571.44 220.59 1559.32 183.928C1539.55 124.165 1496.55 69.0445 1426.18 28.8425C1392.29 9.48101 1352.57 -0.11123 1311.75 1.03625C1160.07 5.26004 1098.72 182.703 1004.23 182.703C909.74 182.703 785.69 197.072 694.855 112.871C693.55 111.661 692.679 110.763 691.536 109.749C608.543 35.9717 523.033 64.1324 473.866 92.4017C447.311 107.667 415.081 107.475 390.614 91.3924C199.402 -34.2589 -66.7431 3.06811 -230.821 188.153C-236.596 194.677 -242.172 201.292 -247.56 208.007C-280.141 248.684 -328.333 272.731 -379.003 276.076C-490.636 283.43 -600.957 361.896 -636.814 505.248C-646.259 543.018 -644.905 582.261 -632.908 618.195C-584.16 764.234 -455.573 821.659 -337.091 798.231C-319.672 794.79 -302.298 795.931 -286.261 800.982C-275.998 804.205 -267.87 812.041 -264.224 822.168C-207.624 979.225 -66.5142 1050.83 71.802 1036.45C117.962 1031.65 161.648 1051.57 188.862 1087.39C200.5 1102.7 223.5 1113.27 259.5 1115C481.031 1125.63 547.462 1049.83 682.377 1049.83C728.693 1048.58 875.879 1084.79 900.76 1122.44C962.105 1170.65 1014.35 1106.23 1104.66 1131.87C1194.97 1157.51 1222.46 1074.2 1267.19 1061.74C1409.73 1022.05 1394.98 1086.14 1446.52 1110.53C1606.56 1119.96 1597.88 841.093 1724.98 1192.91C1733.51 1188.3 1741.87 1183.51 1750.07 1178.56C1799.71 1148.56 1858.9 1141.11 1912.5 1155.73C2030.56 1187.93 2175.29 1146.95 2268.78 1013.13C2293.41 977.865 2307.48 937.242 2309.26 896.229"
                fill="white" />

            </clipPath>
          </defs>
        </svg>

      </div>
      <div class="p-12 md:p-24 -mt-32 z-50 relative">
        <div class="flex justify-center">
          <h3 class="text-2xl md:text-4xl w-full md:w-8/12 font-bold text-center">A unique opportunity for students to explore ideas.</h3>

        </div>
        <div class="flex justify-center my-16">

          <div class="w-full h-auto rounded-2xl z-50 overflow-hidden shadow-md">
            <img src="/student-group2.png" alt="black-child" class="banner-img h-auto object-cover object-top">

          </div>

        </div>

      </div>
      <div class="clip-svg2 bg-white text-primary -mt-48 md:-mt-96 py-32 md:py-64 -px-24 overflow-hidden">
        <div class="flex flex-wrap justify-center my-40">
          <div class="w-full md:w-5/12 flex justify-center">
            <div class="w-10/12 rounded-2xl overflow-hidden">
              <img src="/connections.png" alt="black-child" class="banner-img h-auto object-cover ">

            </div>

          </div>
          <div class="w-full md:w-5/12 z-50 p-6">
            <h4 class="text-5xl font-bold">Goal</h4>

            <ul class="my-4">
              <li class="leading-loose py-2 font-medium">Showcase innovative projects</li>
              <li class="leading-loose py-2 font-medium">Recognize achievements</li>
              <li class="leading-loose py-2 font-medium">Foster future collaboration </li>
              <li class="leading-loose py-2 font-medium">Inspire future leaders </li>
              <li class="leading-loose py-2 font-medium">Promote lifelong learning</li>
            </ul>
          </div>
        </div>
        <svg width="1440" height="50" viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>

            <clipPath id="svgPath2">

              <path
                d="M2309.26 896.207C2316.52 729.514 2206.52 625.018 2075.07 606.815C2034.86 601.252 2002.6 575.512 1988.06 539.9C1981.84 524.669 1974.76 509.648 1966.79 494.881C1898.41 368.358 1778.41 285.878 1641.68 256.237C1602.17 247.669 1571.44 220.59 1559.32 183.928C1539.55 124.165 1496.55 69.0445 1426.18 28.8425C1392.29 9.48101 1352.57 -0.11123 1311.75 1.03625C1160.07 5.26004 1098.72 182.703 1004.23 182.703C909.74 182.703 785.69 197.072 694.855 112.871C693.55 111.661 692.679 110.763 691.536 109.749C608.543 35.9717 523.033 64.1324 473.866 92.4017C447.311 107.667 415.081 107.475 390.614 91.3924C199.402 -34.2589 -66.7431 3.06811 -230.821 188.153C-236.596 194.677 -242.172 201.292 -247.56 208.007C-280.141 248.684 -328.333 272.731 -379.003 276.076C-490.636 283.43 -600.957 361.896 -636.814 505.248C-646.259 543.018 -644.905 582.261 -632.908 618.195C-584.16 764.234 -455.573 821.659 -337.091 798.231C-319.672 794.79 -302.298 795.931 -286.261 800.982C-275.998 804.205 -267.87 812.041 -264.224 822.168C-207.624 979.225 -66.5142 1050.83 71.802 1036.45C117.962 1031.65 161.648 1051.57 188.862 1087.39C200.5 1102.7 223.5 1113.27 259.5 1115C481.031 1125.63 547.462 1049.83 682.377 1049.83C728.693 1048.58 875.879 1084.79 900.76 1122.44C962.105 1170.65 1014.35 1106.23 1104.66 1131.87C1194.97 1157.51 1222.46 1074.2 1267.19 1061.74C1409.73 1022.05 1394.98 1086.14 1446.52 1110.53C1606.56 1119.96 1597.88 841.093 1724.98 1192.91C1733.51 1188.3 1741.87 1183.51 1750.07 1178.56C1799.71 1148.56 1858.9 1141.11 1912.5 1155.73C2030.56 1187.93 2175.29 1146.95 2268.78 1013.13C2293.41 977.865 2307.48 937.242 2309.26 896.229"
                fill="white" />
            </clipPath>
          </defs>
        </svg>

      </div>

      <div class="p-12 md:px-24 flex flex-wrap-reverse items-center -mt-56 mb-48">
        <div class="w-full md:w-6/12">
          <h3 class="text-4xl font-bold ">Are you an educator, teacher or an active enthusiast?</h3>
          <p class="my-8">
            Do you live in Abeokuta, Imo or Maiduguri?
            Are you interested in supporting the students
            in this programme? If you answered yes to these
            questions, we would like to work with you
          </p>
          <button class="bg-secondary text-primary p-4 rounded-md">Apply to be an educator</button>
        </div>

        <div class="w-full md:w-6/12">
          <img src="/connection-student.svg" alt="black-child" class="banner-img h-auto object-cover ">

        </div>

      </div>

    </div>




  </main>
</template>

<style scoped>
.banner-img {
  object-position: right 45%
}

.clip-svg2 {
  clip-path: url(#svgPath2);
}

.clip-svg {
  clip-path: url(#svgPath);
}
</style>

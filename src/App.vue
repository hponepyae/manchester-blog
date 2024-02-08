

<template>
  <div class=" scroll-mx-0">
     <!-- start  -->
     <div class=" relative ">
    <!-- nav bar -->
      <div class=" z-10 grid xl:grid-cols-3 grid-cols-2 sticky xl:top-0" style="background-color: rgb(208, 7, 19);">
        <!-- start side  -->
        <div class=" xl:p-1 flex  align-items-center ">
    <img src="../giphy.gif" alt="" class=" xl:w-3/12 w-2/4 xl:ml-16">
    <span class=" xl:text-3xl text-lg text-white font-koko "> Manchester United</span>
        </div>
        <!-- start side  -->

        <!-- center side  -->
        <div class="  xl:flex hidden justify-center align-items-center">
          <input type="text" placeholder="search" class=" p-2 w-3/4 outline-none hover:shadow-sm  hover:shadow-red-200">
        </div>
        <!-- center side  -->

        <!-- end side  -->
          <div class=" flex xl:justify-center justify-end mr-6 align-items-center">
        
              <ul class=" xl:flex justify-around mt-3  hidden">
                <li class="mr-5 font-meme font-semibold text-white hover:scale-105 hover:text-slate-600 duration-200 cursor-pointer"><a href="#home" class=" no-underline text-white">Home</a></li>
                <li class="mr-5 font-meme font-semibold text-white hover:scale-105 hover:text-slate-600 duration-200 cursor-pointer"><a href="" class=" no-underline text-white">Trophy</a></li>
                <li class="mr-5 font-meme font-semibold text-white hover:scale-105 hover:text-slate-600 duration-200 cursor-pointer"><a href="" class=" no-underline text-white">History</a></li>
                <li class="mr-5 font-meme font-semibold text-white hover:scale-105 hover:text-slate-600 duration-200 cursor-pointer"><a href="" class=" no-underline text-white">Iteams</a></li>
              </ul>

              <div v-if="!complete" class=" xl:hidden" @click="navTab()">
                <i class="fa-solid fa-bars text-white text-4xl"></i>
              </div>

               <div  v-if="complete" @click="navTab()" class=" focus:ease-out duration-500"> 
                 <i class="fa-solid fa-xmark text-white text-4xl"></i>
                </div>
              </div>
        <!-- end side  -->
  <!--  -->
       <!--  -->
      </div>
    <!-- nav bar -->
   <!-- phone nav  -->
     <div class=" xl:hidden absolute mt-3 p-3 w-full ease-in duration-700" :class="complete ? 'top-[4%]' : '  top-[-10%]'"  >
                 <ul class=" bg-red-600 p-1 flex rounded-lg flex-col align-items-center">
                  <li class="my-3 "><a href="#home" class="  text-white hover:text-black font-semibold no-underline text-lg">Home</a></li>
                  <li class="my-3"><a href="" class=" text-white hover:text-black  font-semibold no-underline text-lg">Trophy</a></li>
                  <li class="my-3"><a href="" class=" text-white hover:text-black  font-semibold no-underline text-lg">History</a></li>
                  <li class="my-3"><a href="" class=" text-white hover:text-black  font-semibold no-underline text-lg">Iteams</a></li>
                 </ul>
            </div>
            <!-- phone nav  -->

                <!-- home  -->
            <div class=" my-36" id="home">
              <div class="grid xl:grid-cols-2 grid-cols-1">
                <div class="  text-end  flex xl:justify-end justify-center xl:mr-32"> 
                  <img src="../logo.png" alt="" class=" xl:w-5/12 w-8/12" >
                </div>
                <div class=" xl:border-l-8  border-red-700">
                     <div class=" flex flex-col  justify-center items-center xl:mt-10  xl:p-7 p-2  mt-5">
                         <h1 class=" font-koko font-simibold xl:text-5xl text-2xl text-red-700">Manchester United</h1>
                        
                         <p class="yoshi p-2 text-red-700 font-semibold">Manchester United Football Club, commonly referred to as Man United (often stylised as Man Utd), or simply United, is a professional football club based in Old Trafford, Greater Manchester, England.</p>
                     </div>
                </div>
              </div>
            </div>
                 <!-- home  -->

                 <!-- trophy  -->
              <div class=" my-52 ">
      <h1 class=" font-koko font-bold text-red-700 text-center mt-10" data-aos="fade"  data-aos-duration="2000" data-aos-easing="ease-in-out"  data-aos-once="false">Trophy</h1>
       <p class=" my-32 xl:w-3/4 w-4/4 mx-auto xl:p-2 p-3 font-meme text-red-600 font-semibold " data-aos="fade"  data-aos-duration="2000" data-aos-easing="ease-in-out"  data-aos-once="false"
       
       >Manchester United is one of the most successful clubs in Europe in terms of trophies won.[261] The club's first trophy was the Manchester Cup, which they won as Newton Heath LYR in 1886.[262] In 1908, the club won their first league title, and won the FA Cup for the first time the following year. Since then, they have gone on to win a record 20 top-division titles – including a record 13 Premier League titles – and their total of 12 FA Cups is second only to Arsenal (14). Those titles have meant the club has appeared a record 30 times in the FA Community Shield (formerly the FA Charity Shield), which is played at the start of each season between the winners of the league and FA Cup from the previous season; of those 30 appearances, Manchester United have won a record 21, including four times when the match was drawn and the trophy shared by the two clubs.</p>
              <div class=" grid grid-cols-1 mt-10">
                 
                <div class=" flex flex-col justify-center items-center " data-aos="zoom-in" data-aos-easing="ease-in-sine"  data-aos-once="false" data-aos-duration="2000">
                <img src="../triple.png" alt="" class=" xl:w-3/12 w-8/12" >
                <h2 class=" font-koko xl:text-3xl text-lg text-red-700 font-semibold my-5">The Treble First Winner In England (1998-1999)</h2>
                </div>

                <p class=" my-20 w-3/4 mx-auto xl:p-2 font-meme text-red-600 font-semibold " data-aos="fade"  data-aos-duration="2000" data-aos-easing="ease-in-out"  data-aos-once="false">
                  In the 1998–99 season, Manchester United became the first team to win the Premier League, FA Cup and UEFA Champions League – "The Treble" – in the same season.[47] Trailing 1–0 going into injury time in the 1999 UEFA Champions League final, Teddy Sheringham and Ole Gunnar Solskjær scored late goals to claim a dramatic victory over Bayern Munich, in what is considered one of the greatest comebacks of all time. That summer, Ferguson received a knighthood for his services to football
                </p>
              </div>

                  <!-- photo select  -->
                  <div class=""></div>
                   <!-- photo select  -->
    
    </div>
                 <!-- trophy  -->
                    
          </div>
     <!-- start  -->
  </div>
  
</template>

<script>
export default {
  name: 'App',
  data:() => ({
    complete : false
  }),

  methods: {
    navTab() {
      this.complete = this.complete?false:true;
    }
  }
}
</script>

<style >

</style>

<template>
  <header class="container mx-auto bg-test">
    <nav class="grid grid-flow-col mt-[89px] mb-[55px]">
      <img src="@/assets/images/logo.svg" />
      <menu class="ml-auto text-gun-metal flex grid-flow-col place-self-center gap-10" >
        <a>Home</a>
        <a>New</a>
        <a>Popular</a>
        <a>Trending</a>
        <a>Categories</a>
      </menu>
    </nav>
  </header>

  <main class="container mx-auto grid grid-cols-3 gap-7 mb-[129px]">
    <div class="col-span-2">
      <picture>
        <source
          media="(min-width: 640px)"
          srcset="@/assets/images/image-web-3-desktop.jpg"
        />
        <img
          class="h-[300px] object-cover w-full"
          src="@/assets/images/image-web-3-mobile.jpg"
        />
      </picture>
    </div>
    <div class="row-span-2 bg-dark-space-blue px-6 py-8">
      <h2 class="text-yellow text-bold text-[40px] mb-[34px]">News</h2>
      <div>
        <h3 class="text-xl font-extrabold text-off-white">
          Hydrogen VS Electric Cars
        </h3>
        <p class="text-silver">
          Will hydroge-fueled cars ever catch up to EVs?
        </p>
        <hr class="mt-[29px] mb-[31px]" />
      </div>
      <div>
        <h3 class="text-xl font-extrabold text-off-white">
          The Downsides of AI Artistry
        </h3>
        <p class="text-silver">
          What are the possible adverse effects of on-demand AI image generation
        </p>
        <hr class="mt-[29px] mb-[31px]" />
      </div>
      <div>
        <h3 class="text-xl font-extrabold text-off-white">
          Is VC Funding Drying Up?
        </h3>
        <p class="text-silver">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
    <div class="col-span-1">
      <h1 class="text-[56px] leading-none font-extrabold text-dark-space-blue">
        The Bright Future of Web 3.0?
      </h1>
    </div>
    <div class="col-span-1">
      <p class="leading-[26px] text-gun-metal mb-[29px]">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button class="text-white bg-light-vermillion py-3 px-8">
        Read More
      </button>
    </div>

    <div class="grid grid-flow-col gap-6 mt-11">
      <img class="max-h-min" src="@/assets/images/image-retro-pcs.jpg" alt="" />
      <div>
        <h3 class="text-silver text-[32px] leading-none font-bold mb-3">01</h3>
        <h2
          class="text-dark-space-blue text-lg leading-6 font-extrabold mb-[9px]"
        >
          Reviving Retro PCs
        </h2>
        <p class="leading-[26px]">
          What happens when old PCs are given modern upgrades?
        </p>
      </div>
    </div>
    <div class="grid grid-flow-col gap-6 mt-11">
      <img
        class="h-[126px]"
        src="@/assets/images/image-top-laptops.jpg"
        alt=""
      />
      <div>
        <h3 class="text-silver text-[32px] leading-none font-bold mb-3">02</h3>
        <h2
          class="text-dark-space-blue text-lg leading-6 font-extrabold mb-[9px]"
        >
          Top 10 laptops of 2022
        </h2>
        <p class="leading-[26px]">
          Our best picks for various needs and budgets
        </p>
      </div>
    </div>
    <div class="grid grid-flow-col gap-6 mt-11">
      <img
        class="h-[126px]"
        src="@/assets/images/image-gaming-growth.jpg"
        alt=""
      />
      <div>
        <h3 class="text-silver text-[32px] leading-none font-bold mb-3">03</h3>
        <h2
          class="text-dark-space-blue text-lg leading-6 font-extrabold mb-[9px]"
        >
          The Growth of Gaming
        </h2>
        <p class="leading-[26px]">
          How the pandemic has sparked fresh oppurtunities.
        </p>
      </div>
    </div>
  </main>
</template>

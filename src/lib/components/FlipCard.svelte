<!-- src/lib/components/FlipCard.svelte -->
<script>
  export let width = '100%';
  export let height = '300px'; // Set a default fixed height
</script>

<div
  class="flip-container perspective group cursor-pointer"
  style="width: {width}; height: {height};"
>
  <div class="flipper transition-transform duration-600 preserve-3d group-hover:rotate-y-180 focus:rotate-y-180 will-change-transform">
    <div class="front bg-card-gradient rounded-lg p-6 flex flex-col justify-center items-center text-center shadow-custom-card backface-hidden">
      <slot name="front"></slot>
    </div>
    <div class="back bg-card-gradient rounded-lg p-6 flex flex-col justify-center items-center text-center shadow-custom-card rotate-y-180 backface-hidden">
      <slot name="back"></slot>
    </div>
  </div>
</div>

<style>
  .perspective {
    perspective: 1000px;
  }

  .flipper {
    transform-style: preserve-3d;
    transition: transform 0.6s;
    width: 100%;
    height: 100%;
    position: relative;
    will-change: transform;
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .back {
    transform: rotateY(180deg);
  }
</style>

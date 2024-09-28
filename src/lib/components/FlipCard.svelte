<!-- src/lib/components/FlipCard.svelte -->
<script>
    export let width = '100%';
    export let height = '100%';
  </script>
  
  <div
    class="flip-container perspective"
    style="width: {width}; height: {height};"
  >
    <div class="flipper transition-transform duration-600 preserve-3d">
      <div class="front">
        <slot name="front"></slot>
      </div>
      <div class="back rotate-180">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
  
  <style>
    .perspective {
      perspective: 1000px;
    }
  
    .flip-container:hover .flipper {
      transform: rotateY(180deg);
    }
  
    .flipper {
      transform-style: preserve-3d;
      transition: transform 0.6s;
      width: 100%;
      height: 100%;
      position: relative;
    }
  
    .front,
    .back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border: 1px solid #4CE5D8; /* Optional: Ensures border is applied if needed */
      border-radius: 0.5rem; /* Optional: Rounds the corners */
    }
  
    .front {
      z-index: 2;
      transform: rotateY(0deg);
      background-color: #0D1F26;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  
    .back {
      transform: rotateY(180deg);
      background-color: #0D1F26;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  </style>
  
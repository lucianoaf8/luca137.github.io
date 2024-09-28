<!-- src/routes/success/+page.svelte -->
<script>
    // You can add any additional scripts if needed
  </script>
  
  <section class="py-20 bg-[#0D1F26] text-[#4CE5D8] flex items-center justify-center min-h-screen">
    <div class="max-w-md mx-auto border-2 border-custom-text rounded-lg shadow-2xl p-12 bg-black bg-opacity-40 text-center">
      <h2 class="text-3xl font-extrabold font-exo mb-6">Thank You!</h2>
      <p class="text-lg mb-6">Your message has been successfully sent. I'll get back to you soon!</p>
      <a href="#home" class="inline-block bg-[#7CEFFF] text-[#0A171E] py-2 px-4 rounded-lg hover:bg-[#4CE5D8] transition-transform transform hover:scale-105 shadow-lg">
        Back to Home
      </a>
    </div>
  </section>
  
  <style>
    /* Custom Font for Titles */
    .font-exo {
      font-family: 'Exo 2', sans-serif;
    }
  
    /* Custom Border Color */
    .border-custom-text {
      border-color: #4CE5D8;
    }
  
    /* Button Hover Effects */
    a:hover {
      cursor: pointer;
    }
  </style>
  
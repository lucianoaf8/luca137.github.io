<!-- src/lib/components/Contact.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  import { goto } from '$app/navigation'; // Import goto for navigation

  const dispatch = createEventDispatcher();

  let name = '';
  let email = '';
  let message = '';
  let isSubmitting = false;
  let showSuccess = false; // State to manage success message

  async function handleSubmit() {
    isSubmitting = true;

    try {
      const response = await fetch('https://formsubmit.co/ajax/1dd60f00f301a798f7dd825602c12596', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: 'New Contact Message Received',
          _template: 'table',
          _captcha: 'false'
          // Removed _next as we're handling success within the component
        })
      });

      const result = await response.json();

      if (response.ok) {
        // Show success message within the Contact section
        showSuccess = true;
        // Optionally, reset form fields
        name = '';
        email = '';
        message = '';
      } else {
        // Handle server errors
        alert(result.message || 'There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      // Handle network errors
      alert('There was an error submitting the form. Please check your connection and try again.');
    } finally {
      isSubmitting = false;
    }
  }
</script>

<section id="contact" class="py-20 bg-hero-gradient text-custom-text relative overflow-hidden">
  <!-- Rotating Radial Gradient Overlay -->
  <div class="absolute inset-0 top-[-50%] left-[-50%] w-[200%] h-[200%] bg-radial-gradient"></div>

  <div class="container mx-auto relative z-10">
    <h2 class="text-5xl font-orbitron text-center mb-16 bg-gradient-to-r from-custom-accent to-custom-accent-dark bg-clip-text text-transparent letter-spacing-extra-wide">
      Contact Me
    </h2>
    <div class="max-w-lg mx-auto border-2 border-custom-accent-dark rounded-lg shadow-custom-card p-12 bg-card-gradient bg-opacity-90">
      {#if !showSuccess}
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <!-- Hidden Fields for Formsubmit.co -->
          <input type="hidden" name="_subject" value="New Contact Message Received" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label class="block text-custom-accent-dark mb-2" for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              bind:value={name}
              placeholder="Your Name"
              class="w-full px-4 py-3 bg-custom-gray-2F border border-custom-accent-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-accent transition-colors duration-300 placeholder-custom-gray-3F"
              required
            />
          </div>
          <div>
            <label class="block text-custom-accent-dark mb-2" for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              bind:value={email}
              placeholder="your.email@example.com"
              class="w-full px-4 py-3 bg-custom-gray-2F border border-custom-accent-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-accent transition-colors duration-300 placeholder-custom-gray-3F"
              required
            />
          </div>
          <div>
            <label class="block text-custom-accent-dark mb-2" for="message">Message</label>
            <textarea
              id="message"
              name="message"
              bind:value={message}
              placeholder="Your Message"
              rows="5"
              class="w-full px-4 py-3 bg-custom-gray-2F border border-custom-accent-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-accent transition-colors duration-300 placeholder-custom-gray-3F"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            class={`w-full py-3 rounded-lg shadow-custom-button-hover transition-transform transform ${
              isSubmitting
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                : 'bg-button-gradient text-custom-bg font-semibold hover:bg-button-gradient-dark hover:scale-105 cursor-pointer'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Send Message'}
          </button>
        </form>
      {:else}
        <div class="text-center">
          <h3 class="text-3xl font-orbitron mb-4 bg-gradient-to-r from-custom-accent to-custom-accent-dark bg-clip-text text-transparent letter-spacing-extra-wide">
            Thank You!
          </h3>
          <p class="text-lg mb-6">Your message has been successfully sent. I'll get back to you soon!</p>
          <button
            on:click={() => (showSuccess = false)}
            class="inline-block bg-button-gradient text-custom-bg py-2 px-6 rounded-lg shadow-custom-button-hover transition-transform transform hover:scale-105 hover:bg-button-gradient-dark"
          >
            Back to Contact
          </button>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  /* Contact Component Specific Styles */

  /* Ensure perspective for potential future 3D effects */
  #contact {
    perspective: 1000px;
  }

  /* Custom Gradient for Button Hover */
  .bg-button-gradient-dark {
    background: linear-gradient(145deg, #00CC66, #00FF80);
  }

  /* Transition for Button Gradient */
  .transition-transform {
    transition-property: transform, background-color;
  }

  /* Additional Button Styles if needed */
</style>

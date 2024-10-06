<!-- src/lib/components/Contact.svelte -->
<script>
  import { createEventDispatcher } from 'svelte';
  import { goto } from '$app/navigation'; // Import goto for navigation
  import { t } from 'svelte-i18n'; // Import the `t` function from svelte-i18n
  import '../../i18n.js'; // Initialize i18n

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
        alert($t('contactSection.errorSubmit'));
      }
    } catch (error) {
      // Handle network errors
      alert($t('contactSection.errorNetwork'));
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
      { $t('contactSection.title') }
    </h2>
    <div class="max-w-lg mx-auto border-2 border-custom-accent-dark rounded-lg shadow-custom-card p-12 bg-card-gradient bg-opacity-90">
      {#if !showSuccess}
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <!-- Hidden Fields for Formsubmit.co -->
          <input type="hidden" name="_subject" value="New Contact Message Received" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label class="block text-custom-accent-dark mb-2" for="name">{ $t('contactSection.nameLabel') }</label>
            <input
              type="text"
              id="name"
              name="name"
              bind:value={name}
              placeholder={ $t('contactSection.yourName') }
              class="w-full px-4 py-3 bg-custom-gray-2F border border-custom-accent-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-accent transition-colors duration-300 placeholder-custom-gray-3F"
              required
            />
          </div>
          <div>
            <label class="block text-custom-accent-dark mb-2" for="email">{ $t('contactSection.emailLabel') }</label>
            <input
              type="email"
              id="email"
              name="email"
              bind:value={email}
              placeholder={ $t('contactSection.yourEmail') }
              class="w-full px-4 py-3 bg-custom-gray-2F border border-custom-accent-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-accent transition-colors duration-300 placeholder-custom-gray-3F"
              required
            />
          </div>
          <div>
            <label class="block text-custom-accent-dark mb-2" for="message">{ $t('contactSection.messageLabel') }</label>
            <textarea
              id="message"
              name="message"
              bind:value={message}
              placeholder={ $t('contactSection.yourMessage') }
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
            {isSubmitting ? $t('contactSection.submitting') : $t('contactSection.sendMessage')}
          </button>
        </form>
      {:else}
        <div class="text-center">
          <h3 class="text-3xl font-orbitron mb-4 bg-gradient-to-r from-custom-accent to-custom-accent-dark bg-clip-text text-transparent letter-spacing-extra-wide">
            { $t('contactSection.thankYou') }
          </h3>
          <p class="text-lg mb-6">{ $t('contactSection.successMessage') }</p>
          <button
            on:click={() => (showSuccess = false)}
            class="inline-block bg-button-gradient text-custom-bg py-2 px-6 rounded-lg shadow-custom-button-hover transition-transform transform hover:scale-105 hover:bg-button-gradient-dark"
          >
            { $t('contactSection.backToContact') }
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

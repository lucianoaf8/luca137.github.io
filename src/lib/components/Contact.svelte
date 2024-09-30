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

<section id="contact" class="py-20 bg-[#0D1F26] text-[#4CE5D8]">
  <div class="container mx-auto">
    <h2 class="text-3xl font-extrabold font-exo text-center mb-12">Contact Me</h2>
    <div class="max-w-lg mx-auto border-2 border-custom-text rounded-lg shadow-2xl p-12 bg-black bg-opacity-40">
      {#if !showSuccess}
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <!-- Hidden Fields for Formsubmit.co -->
          <input type="hidden" name="_subject" value="New Contact Message Received" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />

          <div>
            <label class="block text-[#4CE5D8] mb-2" for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              bind:value={name}
              placeholder="Your Name"
              class="w-full px-4 py-3 bg-gray-900 bg-[#00443d] border border-[#4CE5D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CEFFF] transition-colors duration-300"
              required
            />
          </div>
          <div>
            <label class="block text-[#4CE5D8] mb-2" for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              bind:value={email}
              placeholder="your.email@example.com"
              class="w-full px-4 py-3 bg-gray-900 bg-[#00443d] border border-[#4CE5D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CEFFF] transition-colors duration-300"
              required
            />
          </div>
          <div>
            <label class="block text-[#4CE5D8] mb-2" for="message">Message</label>
            <textarea
              id="message"
              name="message"
              bind:value={message}
              placeholder="Your Message"
              rows="5"
              class="w-full px-4 py-3 bg-gray-900 bg-[#00443d] border border-[#4CE5D8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7CEFFF] transition-colors duration-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            class={`w-full py-3 rounded-lg shadow-lg transition-transform transform ${
              isSubmitting
                ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                : 'bg-[#7CEFFF] text-[#0A171E] hover:bg-[#4CE5D8] hover:scale-105 cursor-pointer'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Send Message'}
          </button>
        </form>
      {:else}
        <div class="text-center">
          <h3 class="text-2xl font-extrabold font-exo mb-4">Thank You!</h3>
          <p class="text-lg mb-6">Your message has been successfully sent. I'll get back to you soon!</p>
          <button
            on:click={() => (showSuccess = false)}
            class="inline-block bg-[#7CEFFF] text-[#0A171E] py-2 px-4 rounded-lg hover:bg-[#4CE5D8] transition-transform transform hover:scale-105 shadow-lg"
          >
            Back to Contact
          </button>
        </div>
      {/if}
    </div>
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

  /* Transition Enhancements */
  input::placeholder,
  textarea::placeholder {
    color: #a0aec0; /* Light gray for placeholder text */
  }

  /* Button Hover Effects */
  button:hover {
    cursor: pointer;
  }
</style>

<script>
    let submitting = false;
    let messageSent = false;
  
    async function handleSubmit(event) {
      event.preventDefault();
      
      if (submitting) return; // Prevent double submission
  
      const formData = new FormData(event.target);
      const body = Object.fromEntries(formData.entries());
  
      submitting = true;
  
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
  
        if (response.ok) {
          messageSent = true;
        } else {
          console.error('Failed to send email');
        }
      } catch (error) {
        console.error('Failed to send email:', error);
      } finally {
        submitting = false;
      }
    }
  </script>
  
  {#if messageSent}
    <p>Message sent successfully!</p>
  {/if}
  
  <form class="flex flex-col gap-4 rounded-md mt-3" on:submit={handleSubmit}>
    <div>
      <label for="name" class="text-white">Name:</label>
      <input type="text" name="name" id="name" class="rounded-md" required />
    </div>
    <div>
      <label for="email" class="text-white">Email:</label>
      <input type="email" name="email" id="email" class="rounded-md" required />
    </div>
    <div class="flex flex-col">
      <label for="message" class="text-white">Message:</label>
      <textarea name="message" id="message" class="w-[32ch]" rows="5" minlength="100"></textarea>
    </div>
    <div class="bg-eerie-100 w-fit px-2 py-1 rounded-md text-eerie-800 shadow-md">
      <button type="submit" disabled={submitting}>{submitting ? 'Sending...' : 'Send Message'}</button>
    </div>
  </form>
  
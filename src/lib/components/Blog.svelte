<!-- src/components/Blog.svelte -->
<script>
    // Placeholder for blog posts
    const blogPosts = [
      {
        title: 'Understanding SvelteKit',
        excerpt: 'An introduction to building applications with SvelteKit.',
        link: '#',
      },
      {
        title: 'Tailwind CSS Tips',
        excerpt: 'Improve your workflow with these Tailwind CSS tips.',
        link: '#',
      },
      // Add more blog posts as needed
    ];
  </script>
  
  <section id="blog" class="py-20 bg-gray-100">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Blog</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        {#each blogPosts as post}
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-2xl font-semibold mb-2">{post.title}</h3>
            <p class="text-gray-700 mb-4">{post.excerpt}</p>
            <a href={post.link} class="text-blue-500 hover:underline">Read More</a>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
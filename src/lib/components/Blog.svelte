<!-- src/components/Blog.svelte -->
<script>
  // Updated blog posts with images and dates
  const blogPosts = [
    {
      title: 'Understanding SvelteKit',
      excerpt: 'An introduction to building applications with SvelteKit.',
      link: '#',
      image: 'https://via.placeholder.com/400', // Placeholder image
      date: 'September 20, 2023',
    },
    {
      title: 'Tailwind CSS Tips',
      excerpt: 'Improve your workflow with these Tailwind CSS tips.',
      link: '#',
      image: 'https://via.placeholder.com/400', // Placeholder image
      date: 'August 15, 2023',
    },
    {
      title: 'Mastering Svelte Transitions',
      excerpt: 'Enhance your Svelte apps with smooth transitions.',
      link: '#',
      image: 'https://via.placeholder.com/400', // Placeholder image
      date: 'July 10, 2023',
    },
    {
      title: 'Deploying Svelte Apps',
      excerpt: 'A guide to deploying your Svelte applications seamlessly.',
      link: '#',
      image: 'https://via.placeholder.com/400', // Placeholder image
      date: 'June 5, 2023',
    },
  ];
</script>

<section id="blog" class="py-20 bg-gray-100">
<div class="container mx-auto px-4">
  <h2 class="text-3xl font-bold text-center mb-12">Blog</h2>
  <!-- Centralized Flex Container with Enhanced Styles -->
  <div class="flex justify-center">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each blogPosts as post}
      <div class="bg-white rounded-lg shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col">
        <img src={post.image} alt="{post.title}" class="w-full h-40 object-cover rounded-t-lg" />
        <div class="p-6 flex flex-col flex-grow">
            <h3 class="text-xl font-semibold mb-2">{post.title}</h3>
            <p class="text-gray-500 text-sm mb-4">{post.date}</p>
            <p class="text-gray-700 mb-4">{post.excerpt}</p>
            <a href={post.link} class="text-blue-500 hover:underline font-semibold">Read More</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
</section>

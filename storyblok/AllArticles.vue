<template>
  <div class="py-24">
    <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{{ blok.headline }}</h2>
    <div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
      <ArticleCard v-for="article in articles" :key="article.uuid" :article="article.content"
        :slug="article.full_slug" />
    </div>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })

const articles = ref(null)
const storyblokApi = useStoryblokApi()

const locale = useState('locale')

// Requesting multiple stories (List of Articles)
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  language: locale.value,
  starts_with: 'blog', // Getting the blog folder stories
})

// Filter the overview (Blog Home) page
articles.value = data.stories.filter((story) => story.is_startpage !== true)
</script>
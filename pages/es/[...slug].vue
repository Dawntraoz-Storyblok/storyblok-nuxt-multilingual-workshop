<script setup>
let { slug } = useRoute().params
onBeforeMount(() => {
  useState('locale').value = 'es'
})

const resolveRelations = ['popular-articles.articles']
const story = await useStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    version: 'draft',
    language: 'es',
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  }
)
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
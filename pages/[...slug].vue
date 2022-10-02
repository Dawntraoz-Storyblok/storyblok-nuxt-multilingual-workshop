<script setup>
const { slug } = useRoute().params;

const story = await useAsyncStoryblok(slug ? slug.join('/') : 'home', {
  version: 'draft',
});
</script>
 
<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
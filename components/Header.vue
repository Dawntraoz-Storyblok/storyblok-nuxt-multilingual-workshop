<template>
  <header class="w-full h-24 bg-[#f7f6fd]">
    <div class="container h-full mx-auto flex items-center justify-between">
      <NuxtLink :to="localeUrl() || '/'">
        <h1 class="text-[#50b0ae] text-3xl font-bold">Storyblok Nuxt</h1>
      </NuxtLink>
      <nav v-if="headerMenu">
        <ul class="flex items-center space-x-8 text-lg font-bold">
          <li v-for="blok in headerMenu" :key="blok._uid">
            <NuxtLink :to="`${localeUrl()}/${blok.link.cached_url}`" class="hover:text-[#50b0ae]">
              {{ blok.link.story.name }}
            </NuxtLink>
          </li>
          <li class="flex">
            <span
              v-for="loc in locales"
              :class="{ 'bg-black text-white': (loc === locale) }"
              class="block uppercase px-4 py-1 md:p-2 rounded-lg lg:px-4 cursor-pointer"
              @click="changeLocale(loc)"
            >
              {{ loc }}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>


<script setup>
const router = useRouter()
const locales = ['en', 'es']
const locale = useState('locale')
const localeUrl = () => locale.value !== 'en' ? `/${locale.value}` : ''
const changeLocale = (loc) => {
  locale.value = loc
  router.push({path: localeUrl() || '/' })
}

const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

const headerMenu = ref(data.story.content.header_menu)
</script>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
}
</style>

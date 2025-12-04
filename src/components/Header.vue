<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Header",
  setup() {
    const { t, locale } = useI18n();

    const switchLanguage = (lang: string) => {
      locale.value = lang;
      localStorage.setItem('language', lang);
    };

    return { switchLanguage, t, locale };
  },
});
</script>

<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/star.svg" alt="App Logo" />
      <h2>{{ t('headerTitle') }}</h2>
    </div>
    <div>
      <button
        class="btn-language"
        :class="{ active: locale === 'uk' }" 
        @click="switchLanguage('uk')"
      >
        Ua
      </button>
      <button
        class="btn-language"
        :class="{ active: locale === 'en' }" 
        @click="switchLanguage('en')"
      >
        En
      </button>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from 'vue-i18n';
import type { Review } from "../api";
import RatingStars from "./RatingStars.vue";

export default defineComponent({
  name: "ReviewRating",
  components: {
    RatingStars,
  },
  props: {
    review: {
      type: Object as () => Review,
      required: true,
    },
    title: {
      type: String,
      default: 'Відгуки наших клієнтів у Google',
    },
  },
  setup() {
    const { t } = useI18n();
    return { t };
  },
});
</script>

<template>
  <div class="review row g-3">
    <div class="d-flex align-items-center justify-content-between gap-4 col-12 col-md-8 col-lg-8">
      <div class="row w-100">
        <div class="d-flex align-items-center  gap-3 col-12 col-md-6 col-lg-6">
          <img :src="review?.avatar" alt="Google Logo" class="avatar" />
          <h3 class="review-title" style="flex-grow: 1;">{{ t('reviewTitle') }}</h3>
        </div>
        <div class="rating gap-3 d-flex align-items-center col-12 col-md-6 col-lg-6">
          <div class="d-flex flex-wrap align-items-center gap-4">
            <RatingStars :rating="review?.rating" :maxRating="5" :showRating="true" />
            <p class="rating-counts ">{{ review?.reviewsCount}}  {{ t('reviewsNumber') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-end gap-3 col-12 col-md-4 col-lg-4 flex-column flex-md-row justify-content-md-end ">
      <router-link class="review-btn" :to="`/review/${review?.id}`">
        {{ t('btnLook') }}
      </router-link>
      <a class="review-btn review-btn-gradient" href="https://www.google.com" target="_blank" rel="noopener noreferrer">
        {{ t('btnWrite') }}
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "RatingStars",
  props: {
    rating: {
      type: Number,
      required: true,
    },
    maxRating: {
      type: Number,
      default: 5,
    },
    showRating: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const fullStars = computed(() => {
      const rating = props.rating ?? 0;

      return Math.max(0, Math.floor(Math.max(0, rating)));
    });

    const hasHalfStar = computed(() => {
      const rating = props.rating ?? 0;
      return rating % 1 >= 0.5;
    });

    const emptyStars = computed(() => {
      const maxRating = props.maxRating ?? 5;
      const empty = maxRating - fullStars.value - (hasHalfStar.value ? 1 : 0);
      return Math.max(0, empty);
    });

    return { fullStars, hasHalfStar, emptyStars };
  },
});
</script>

<template>
  <div class="d-flex align-items-center">
    <p v-if="showRating" class="rating-text">{{ rating }}</p>
    <div class="rating-stars d-flex align-items-center">
      <i
        v-for="index in fullStars"
        :key="'full-' + index"
        class="fa-solid fa-star rating-star rating-star-full"
        aria-label="Full star"
      ></i>
      <i
        v-if="hasHalfStar"
        class="fa-solid fa-star-half-stroke rating-star rating-star-half"
        aria-label="Half star"
      ></i>
      <i
        v-for="i in emptyStars"
        :key="'empty-' + i"
        class="fa-regular fa-star rating-star rating-star-empty"
        aria-label="Empty star"
      ></i>
    </div>
  </div>
</template>



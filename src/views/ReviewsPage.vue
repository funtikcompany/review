<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getReviews } from "../api";  // Виправлений шлях
import ReviewComponent from "../components/ReviewComponent.vue";
import LoaderComponent from "../components/LoaderComponent.vue";
import type { Review } from "../api";

export default defineComponent({
  name: "ReviewsPage",
  components: { ReviewComponent,LoaderComponent },
  setup() {
    const reviews = ref<Review[]>([]);
    const loading = ref(true);

    const fetchReviews = async () => {
      try {
        const response = await getReviews();
        reviews.value = response;
        loading.value = false;
      } catch (error) {
        alert("Error fetching reviews: " + error);
      }
    };

    onMounted(() => {
      fetchReviews();
    });

    return {
      reviews,
      loading,
    };
  },
});
</script>

<template>
  <div>
      <div class="container">
         <LoaderComponent v-if="loading"/>
         <div v-else>
           <ReviewComponent
             v-for="review in reviews"
             :key="review.id"
             :review="review"
           />
         </div>
      </div>
  </div>
</template>

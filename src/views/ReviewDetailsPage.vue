
  <script lang="ts">
  import { ref, onMounted, defineComponent } from 'vue';
  import { useRoute } from 'vue-router';
  import { getReviewDetail } from '../api';
  import ReviewDetailsComponent from '../components/ReviewDetailsComponent.vue';
  import LoaderComponent from '../components/LoaderComponent.vue';
  import { useI18n } from 'vue-i18n';
  import type { Review } from '../api';
  export default defineComponent({
    components: { ReviewDetailsComponent, LoaderComponent },
    setup() {
        const { t } = useI18n();
      const review = ref<Review | null>(null);
      const loading = ref<boolean>(true);
      const route = useRoute(); 
  
      const fetchReviewDetails = async (id: string | number) => {
        try {
          const response = await getReviewDetail(id);
          review.value = response;
        } catch (error) {
          console.error('Error fetching review details:', error);
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(() => {
        const id = route.params.id as string;
        fetchReviewDetails(id);
      });
  
      return { review, loading ,t};
    },
  });
  </script>
  
  <template>
    <div class="container">
        <router-link class="btn-back" to="/">
          {{t('btnBack')}}
        </router-link>
        <div class="d-flex align-items-center justify-content-center">
            <ReviewDetailsComponent :review="review!" v-if="!loading && review"/>
            <LoaderComponent v-else/>
        </div>
    </div>
  </template>
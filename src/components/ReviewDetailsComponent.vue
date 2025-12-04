<script lang="ts">
    import { defineComponent, computed } from 'vue';
    import { useI18n } from 'vue-i18n';
    import type { Review } from '../api';
    export default defineComponent({
    props: {
        review: {
            type: Object as () => Review,
            required: true,
        },
    },
    setup() {
        const { t } = useI18n();
        const formatDate = (date: string | number) => {
            console.log(date);
            if (!date) return '-';
            
            const timestamp = typeof date === 'number' ? date * 1000 : new Date(date).getTime();
            
            const d = new Date(timestamp);
            
            if (isNaN(d.getTime())) return '-';
            
            const year = d.getFullYear();
            const month = String(d.getMonth() + 1).padStart(2, '0'); 
            const day = String(d.getDate()).padStart(2, '0');
            const hours = String(d.getHours()).padStart(2, '0');
            const minutes = String(d.getMinutes()).padStart(2, '0');
            
            return `${year}-${month}-${day} ${hours}:${minutes}`;
        };



        return { formatDate,t };
    },
    });
</script>

   <template>
        <div class="card p-3">
            <div class="d-flex align-items-center justify-content-center">    
                <img :src="review?.avatar" class="avatar" alt="...">
            </div>

            <div class="card-body">
                <h3 class="card-text">{{review.id}}</h3>
                <p class="card-text">{{t('dateCreated')}} {{ formatDate(review.dateCreated)  }}</p>
                <p class="card-text">{{t('overallRating')}} {{ review.rating  }}</p>
                <p class="rating-counts">{{t('numberOfComments')}} {{ review.reviewsCount  }}</p>
            </div>
        </div>
    </template>
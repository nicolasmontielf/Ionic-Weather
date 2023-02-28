<template>
    <IonCard class="ion-no-padding ion-no-margin">
        <IonCardContent class="ion-padding-vertical">
            <div>
                <p><strong>Amanecer: </strong></p>
                <p>{{ getHourFromDate(sunrise) }}</p>
            </div>

            <div>
                <p><strong>Anochecer: </strong></p>
                <p>{{ getHourFromDate(sunset) }}</p>
            </div>
        </IonCardContent>
    </IonCard>
</template>

<script setup lang="ts">
    import { IonCard, IonCardContent } from '@ionic/vue'
    import { getHourFromDate } from '@/helpers'

    defineProps<{
        sunrise: string
        sunset: string
    }>()
</script>
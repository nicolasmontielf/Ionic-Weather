<template>
    <IonCard class="ion-no-padding ion-no-margin">
        <IonCardContent class="ion-padding-vertical">
            <div>
                <p>{{ sunrise }} <small>Amanecer</small></p>
            </div>

            <div>
                <p>{{ sunset }} <small>Anochecer</small></p>
            </div>
        </IonCardContent>
    </IonCard>
</template>

<script setup lang="ts">
    import { IonCard, IonCardContent } from '@ionic/vue'

    defineProps<{
        sunrise: string
        sunset: string
    }>()
</script>
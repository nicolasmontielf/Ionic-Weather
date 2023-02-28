<template>
    <IonCard class="ion-no-padding ion-no-margin">
        <IonCardContent class="ion-padding-vertical">
            <div>
                <p><strong>Direction:</strong></p>
                <p>{{ direction }}°</p>
            </div>
            <div>
                <p><strong>Speed:</strong></p>
                <p>{{ speed }} km/h</p>
            </div>
        </IonCardContent>
    </IonCard>
</template>

<script setup lang="ts">
    import { IonCard, IonCardContent } from '@ionic/vue'

    defineProps<{
        speed: number
        direction: number
    }>()

</script>
<template>
    <IonCard class="ion-no-padding ion-no-margin">
        <IonCardContent class="ion-padding-vertical">
            <h3>Direccion: {{ direction }}</h3>
            <p>Speed: {{ speed }}</p>
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
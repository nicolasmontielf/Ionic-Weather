<template>
    <IonCard class="ion-no-padding ion-no-margin">
        <IonCardContent class="ion-padding-vertical">
            <div>
                <p><strong>Direccion:</strong></p>
                <p>{{ direction }}°</p>
            </div>
            <div>
                <p><strong>Velocidad:</strong></p>
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
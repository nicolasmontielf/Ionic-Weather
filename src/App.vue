<template>
    <ion-app>
        <ion-router-outlet />
    </ion-app>
</template>

<script setup lang="ts">
    import { IonApp, IonRouterOutlet } from '@ionic/vue';
    import { Geolocation } from '@capacitor/geolocation';
    import { onMounted } from 'vue'

    const printCurrentPosition = async () => {
        try {
            const coordinates = await Geolocation.getCurrentPosition();
            console.log('Current position:', coordinates);
        } catch (error) {
            alert("You should enable location permissions to use this app")
        }
    };
    
    onMounted(() => {
        printCurrentPosition();
    })
</script>

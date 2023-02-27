<template>
    <ion-app>
        <ion-router-outlet />
    </ion-app>
</template>

<script setup lang="ts">
    import { IonApp, IonRouterOutlet } from '@ionic/vue';
    import { Geolocation } from '@capacitor/geolocation';
    import { onMounted } from 'vue'
    import store from './services/Storage'

    const handleCurrentPosition = async () => {
        try {
            const geolocationIsSetted = await store.get('geolocation');
            if (geolocationIsSetted) return

            const { coords } = await Geolocation.getCurrentPosition();
            await store.set('geolocation', {
                latitude: coords.latitude,
                longitude: coords.longitude
            })
        } catch (error) {
            alert("You should enable location permissions to use this app")
        }
    };
    
    onMounted(() => {
        handleCurrentPosition();
    })
</script>

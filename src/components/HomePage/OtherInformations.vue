<template>
    <IonCard>
        <IonCardContent class="ion-no-padding">
            <IonList>
                <IonItem v-for="(info, key) in information" :key="key">
                    <IonRow style="width: 100%">
                        <IonCol size="9" class="ion-align-self-center">
                            <p>{{ info.label }}</p>
                        </IonCol>
                        <IonCol size="3" class="ion-align-self-center">
                            <p>
                                {{ info.value[timeIndex] }} {{ info.unit }}
                            </p>
                        </IonCol>
                    </IonRow>
                </IonItem>
            </IonList>
        </IonCardContent>
    </IonCard>
</template>

<script setup lang="ts">
    import { IonCard, IonCardContent, IonList, IonItem, IonRow, IonCol } from '@ionic/vue'
    import { HourlyInformation } from '@/types/weather';
    import { computed } from 'vue';
    import { getCurrentHourIndex } from '@/helpers';

    const props = defineProps<{
        data: HourlyInformation
    }>()

    const information = computed(() => {
        return {
            apparent_temperature: {
                label: 'Apparent Temperature',
                unit: '°C',
                value: props.data.apparent_temperature,
            },
            relativehumidity_2m: {
                label: 'Humidity',
                unit: '%',
                value: props.data.relativehumidity_2m,
            },
            cloudcover: {
                label: 'Cloud Cover',
                unit: '%',
                value: props.data.cloudcover,
            },
            visibility: {
                label: 'Visibility',
                unit: 'm',
                value: props.data.visibility,
            },
            shortwave_radiation: {
                label: 'Shortwave Radiation',
                unit: 'W/m²',
                value: props.data.shortwave_radiation,
            }
        }
    })

    const timeIndex = computed(() => getCurrentHourIndex())

</script>
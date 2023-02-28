<template>
    <IonCard>
        <IonCardContent class="ion-no-padding">
            <IonList>
                <IonItem v-for="(info, key) in information" :key="key">
                    <IonRow style="width: 100%">
                        <IonCol size="9">
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
                label: 'Sensacion Termica',
                unit: '°C',
                value: props.data.apparent_temperature,
            },
            relativehumidity_2m: {
                label: 'Humedad',
                unit: '%',
                value: props.data.relativehumidity_2m,
            },
            cloudcover: {
                label: 'Cobertura de Nubes',
                unit: '%',
                value: props.data.cloudcover,
            },
            visibility: {
                label: 'Visibilidad',
                unit: 'm',
                value: props.data.visibility,
            },
            shortwave_radiation: {
                label: 'Radiacion de Onda Corta',
                unit: 'W/m²',
                value: props.data.shortwave_radiation,
            }
        }
    })

    const timeIndex = computed(() => getCurrentHourIndex())

</script>
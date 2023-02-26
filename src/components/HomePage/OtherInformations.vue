<template>
    <IonCard>
        <IonCardContent class="ion-no-padding">
            <IonList>
                <IonItem v-for="(info, key) in information" :key="key">
                    <IonRow style="width: 100%">
                        <IonCol size="9">
                            <p>{{ getLabel(key) }}</p>
                        </IonCol>
                        <IonCol size="3">
                            <IonLabel>
                                {{ info[timeIndex] }}
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonItem>
            </IonList>
        </IonCardContent>
    </IonCard>
</template>

<script setup lang="ts">
    import { IonCard, IonCardContent, IonList, IonItem, IonLabel, IonRow, IonCol } from '@ionic/vue'
    import { HourlyInformation } from '@/types/weather';
    import { computed } from 'vue';
    import { getCurrentHourIndex } from '@/helpers';

    const props = defineProps<{
        data: HourlyInformation
    }>()

    const information = computed<Omit<HourlyInformation, 'time'>>(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { time, ...usefulData } = props.data

        return usefulData
    })

    const timeIndex = computed(() => getCurrentHourIndex())

    function getLabel(key: string) {
        switch (key) {
            case 'apparent_temperature':
                return 'Apparent Temperature'
            case 'relativehumidity_2m':
                return 'Humidity'
            case 'cloudcover':
                return 'Cloud Over'
            case 'windDirection':
                return 'Direction du vent'
            case 'visibility':
                return 'Visibility'
            case 'shortwave_radiation':
                return 'Shortwave Radiation'
            default:
                return key
        }
    }

</script>
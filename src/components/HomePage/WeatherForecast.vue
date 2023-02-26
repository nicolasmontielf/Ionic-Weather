<template>
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>Pronostico de 5 dias</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent class="ion-no-padding" v-if="daily?.time">
            <IonList>
                <IonItem v-for="i in 5" :key="i">
                    <IonRow style="width: 100%">
                        <IonCol size="8">
                            <IonLabel>
                                <h4>
                                    {{ getDayName(daily.time[i-1]) }}
                                </h4>
                            </IonLabel>
                        </IonCol>
                        <IonCol size="4">
                            <IonLabel>
                                <h4>
                                    {{ roundTemperature(daily.temperature_2m_max[i-1], true) }} / 
                                    {{ roundTemperature(daily.temperature_2m_min[i-1], true) }}
                                </h4>
                            </IonLabel>
                        </IonCol>
                    </IonRow>
                </IonItem>
            </IonList>
        </IonCardContent>
    </IonCard>
</template>

<script setup lang="ts">
    import { IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel, IonRow, IonCol } from '@ionic/vue'
    import { DailyInformation } from '@/types/weather';
    import { roundTemperature, getDayName } from '@/helpers';

    defineProps<{
        daily?: DailyInformation
    }>()
</script>
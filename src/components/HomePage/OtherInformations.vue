<template>
    <IonCard>
        <IonCardContent class="ion-no-padding">
            <IonList>
                <IonItem v-for="(info, key) in information" :key="key">
                    <IonRow style="width: 100%">
                        <IonCol size="9">
                            <p>{{ key }}</p>
                        </IonCol>
                        <IonCol size="3">
                            <IonLabel>
                                <small>{{ info[10] }}</small>
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

    const props = defineProps<{
        data: HourlyInformation
    }>()

    const information = computed<Omit<HourlyInformation, 'time'>>(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { time, ...usefulData } = props.data

        return usefulData
    })

</script>
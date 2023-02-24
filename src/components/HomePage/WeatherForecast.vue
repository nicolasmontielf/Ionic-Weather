<template>
    <IonCard>
        <IonCardHeader>
            <IonCardSubtitle>Pronostico de 5 dias</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent class="ion-no-padding">
            <IonList>
                <IonItem v-for="i in 5" :key="i">
                    <IonRow style="width: 100%">
                        <IonCol size="8">
                            <IonLabel>
                                <h4>Jueves - Lluvia</h4>
                            </IonLabel>
                        </IonCol>
                        <IonCol size="4">
                            <IonLabel>
                                <h4>Jueves - Lluvia</h4>
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
</script>
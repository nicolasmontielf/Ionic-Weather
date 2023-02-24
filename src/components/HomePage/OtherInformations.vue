<template>
    <IonCard>
        <IonCardContent class="ion-no-padding">
            <IonList>
                <IonItem v-for="i in 5" :key="i">
                    <IonRow style="width: 100%">
                        <IonCol size="8">
                            <p>Descripcion 1</p>
                        </IonCol>
                        <IonCol size="4">
                            <IonLabel>
                                <small>20@</small>
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
</script>
<script setup>
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import { ref } from 'vue';


const toDo = []
const toDoTitle = ref('')
const toDoDescription = ref('')
const value = ref('')

function setToDo() {
    var lenToDo = toDo.length
    console.log(toDo)
    if(lenToDo == undefined) {
        toDo.push({id: 0, title: toDoTitle.value, text: toDoDescription.value})
    }else{
        toDo.push({id: lenToDo++, title: toDoTitle.value, text: toDoDescription.value})
    }

}

</script>

<template>
    <div>
        <input class=" bg-transparent" type="text" v-model="value" placeholder="Meu Kanban" />
        <div class="grid grid-cols-3 gap-5">
            <div>
                <h1>A fazer</h1>
                <Card v-for="obj in toDo" :key="obj.id">
                    <template #title>
                        {{ obj.title }}
                    </template>
                    <template #content>
                        <p>
                            {{ obj.text }}
                        </p>
                    </template>
                </Card>
                <div class="new-card mt-5 bg-[#1e1e1e] p-3 rounded grid gap-2">
                    <InputText class=" w-full" type="text" v-model="toDoTitle" placeholder="Nome do cartão." />
                    <Textarea class=" w-full" v-model="toDoDescription" autoResize rows="5" cols="30" placeholder="Descrição." />
                    <span class="p-buttonset flex justify-end">
                        <Button icon="pi pi-check" @click="setToDo" />
                        <Button icon="pi pi-times" />
                    </span>
                </div>
            </div>
            <div>
                <h1>Fazendo</h1>
                <div class="new-card mt-5 bg-[#1e1e1e] p-3 rounded grid gap-2">
                    <InputText class=" w-full" type="text" v-model="value" placeholder="Nome do cartão." />
                    <Textarea class=" w-full" v-model="value" autoResize rows="5" cols="30" placeholder="Descrição." />
                    <span class="p-buttonset flex justify-end">
                        <Button icon="pi pi-check" />
                        <Button icon="pi pi-times" />
                    </span>
                </div>
            </div>
            <div>
                <h1>Feito</h1>
                <div class="new-card mt-5 bg-[#1e1e1e] p-3 rounded grid gap-2">
                    <InputText class=" w-full" type="text" v-model="value" placeholder="Nome do cartão." />
                    <Textarea class=" w-full" v-model="value" autoResize rows="5" cols="30" placeholder="Descrição." />
                    <span class="p-buttonset flex justify-end">
                        <Button icon="pi pi-check" />
                        <Button icon="pi pi-times" />
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.new-card {
    box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
}
</style>
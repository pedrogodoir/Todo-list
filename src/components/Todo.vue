<script setup>
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import { ref } from 'vue';

const newTask = ref('')
const tasks = ref([])

function addTask() {
    if(newTask.value == null || newTask.value == '') {
        return
    }
    tasks.value.push({
        content: newTask.value,
        done: false,
    })
    newTask.value = ''
    console.log(tasks)
}

function done() {
    tasks.value.done = !tasks.value.done
}

</script>

<template>
    <div class="grid grid-cols-1 gap-5 max-w-xl mt-5">
        <div class="p-inputgroup flex-1">
            <InputText placeholder="Adicionar tarefa." v-model="newTask"/>
            <Button icon="pi pi-check" severity="secondary" text @click="addTask" />
        </div>
        <div class="line bg-zinc-600 h-[2px] rounded"></div>
        <h1>Lista de Tarefas</h1>
        <div class="p-inputgroup flex-1" v-for="task in tasks">
            <Button v-styleclass="{ selector: '@next', toggleClass: 'p-disabled' }" @click="done" label="Feito" icon="pi pi-check" iconPos="right" severity="secondary" text />
            <InputText placeholder="Nome da tarefa." v-model="task.content"></InputText>
            <Button icon="pi pi-times" text severity="danger" />
        </div>
    </div>
</template>

<style scoped>
</style>
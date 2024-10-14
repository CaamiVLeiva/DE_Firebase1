<template>
    <div class="form-container">
        <form @submit.prevent="handleAddUser">
            <input v-model="nameUser" placeholder="Nombre" class="input-field" />
            <input v-model="emailUser" placeholder="Email" class="input-field" />
            <button type="submit" class="submit-button">Agregar Usuario</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUsersStore } from '@/stores/users'

const nameUser = ref('')
const emailUser = ref('')
const usersStore = useUsersStore()

function handleAddUser() {
    usersStore.addUser(nameUser.value, emailUser.value)
    nameUser.value = ''
    emailUser.value = ''
}
</script>

<style scoped>
.form-container {
    max-width: 400px;
    margin: 20px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.input-field {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

.submit-button {
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
}

.submit-button:hover {
    background-color: #45a049;
}
</style>
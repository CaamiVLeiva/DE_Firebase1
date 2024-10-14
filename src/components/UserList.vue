<template>
    <div class="list-container">
        <ul>
            <li v-for="user in usersStore.users" :key="user.id" class="user-item">
                <span class="user-info">{{ user.name }} - {{ user.email }}</span>
                <button @click="usersStore.deleteUser(user.id)" class="delete-button">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useUsersStore } from '@/stores/users'

const usersStore = useUsersStore()
usersStore.fetchUsers()
</script>

<style scoped>
.list-container {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.user-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
}

.user-info {
    font-size: 1rem;
}

.delete-button {
    background-color: #f44336;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 0.9rem;
}

.delete-button:hover {
    background-color: #d32f2f;
}
</style>
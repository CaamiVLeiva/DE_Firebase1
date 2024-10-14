<template>
  <div class="app-container">
    <h1>Administrar Usuarios</h1>
    <NewUser />
    <UserList />
  </div>
</template>

<script>
import NewUser from './components/NewUser.vue' 
import UserList from './components/UserList.vue'

export default {
  components: {
    NewUser,
    UserList
  }
}
</script>

<style scoped>
.app-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
}

h1 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}
</style>

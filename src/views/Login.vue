<template>
  <div class="login">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="handleLogin">
      <input v-model="username" type="text" placeholder="Usuario" />
      <input v-model="password" type="password" placeholder="Contraseña" />
      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthentification } from '../composables/useAuthentification';

const username = ref('');
const password = ref('');
const { login } = useAuthentification();

const handleLogin = () => {
  login({
    username: username.value,
    password: password.value
  });
};
</script>

<style scoped>
.login {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
}

input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

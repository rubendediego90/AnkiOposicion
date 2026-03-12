import { ref } from 'vue';

export function useAuthentification() {
  const isLoggedRef = ref(false);
  const tokenRef = ref(null);
  const userRef = ref(null);

  const login = (credentials) => {
    // Implementar lógica de login
    console.log('Login:', credentials);
    isLoggedRef.value = true;
  };

  const logout = () => {
    isLoggedRef.value = false;
    tokenRef.value = null;
    userRef.value = null;
  };

  const checkAuth = () => {
    // Verificar si el usuario está autenticado
    const token = localStorage.getItem('token');
    if (token) {
      tokenRef.value = token;
      isLoggedRef.value = true;
    }
  };

  return {
    isLoggedRef,
    tokenRef,
    userRef,
    login,
    logout,
    checkAuth
  };
}

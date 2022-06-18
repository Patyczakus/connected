<template>
    <form @submit.prevent="onLoginFormSubmit">
        <div>
            <label>
                Email:
                <input type="email" v-model="loginFormData.email">
            </label>
        </div>
        <div>
            <label>
                Password:
                <input type="password" v-model="loginFormData.password">
            </label>
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
</template>

<script>
import {ref} from 'vue';
import auth from "@/firebase/auth";

export default {
    name: "LoginPage",
    setup() {
        const loginFormData = ref({});

        const onLoginFormSubmit = () => {
            auth.signInWithEmailAndPassword(loginFormData.value)
                .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
        }

        return {
            loginFormData,
            onLoginFormSubmit
        }
    }
}
</script>

<style scoped>

</style>
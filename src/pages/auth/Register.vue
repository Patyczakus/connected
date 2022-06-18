<template>
    <form @submit.prevent="onRegisterFormSubmit">
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
            <label>
                Confirm password:
                <input type="password" v-model="loginFormData.passwordConfirm">
            </label>
        </div>
        <div>
            <button type="submit">Register</button>
        </div>
    </form>
</template>

<script>
import {ref} from 'vue';
import auth from "@/firebase/auth";
import {createUserWithEmailAndPassword} from 'firebase/auth'

export default {
    name: "RegisterPage",
    setup() {
        const loginFormData = ref({});

        const onRegisterFormSubmit = () => {
            createUserWithEmailAndPassword(auth, loginFormData.value.email,loginFormData.value.password).then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
        }

        return {
            loginFormData,
            onRegisterFormSubmit
        }
    }
}
</script>

<style scoped>

</style>
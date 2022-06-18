<template>
    <div>
        <h1>Menu</h1>
        <ul>
            <li v-if="isAuthenticated">
                <router-link :to="{name:'auth.login'}">Login</router-link>
            </li>
            <li v-if="isAuthenticated">
                <router-link :to="{name:'auth.register'}">Register</router-link>
            </li>
        </ul>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import {isAuthenticated} from "@/firebase/auth";

export default {
    name: 'App',
    components: {},
    setup() {
        return {
            isAuthenticated
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

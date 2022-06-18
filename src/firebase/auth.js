import app from "@/firebase/app";
import {getAuth} from "firebase/auth"
import {computed} from "vue";

export default getAuth(app);

export const isAuthenticated = computed(() => {
	return getAuth(app).currentUser;
})

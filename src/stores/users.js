import { db } from "@/firebaseConfig";
import { collection, onSnapshot, addDoc, deleteDoc, doc } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsersStore = defineStore('users', () => {
    const users = ref([])

    async function fetchUsers() {
        try{
            const usersRef = collection(db, 'users')

            onSnapshot(usersRef, (snapshot) => {
                users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            })
        } catch (error) {
            console.error(error)
        }
    }

    async function addUser(name, email) {
        try {
            const userRef = collection(db, 'users');
            await addDoc(userRef, { name, email }); // Pasa 'name' y 'email' correctamente
        } catch (error) {
            console.error(error);
        }
    }
    

    async function deleteUser(id) {
        try{
            const userRef = doc(db, 'users', id)
            await deleteDoc(userRef)
        } catch(error){
            console.error(error)
        }
        
    }

    return{
        users,
        fetchUsers,
        addUser,
        deleteUser
    }
})
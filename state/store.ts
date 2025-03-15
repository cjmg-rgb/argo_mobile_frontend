import AsyncStorage from "@react-native-async-storage/async-storage";
import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Department {
    id: string;
    name: string;
};

interface Departments {
    departments: Department[];
    count: number;
}

interface User {
    id: string;
    email: string;
    name: string;
    credits: number;
    department: Department;
    role: "admin" | "user";
};

interface Auth {
    auth: User | null;
    setCredentials: (credentials: User) => void;
    removeCredentials: () => void;
};

const authStoreCreator: StateCreator<Auth> = (set, get) => ({
    auth: null,
    setCredentials: (credentials) => set({ auth: credentials }),
    removeCredentials: () => set({ auth: null })
});

export const useAuth = create<Auth>()(persist(
    authStoreCreator, {
        name: "auth-storage",
        storage: createJSONStorage(() => AsyncStorage)
    }
));

import { Stack, useRouter } from "expo-router";

import "../global.css";
import { useAuth } from "state/store";
import { useEffect } from "react";

const _layout = () => {

  const router = useRouter();

  const { auth } = useAuth();

  useEffect(() => {
    if(auth === null) {
      router.replace("/login");
    }

  }, [auth])


  return <Stack screenOptions={{ headerShown: false }} />
}

export default _layout
import { useAuth } from "@/hooks/use-auth";
import { Redirect } from "expo-router";
import React from "react";

export default function HomeScreen() {
    const { user, login } = useAuth()
    // const [done, setDone] = React.useState(false)

    // TODO: remove in prod
    // useEffect(() => {
    //     login('mike@example.com', 'mike').then(() => setDone(true))
    // }, [])

    if (!user) {
        return <Redirect href="/(auth)/login" />;
    } else {
        return <Redirect href="/(tabs)" />;
    }
}
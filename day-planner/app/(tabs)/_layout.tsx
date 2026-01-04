import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{ title: "today" }}
            />
            <Tabs.Screen
                name="caledar"
                options={{ title: "caledar" }}
            />
            <Tabs.Screen
                name="settings"
                options={{ title: "settings" }}
            />
        </Tabs>
    )
}
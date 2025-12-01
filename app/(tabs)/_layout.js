import { AntDesign, Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {

    return (
        <Tabs>
            <Tabs.Screen name="feed" options={{ 
                title: "Feed",
                headerTitle: "Feed",
                tabBarIcon: ({ color, size }) => (
                    <Feather name="list" size={size} color={color} />
                ),
             }} />
            <Tabs.Screen name="profile" options={{
                 title: "Profile",
                 headerTitle: "Profile",
                 tabBarIcon: ({ color, size }) => (
                    <AntDesign name="user" size={size} color={color} />
                )
                }}/>
        </Tabs>
    );


}
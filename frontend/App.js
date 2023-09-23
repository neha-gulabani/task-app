import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Settings from './pages/Settings';
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from './pages/Dashboard'
import Addtask from './pages/Addtask';
import Rewards from './pages/Rewards';
import Reminder from './pages/Reminder';
import Calendar from './pages/Calendar';
import Pomodoro from './pages/Pomodoro';
import Activites from './pages/Activties';
import AddReminder from './pages/AddReminder';
import Events from './pages/Events';

const Stack = createStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerStyle: { backgroundColor: '#EECDEE' } }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",

          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: "Dashboard" }}
        />
        <Stack.Screen
          name="Addtask"
          component={Addtask}
          options={{ title: "Add Task" }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="Rewards"
          component={Rewards}
          options={{ title: "Rewards" }}
        />
        <Stack.Screen
          name="Reminder"
          component={Reminder}
          options={{ title: "Reminder" }}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{ title: "Calendar" }}
        />
        <Stack.Screen
          name="Pomodoro"
          component={Pomodoro}
          options={{ title: "Pomodoro" }}
        />
        <Stack.Screen
          name="Activites"
          component={Activites}
          options={{ title: "Activites" }}
        />
        <Stack.Screen
          name="Events"
          component={Events}
          options={{ title: "Events" }}
        />

        <Stack.Screen
          name="AddReminder"
          component={AddReminder}
          options={{ title: "Add Reminder" }}
        />
      </Stack.Navigator>





      <StatusBar style="auto" />

    </NavigationContainer >
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
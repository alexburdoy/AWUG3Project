import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import { ModelProvider } from "./model/GameModel";
import Library from "./screens/Library";
import GameList from "./screens/AllGames";
import TrendingList from "./screens/TrendingList";
import RecomendationsList from "./screens/RecomendationsList";
import GameDetailsPage from "./screens/GameDetailsPage";
import MainMenu from "./screens/MainMenu";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (

    <ModelProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="MainMenu" component={MainMenu} />
          <Stack.Screen name="GameList" component={GameList}/>
          <Stack.Screen name="Library" component={Library} />
          <Stack.Screen name="GameDetailsPage" component={GameDetailsPage} />
          <Stack.Screen name="TrendingList" component={TrendingList} />
          <Stack.Screen name="RecomendationsList" component={RecomendationsList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ModelProvider>
  );
}
/*
<Tab.Navigator>
          <Tab.Screen
            name="Game catalog"
            component={GameList}
            //options={{ tabBarIcon: GameList.Icon }}
          />
          <Tab.Screen
            name="Trending"
            component={TrendingList}
            //options={{ tabBarIcon: TrendingList.Icon }}
          />
          <Tab.Screen
            name="Library"
            component={Library}
            //options={{ tabBarIcon: Library.Icon }}
          />
          <Tab.Screen
            name="Recomendations"
            component={RecomendationsList}
            //options={{ tabBarIcon: RecomendationsList.Icon }}
          />
        </Tab.Navigator>

*/
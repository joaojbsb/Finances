import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import theme from '../global/styles/theme';

export function AppRoutes(){
    const thema = useTheme();

    return(
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: thema.colors.text,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
                height: 88,
                paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            }
        }}>
            <Screen 
                name= "Listagem"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color= {color}
                        />
                    )
                }}
            />

            <Screen 
                name= "Cadastrar"
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="attach-money"
                            size={size}
                            color= {color}
                        />
                    )
                }}                
            />

            <Screen 
                name= "Resumo"
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }) =>
                        <MaterialIcons
                            name="pie-chart"
                            size={size}
                            color= {color}
                        />
                    )
                }}
            />

        </Navigator>
    );
};
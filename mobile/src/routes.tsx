import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen component={OrphanagesMap} name="OrphanagesMap"/>
                <Screen component={OrphanageDetails} name="OrphanageDetails"/>
            </Navigator>
        </NavigationContainer>
    )
}
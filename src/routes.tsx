import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
const { Navigator, Screen } = createStackNavigator();

import Header from './components/header'

import OrphanagesMap from './pages/orphanagesMap';
import OrphanageDetails from './pages/orphanageDetails';
import SelectMapPosition from './pages/createOrphanage/selectMapPosition';
import OrphanageData from './pages/createOrphanage/orphanageData';

export default function Routes() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown:false, cardStyle: { backgroundColor: '#f2f3f5' } }} >
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap} 
                />

                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails} 
                    options={{ headerShown: true, header: () => <Header title="Orfanato" showCancel={false} /> }}
                />

                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition} 
                    options={{ headerShown: true, header: () => <Header title="Selecione no mapa" /> }} 
                />

                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData} 
                    options={{ headerShown: true, header: () => <Header title="Informe os dados" /> }} 
                />

            </Navigator>
        </NavigationContainer>
    );
}


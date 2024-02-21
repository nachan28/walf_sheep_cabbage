import React, { createContext, useContext, useState, ReactNode, FC } from 'react';
import { DraggableItem } from './components/Boat';
import { Locations } from './App';

type AppState = {
    selectedItem: DraggableItem | null;
    setSelectedItem: React.Dispatch<React.SetStateAction<DraggableItem | null>>
    locations: Locations
    setLocations: React.Dispatch<React.SetStateAction<Locations>>
}

const initialState: AppState = {
    selectedItem: null,
    setSelectedItem: () => { },
    locations: {
        wolf: "right",
        sheep: "right",
        cabbage: "right",
    },
    setLocations: () => { },
}

const AppStateContext = createContext<AppState>(initialState);

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState<DraggableItem | null>(null);
    const [locations, setLocations] = useState<Locations>({
        wolf: "right",
        sheep: "right",
        cabbage: "right",
    })

    const value = {
        selectedItem,
        setSelectedItem,
        locations,
        setLocations,
    };

    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    );
};
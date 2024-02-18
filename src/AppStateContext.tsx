import React, { createContext, useContext, useState, ReactNode, FC } from 'react';
import { DraggableItem } from './components/Boat';

type AppState = {
    selectedItem: DraggableItem | null;
    setSelectedItem: (selectedItem: DraggableItem | null) => void; // 更新関数の型を修正
}

const initialState = {
    selectedItem: null,
    setSelectedItem: () => {}
}

const AppStateContext = createContext<AppState>(initialState);

export const useAppState = () => useContext(AppStateContext);

export const AppStateProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [selectedItem, setSelectedItem] = useState<DraggableItem | null>(null);

    const value = {
        selectedItem,
        setSelectedItem,
    };

    return (
        <AppStateContext.Provider value={value}>
            {children}
        </AppStateContext.Provider>
    );
};
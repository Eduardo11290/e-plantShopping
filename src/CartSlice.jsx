import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // 1. Adăugare produs (Verifică duplicatele pentru butonul gri)
    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (!existingItem) {
        // Adăugăm produsul cu cantitate inițială 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // 2. Ștergere produs din coș
    removeItem: (state, action) => {
      // Filtrăm lista să excludem produsul cu ID-ul primit
      // Suportă și dacă primește întreg obiectul sau doar ID-ul
      const idToRemove = action.payload.id || action.payload;
      state.items = state.items.filter(item => item.id !== idToRemove);
    },

    // 3. Actualizare cantitate (Asta lipsea și cauza eroarea!)
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// EXPORTĂM TOATE CELE 3 ACȚIUNI
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
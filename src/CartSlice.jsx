// src/CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    // items: array of { name, image, cost (string, e.g. "$15"), quantity }
    items: [],
  },
  reducers: {
    // payload can be either the product object { name, image, cost } or similar
    addItem: (state, action) => {
      const payload = action.payload || {};
      const name = payload.name;
      if (!name) return;
      const image = payload.image || '';
      const cost = payload.cost !== undefined ? String(payload.cost) : '$0';

      const existing = state.items.find((it) => it.name === name);
      if (existing) {
        existing.quantity = (existing.quantity || 0) + 1;
      } else {
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },

    // remove by name or payload={name: "..."} or payload is string
    removeItem: (state, action) => {
      const payload = action.payload;
      const name = typeof payload === 'string' ? payload : payload?.name;
      if (!name) return;
      state.items = state.items.filter((it) => it.name !== name);
    },

    // updateQuantity { name, quantity }
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload || {};
      if (!name) return;
      const q = Number(quantity) || 0;
      const item = state.items.find((it) => it.name === name);
      if (!item) return;
      if (q <= 0) {
        state.items = state.items.filter((it) => it.name !== name);
      } else {
        item.quantity = q;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

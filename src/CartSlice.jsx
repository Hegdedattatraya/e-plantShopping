import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Reducer to add an item to the cart
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        // If the item already exists in the cart, increment its quantity
        existingItem.quantity += 1;
      } else {
        // If the item is new, add it to the cart with an initial quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Reducer to remove an item from the cart
    removeItem: (state, action) => {
      // Filter out the item with the matching name
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },

    // Reducer to update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload; // Destructure the name and new quantity
      const item = state.items.find(item => item.name === name);
      if (item) {
        // Update the item's quantity if it exists
        item.quantity = quantity;
      }
    },
  },
});

// Export the action creators for usage in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer as the default export for integration in the Redux store
export default CartSlice.reducer;
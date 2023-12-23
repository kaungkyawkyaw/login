import { createSlice } from '@reduxjs/toolkit'
  const storeItems=JSON.parse(localStorage.getItem("userproduct"))
  console.log(storeItems,"localstorage")
const initialState = {
    itemlays:[],
    products:storeItems?storeItems:[],
    search:"",
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    itemmyar:(state,{payload})=>{
      state.itemlays=payload
    },
    addtocart: (state,{payload}) => {
      const isExisted=state.products.find((item)=>item._id===payload._id)
          // console.log(isExisted)
          if (isExisted) {
            return state;
          }else{
            state.products=[...state.products,{...payload,qty:1}];
          }
      
        localStorage.setItem("userproduct",JSON.stringify(state.products))
    },
    setSearch:(state,{payload})=>{
      state.search=payload
    },
    removecart:(state,{payload})=>{
      state.products=state.products.filter((item)=>item._id!==payload._id)
      localStorage.setItem("userproduct",JSON.stringify(state.products))
    },
    increase:(state,{payload})=>{
      state.products?.map((product)=>{
        if (product._id === payload._id) {
          return {...product,qty:product.qty+=1}
        }else{
          return product;
        }
      })
    },
    decrease:(state,{payload})=>{
      state.products?.map((product)=>{
        if (product._id === payload._id && product.qty>1) {
          return {...product,qty:product.qty-=1}
        }else{
          return product;
        }
      })
    }

   

  },
})

export const { itemmyar,addtocart,setSearch,removecart,increase,decrease  } = productsSlice.actions
export default productsSlice.reducer
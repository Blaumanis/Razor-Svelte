import { writable, derived } from "svelte/store";
import localProducts from '../localProducts'

const store = writable(flattenProducts([...localProducts]));

// subscribe

// set

// update

// creating a function which can be accessed from any component
// which subscribes to a store
function flattenProducts(data){
    return data.map(item => {
        let image = item.image.url; // getting img url from array
        return {...item, image} // overrides
    })
}

// featured store
export const featuredStore = derived(store, ($featured) => {
    return $featured.filter(item => item.featured === true);
})

export default store;
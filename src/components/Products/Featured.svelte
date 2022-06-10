<script>
    export let title = '';

    import products, {featuredStore} from '../../stores/defaultProducts' //coming from the store
    import Product from './Product.svelte' // single product
    import Loading from '../Loading.svelte' // loading component
    // $:featured = $products.filter(item => item.featured === true) // returns items with featured true


</script>
{#if $featuredStore.length === 0}
    <Loading />
{:else}
<section class="section">
    <h2 class="section-title">{title}</h2>
    <div class="products-center">
        {#each $featuredStore as product (product.id)}
        <!-- passing {product} as prop to single product component -->
            <Product {product} /> 
        {/each}
    </div>
</section>
{/if}

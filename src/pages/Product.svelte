<script>
    export let id;
    // export let location;
    // global store
    
    import {addToCart} from '../stores/cart'
    import products from '../stores/defaultProducts'
    import Loading from '../components/Loading.svelte'
    import {link} from 'svelte-routing'
    import globalStore from '../stores/globalStore'


    $:product = $products.find(item => item.id === parseInt(id)) 

</script>
<svelte:head>
    <title>{!product?"single product":product.title}</title>
</svelte:head>
{#if !product}
    <Loading />
{:else}
<!-- back to products -->
    <section class="single-product">
        <a href="/products" class="btn btn-primary" use:link>back to products</a>
    </section>
<!-- single product -->
    <div class="single-product-container">
        <article class="single-product-image">
            <img src={product.image} alt={product.title}>
        </article>
        <article>
            <h1>{product.title}</h1>
            <h2>${product.price}</h2>
            <p>{product.description}</p>
            <button class="btn btn-primary btn-block" on:click="{() =>{
                addToCart(product)
                globalStore.toggleItem('cart', true);
            }}">
                add to cart
            </button>
        </article>
    </div>
{/if}

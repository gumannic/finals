<script>
    import MovieCard from '$lib/MovieCard.svelte';

    export let data;
    let movies = data.movies;
  </script>
  
<style>
  :global(body) {
    background-color: #000000;
    margin: 0;
    color: #ffffff;
    font-family: sans-serif;
  }
</style>
<a href="/movies/create">
  <button>New Movie</button>
</a>

  <div class="container">
    <div class="row">
      {#each movies as movie}
        <div class="col-md-4 mb-4">
          <MovieCard {movie} />
        </div>
      {/each}
    </div>
  </div>
  
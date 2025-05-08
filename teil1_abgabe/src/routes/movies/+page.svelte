<script>
    import MovieCard from '$lib/MovieCard.svelte';
    import movies from '$lib/movies.js';
  </script>
  
  <div class="container">
    <div class="row">
      {#each movies as movie}
        <div class="col-md-4 mb-4">
          <MovieCard {movie} />
        </div>
      {/each}
    </div>
  </div>
  
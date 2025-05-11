<script>
  let { data } = $props();
  const movie = data.movie;
</script>

<style>
  :global(body) {
    background-color: #000000;
    margin: 0;
    color: #ffffff;
    font-family: sans-serif;
  }

  .container {
    max-width: 600px;
    margin: 2rem auto;
    text-align: center;
    font-family: sans-serif;
  }

  img {
    margin-top: 1rem;
    max-width: 100%;
    border-radius: 8px;
    border-color: #ffffff;
  }
</style>



<div class="container">
  <a href="/movies"> Back</a>

  <h1>{movie.title}</h1>
  <p><strong>Jahr:</strong> {movie.year}</p>
  <p><strong>Dauer:</strong> {movie.duration}</p>
  <p><strong>Cast: </strong> {movie.actors}</p>
  <img src={movie.poster} alt={`Cover von ${movie.title}`} />
</div>

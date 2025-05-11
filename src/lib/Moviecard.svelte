<script>
    export let movie;
  </script>
  
  <div class="card h-100">
    <img src={movie.poster} class="card-img-top" alt={movie.title} />
    <div class="card-body">
      <a href={`/movies/${movie._id}`} class="card-title">{movie.title}</a>
      <p class="card-text">
        Erscheinungsjahr: {movie.year}<br />
        Dauer: {movie.duration}
      </p>
    </div>
  </div>
  
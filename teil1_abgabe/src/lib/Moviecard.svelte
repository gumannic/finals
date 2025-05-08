<script>
    export let movie;
  </script>
  
  <div class="card h-100">
    <img src={movie.poster} class="card-img-top" alt={movie.title} />
    <div class="card-body">
      <h5 class="card-title">{movie.title}</h5>
      <p class="card-text">
        Erscheinungsjahr: {movie.year}<br />
        Dauer: {movie.length}
      </p>
    </div>
  </div>
  
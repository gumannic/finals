<script>
  export let form;
</script>

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Title</label>
    <input name="title" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Year</label>
    <input name="year" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Duration</label>
    <input name="duration" class="form-control" type="text" />
  </div>
  <button type="submit" class="btn btn-primary">Add Movie</button>
</form>

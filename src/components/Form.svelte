<script>
  import autoAnimate from '@formkit/auto-animate';
  let eventType = '';
</script>

<section class="form">
  <div class="form__wrapper">
    <ul use:autoAnimate>
      <li>Add a new</li>
      {#if eventType}
        <li
          class:blue={eventType === 'Birthday'}
          class:red={eventType === 'Relationship'}
          class:green={eventType === 'Important'}
        >
          &nbsp;{eventType}
        </li>
      {/if}
      <li>&nbsp;event</li>
    </ul>

    <div class="types">
      <div class="type">
        <input
          on:change={() => (eventType = 'Birthday')}
          class="radio"
          type="radio"
          name="type"
          id="birthday"
          class:blue={eventType === 'Birthday'}
        />
        <label for="birthday">Birthday</label>
      </div>
      <div class="type">
        <input
          on:change={() => (eventType = 'Relationship')}
          class="radio"
          type="radio"
          name="type"
          id="relationship"
          class:red={eventType === 'Relationship'}
        />
        <label for="relationship">Relationship</label>
      </div>
      <div class="type">
        <input
          on:change={() => (eventType = 'Important')}
          class="radio"
          type="radio"
          name="type"
          id="important"
          class:green={eventType === 'Important'}
        />
        <label for="important">Important</label>
      </div>
    </div>
  </div>
</section>

<style>
  .form__wrapper {
    padding: 32px;
    background-color: #fff;
    border-radius: 16px;
    border: 2px solid var(--g3);
  }
  ul {
    display: flex;
    font-size: 1.125rem;
    font-weight: bold;
    color: var(--g6);
  }
  .types {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    margin-top: 24px;
  }
  .type {
    font-size: 0.875rem;
    color: var(--g5);
    font-weight: bold;
    display: flex;
    gap: 6px;
  }
  .blue {
    color: var(--birthday);
  }
  .red {
    color: var(--relationship);
  }
  .green {
    color: var(--important);
  }
</style>

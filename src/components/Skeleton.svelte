<div class="skeleton">
  {#each Array(9) as _}
  <div class="skeleton__item">
    <div class="skeleton__circle"></div>
    <div class="skeleton__rect"></div>
    <div class="skeleton__badge"></div>
  </div>
  {/each} 
</div>

<style>
  .skeleton {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .skeleton__item {
    min-height: 68px;
    background-color: transparent;
    border: 2px solid rgba(226, 232, 240, 1);
    border-radius: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    animation: animate 500ms infinite alternate;
  }
  .skeleton__circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--g3);
    margin-left: 20px;
    flex-shrink: 0;
    animation: animate 500ms 100ms infinite alternate;
  }
  .skeleton__rect {
    width: 100%;
    height: 24px;
    background-color: var(--g3);
    border-radius: 16px;
    animation: animate 500ms 200ms infinite alternate;
  }
  .skeleton__badge {
    width: 64px;
    height: 24px;
    border-radius: 16px;
    margin-right: 24px;
    background-color: var(--g3);
    animation: animate 500ms 300ms infinite alternate;
  }
  @keyframes animate {
    from {
      opacity: .5;
      border-color: rgba(226, 232, 240, .5);
    }
    to {
      opacity: 1;
      border-color:rgba(226, 232, 240, 1);
    }
  }
</style>
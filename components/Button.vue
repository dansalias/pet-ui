<template>
  <a class="button">
    <slot></slot> 
  </a>
</template>

<script>
  export default {
    name: 'Button',
  }
</script>

<style lang="scss">
  @import '../styles/lib/manifest';

  @mixin swapColours($backgroundColour, $textColour) {
    background: $backgroundColour;
    border-color: $backgroundColour;
    color: $textColour;
    &:hover {
      background: $textColour;
      color: $backgroundColour;
    }
  }

  .button {
    display: inline-block;
    border: 2px solid; 
    height: 24px;
    line-height: 24px;
    padding: 12px;
    border-radius: 3px;
    @include swapColours($brand-primary, $white);
    &.secondary {
      @include swapColours($brand-secondary, $white);
    }
  }
</style>

<story name="Buttons">
  <div>
    <Button>Action Button</Button>
    <Button class="secondary">Secondary Button</Button>
  </div>
</story>

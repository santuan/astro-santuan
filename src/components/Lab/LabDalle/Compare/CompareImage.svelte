<script lang="ts">
  import { CompareImage } from "svelte-compare-image";
  // import CompareImage from "svelte-compare-image/CompareImage.svelte";
</script>

<CompareImage
  imageLeftAlt="left"
  imageRightSrc="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654057962/santuan/DALL_E_2022-05-29_10.31.57_zplkhy.jpg"
  imageLeftSrc="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654058047/santuan/DALL_E_2022-05-29_10.34.15_alvgso.jpg"
  imageRightAlt="right"
  --handle-size="2.5rem"
  --slider-color="#ffffff"
  --slider-width="0.125rem"
/>

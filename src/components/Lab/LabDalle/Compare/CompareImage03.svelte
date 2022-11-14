<script lang="ts">
  import { CompareImage } from "svelte-compare-image";
  // import CompareImage from "svelte-compare-image/CompareImage.svelte";
</script>

<CompareImage
  imageLeftAlt="left"
  imageRightSrc="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654057970/santuan/DALL_E_2022-05-29_10.31.50_boam6y.jpg"
  imageLeftSrc="https://res.cloudinary.com/srcouto/image/upload/c_scale,h_650,q_auto:eco/v1654058032/santuan/DALL_E_2022-05-29_10.33.57_jadsvm.jpg"
  imageRightAlt="right"
  --handle-size="2.5rem"
  --slider-color="#ffffff"
  --slider-width="0.125rem"
/>

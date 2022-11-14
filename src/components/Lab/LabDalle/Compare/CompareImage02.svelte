<script lang="ts">
  import { CompareImage } from "svelte-compare-image";
  // import CompareImage from "svelte-compare-image/CompareImage.svelte";
</script>

<CompareImage
  imageLeftAlt="left"
  imageRightSrc="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_650/v1654018509/santuan/DALL_E_2022-05-29_10.31.54_rgditm.jpg"
  imageLeftSrc="https://res.cloudinary.com/srcouto/image/upload/c_scale,q_auto:eco,w_650/v1654018485/santuan/DALL_E_2022-05-29_10.34.24_dnxu0u.jpg"
  imageRightAlt="right"
  --handle-size="2.5rem"
  --slider-color="#ffffff"
  --slider-width="0.125rem"
/>

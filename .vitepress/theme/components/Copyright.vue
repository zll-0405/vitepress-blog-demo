<template>
    <div class="site-footer">
         <p>Copyright &copy; 2024-present
          <a class="vitepress" target="_blank" href='https://ibody.icu/'> ibody.icu</a>
        </p>
    </div>
</template>
<script lang="ts" setup>
import { useData } from 'vitepress'

const { site, theme } = useData()
const website = theme.value.website
const webTitle = site.value.title
</script>

<style>
.site-footer {
    color: #888;
    text-align: center;
    font-size: 0.75rem;
    width: 100%;
    padding: 15px 0;
    overflow: auto;
}
.vitepress {
    color: var(--vp-c-text-1);
    font-weight: 700;
}
</style>

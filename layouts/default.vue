<template>
    <Header />
    <main class="container">
        <NuxtPage />
    </main>
</template>

<script>
import Header from "/components/layout/Header";
export default {
    name: "default-layout",
    components: { Header },
};
</script>

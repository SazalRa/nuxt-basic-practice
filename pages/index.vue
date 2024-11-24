<script setup>
    //const { sayHello } = useUtils();
    //sayHello();
    console.log(useNuxtApp());
    const { $sayHello } = useNuxtApp()
    $sayHello("Need a job right now!")
</script>
<template>
    <Alert />
    <Header />

    <div>
        <h1>Hello Nuxt</h1>
        <IconsArrow /> <IconsChartpie /> <IconsArrow /> <IconsChartpie /> <IconsArrow />
        <img src="/funny.jpg" alt="Discover Nuxt 3" />

    </div>
    
</template>
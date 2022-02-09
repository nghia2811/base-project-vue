<template>
    <div>
        <Header></Header>
        <ClientOnBoarding></ClientOnBoarding>        
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import Header from '@/Module/Global/components/header/Header.vue';
    import ClientOnBoarding from '@/Module/Global/components/wizard2/ClientOnBoarding.vue';    

    @Component({
        components:{
            Header,
            ClientOnBoarding
        }
    })
    export default class home extends Vue {
        
    }
</script>
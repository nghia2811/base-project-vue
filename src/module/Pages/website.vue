<template>
    <div class="full-template-4">
        <Header :logoHeader="logoImage"></Header>
        <websiteHeroBanner :bannerImages='backgroundBanner'></websiteHeroBanner>
        <bannerSearchWrapper :selectedProduct='clientProduct'></bannerSearchWrapper>
        <topPackages></topPackages> 
        <Footer></Footer>
    </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'vue-property-decorator';
    import Footer from "@/Module/Global/components/website/footer/footer.vue";
    import topPackages from "@/Module/Global/components/website/topPackages.vue";
    import websiteHeroBanner from "@/Module/Global/components/website/websiteHeroBanner.vue";
    import Header from "@/Module/Global/components/website/header/header.vue";
    import bannerSearchWrapper from '@/Module/Global/components/website/widgetSearch/bannerSearchWrapper.vue';
    @Component({
        components:{
            Footer,
            topPackages,
            websiteHeroBanner,
            Header,
            bannerSearchWrapper
        }
    })
    export default class website extends Vue {
        @Prop() logoImage:any;
        @Prop() backgroundBanner:any;
        @Prop() clientProduct:any;
        // currentTab:any='';
        // getWidgetClickedLink(value){
        //     this.currentTab = value;    
        // }         
    }
</script>
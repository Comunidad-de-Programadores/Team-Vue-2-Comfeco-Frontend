<template>
    <div class="swiper-container auto-swiper-container justify-center">
        <div class="swiper-wrapper">
            <template v-for="item in items" >
                <div class="swiper-slide" :key="item.id">
                    <article class="overflow-hidden rounded-lg shadow-lg my-10">
                        <a href="#">
                            <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
                        </a>

                        <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                            <h1 class="text-lg">
                                <a class="no-underline hover:underline text-black" href="#">
                                    Article Title
                                </a>
                            </h1>
                            <p class="text-grey-darker text-sm">
                                14/4/19
                            </p>
                        </header>

                        <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                            <a class="flex flex-di items-center no-underline hover:underline text-black" href="#">
                                <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
                                <p class="ml-2 text-sm">
                                    Author Name
                                </p>
                            </a>
                            <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                                <span class="hidden">Like</span>
                                <i class="fa fa-heart"></i>
                            </a>
                        </footer>

                    </article>
                </div>
            </template>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper, {Autoplay, Pagination} from 'swiper'
Swiper.use([Autoplay, Pagination]);
import "swiper/swiper-bundle.css"
import commonSwiperConfig from "@/utils/CommonSwiperConfig"
export default {
    name: "AutoScrollSlider",
    props: {
        defaultItems: {
            type: Object,
            required: false,
            default: () => {}
        }
    },
    data() {
        return {
            items: [
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
                '',
            ],
        }
    },
    mounted() {
        new Swiper('.auto-swiper-container', {
            ...commonSwiperConfig,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            autoplay: {
                delay: 3000,
            },
        });
    }
};
</script>

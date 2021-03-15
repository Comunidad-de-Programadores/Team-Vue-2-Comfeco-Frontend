<template lang="pug">
   .swiper-container.auto-swiper-container
    .swiper-wrapper
      template(v-for='item in mentors')
        .swiper-slide(:key='item.id')
          article.overflow-hidden.rounded-lg.shadow-lg.my-10.max-h-48
            a(href='#')
              img.block.h-100.w-full(alt='Placeholder' :src='`${item.image_url}`')
            header.flex.flex-col.items-center.justify-center.leading-tight.px-2.-mt-5.bg-white(class='md:p-4')
              a.flex.flex-di.items-center.no-underline.text-black(class='hover:underline' href='#')
                img.inline-block.h-6.w-6.rounded-full.ring-2.ring-comfeco(alt='Placeholder' :src='`${item.master_on_image}`')
              a.flex.flex-di.items-center.no-underline.text-black(class='hover:underline' href='#')
                p.ml-2.text-sm
                  | {{item.name}}
    // Add Pagination
    .swiper-pagination
</template>

<script>
import Swiper, {Autoplay, Pagination} from 'swiper'
Swiper.use([Autoplay, Pagination]);
import "swiper/swiper-bundle.css"
import commonSwiperConfig from "@/utils/CommonSwiperConfig"
import mentorService from '../../services/mentorService'

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
            mentorService: new mentorService(),
            mentors: [],
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
    created() {
        this.getMentors();
    },
    methods: {
          getMentors: async function() {
            const data = await this.mentorService.get();
            this.mentors = data.records;
        }
    },
    updated() {
        new Swiper('.auto-swiper-container', {
            ...commonSwiperConfig,
            observer: true,
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

<template>
    <div>
        <h1 class="mb-3 text-90 font-normal text-2xl w-100">Nova Settings</h1>
        <div class="flex items-start -mx-3">
            <div v-for="(section, index) in sections"
            :key="index" class="flex-1 p-3">
                <card class="p-3 hover:bg-30 cursor-pointer">
                    <a class="no-underline text-decoration-none" href="#" @click.prevent="openSection(section)">
                        <h2 class="mb-3 text-90 font-normal text-2xl">{{section.name}}</h2>
                        <p class="text-70">{{section.description}}</p>
                    </a>
                </card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                sections: []
            }
        },
        mounted() {
            Nova.request().get('/nova-vendor/nova-settings/sections')
                .then(response => {
                    this.sections = response.data
                }).catch(error => this.$toasted.show(error, {type: 'error'}))
        },
        methods: {
            openSection(section) {
                this.$router.push({name: 'nova-settings-section', params: {'slug': section.slug, 'section': section}});
            }
        }
    }
</script>

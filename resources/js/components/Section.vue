<template>
    <div v-if="section !== null">
        <h1 class="mb-3 text-90 font-normal text-2xl w-100">Nova Settings - {{section.name}}</h1>
        <p class="text-70 mb-4">{{section.description}}</p>

        <card class="mb-6 pt-3 pb-6 px-6">
            <div class="flex border-b border-40" v-for="field in section.fields">
                <div class="w-1/4 py-4">
                    <h4 class="font-normal text-80 pb-3">{{field.name}}</h4>
                    <p class="text-sm text-70">{{field.description}}</p>
                </div>
                <div class="w-2/4 py-4"><p class="text-90">{{field.value ? field.value : 'not set'}}</p></div>
                <div class="ml-auto p-4">
                    <span>
                                <a @click="editField(field)" class="cursor-pointer text-70 hover:text-primary mr-3"
                                   dusk="2-edit-button"
                                   title="Edit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                         aria-labelledby="edit" role="presentation" class="fill-current"><path
                                        d="M4.3 10.3l10-10a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-10 10a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 .3-.7zM6 14h2.59l9-9L15 2.41l-9 9V14zm10-2a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6a1 1 0 1 1 0 2H2v14h14v-6z"></path></svg>
                                </a>
                            </span>
                </div>
            </div>
        </card>
        <EditField v-if="!modalClose" :field="selectedField" v-on:close="closeModal" v-on:updated="refresh"></EditField>
    </div>
</template>

<script>
    import EditField from './EditField';

    export default {
        components: {
            EditField
        },
        props: ['slug'],
        data() {
            return {
                modalClose: true,
                selectedField: null,
                section: null,
            }
        },
        mounted() {
            Nova.request().get('/nova-vendor/nova-settings/sections/' + this.slug)
                .then(response => {
                    this.section = response.data
                }).catch(error => this.$toasted.show(error, {type: 'error'}))
        },
        methods: {
            editField(field) {
                this.selectedField = field;
                this.modalClose = false;
            },
            closeModal(){
                this.modalClose = true;
            },
            refresh(){
                this.closeModal();
                this.$router.push({name: 'nova-settings-section', params: {'slug': this.section.slug, 'section': this.section}});
            }
        }
    }
</script>

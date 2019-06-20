<template>
    <modal @modal-close="handleClose">
        <card class="pt-6 bg-white rounded-lg shadow-lg overflow-hidden">
            <form @submit.prevent="saveField">
                <div class="p-8">
                    <h2 class="mb-3 text-90 font-normal text-2xl">Edit {{field.name}}</h2>
                    <div v-if="field.type === 'text'">
                        <input class="w-full form-control form-input form-input-bordered mb-2" type="text"
                               v-model="value">
                    </div>
                    <div v-if="field.type === 'time'">
                        <select class="w-full form-control form-input form-input-bordered mb-2" v-model="value">
                            <option value="01:00:00">01:00</option>
                            <option value="02:00:00">02:00</option>
                            <option value="03:00:00">03:00</option>
                            <option value="04:00:00">04:00</option>
                            <option value="05:00:00">05:00</option>
                            <option value="06:00:00">06:00</option>
                            <option value="07:00:00">07:00</option>
                            <option value="08:00:00">08:00</option>
                            <option value="09:00:00">09:00</option>
                            <option value="10:00:00">10:00</option>
                            <option value="11:00:00">11:00</option>
                            <option value="12:00:00">12:00</option>
                            <option value="13:00:00">13:00</option>
                            <option value="14:00:00">14:00</option>
                            <option value="15:00:00">15:00</option>
                            <option value="16:00:00">16:00</option>
                            <option value="17:00:00">17:00</option>
                            <option value="18:00:00">18:00</option>
                            <option value="19:00:00">19:00</option>
                            <option value="20:00:00">20:00</option>
                            <option value="21:00:00">21:00</option>
                            <option value="22:00:00">22:00</option>
                            <option value="23:00:00">23:00</option>
                            <option value="24:00:00">24:00</option>
                        </select>
                    </div>
                    <p class="text-80 leading-normal">{{ field.description }}</p>
                </div>
                <div class="bg-30 px-8 py-3 flex">
                    <div class="ml-auto">
                        <button type="button" data-testid="cancel-button" dusk="cancel-delete-button"
                                @click.prevent="handleClose" class="btn text-80 font-normal h-9 px-3 mr-3 btn-link">
                            {{__('Cancel')}}
                        </button>
                        <button id="confirm-button" ref="confirmButton" data-testid="confirm-button" type="submit"
                                class="btn btn-default btn-primary">{{__('Save')}}
                        </button>
                    </div>
                </div>
            </form>
        </card>
    </modal>
</template>

<script>
    export default {
        props: ['field'],
        data() {
            return {
                value: this.field.value
            }
        },
        methods: {
            handleClose() {
                this.$emit('close')
            },
            saveField() {
                let field = this.field;
                field.value = this.value;
                Nova.request()
                    .put('/nova-vendor/nova-settings/fields/' + this.field.slug, field)
                    .then(response => {
                        this.$toasted.show('Success', {type: 'success'});
                        this.$emit('updated')
                    })
                    .catch(error => this.$toasted.show(error, {type: 'error'}));
            }
        },
    }
</script>

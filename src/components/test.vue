<template>
    <section>
        <nav class="navbar">
            <div class = "navbar-menu">
            <div class = "navbar-start">
            <a class="button">prev</a>
            <a class="button">next</a>
            </div>

            <div class = "navbar-end">
            <button class="button is-primary"
                    @click="isComponentModalActive = true">
                Ajouter un evenement
            </button>

            <b-dropdown v-model="isPublic">
                <button class="button is-primary" type="button" slot="trigger">
                    <template v-if="Week">
                        <span>Week</span>
                    </template>
                    <template v-else-if="Day">
                        <span>Day</span>
                    </template>
                    <template v-else>
                        <span>Month</span>
                    </template>
                    <b-icon icon="menu-down"></b-icon>
                </button>

                <b-dropdown-item :value="day">
                    <div class="media">
                        Day
                    </div>
                </b-dropdown-item>
                <b-dropdown-item>
                    <div class="media">
                        Week
                    </div>
                </b-dropdown-item>
                <b-dropdown-item>
                    <div class="media">
                        Month
                    </div>
                </b-dropdown-item>
            </b-dropdown>
            </div>
            </div>
        </nav>
    </section>
</template>

<script>

    export default {
        data() {
            return {
                }
            }
        }
</script>

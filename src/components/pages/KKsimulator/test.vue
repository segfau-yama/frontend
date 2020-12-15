template>
    <div>
        <h1>{{ title }}</h1>
        <p>{{ text }}</p>
    </div>
</template>

<script>
import mysql

export default {
    data(){
        return {
            title: "Header",
            text: "Hello Vue.js!"
        }
    }
}
</script>

<style scoped>

</style>

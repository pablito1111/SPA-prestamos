// aplicacion de VUE para manejar pantallas visibles.
const miAplicacion = Vue.createApp({
    components: {
        'uno': componente1,
        'dos': componente2,
        'tre': componente3,
        'cua': componente4,
        'cin': componente5,
        'piedepagina': componente9
    },
    data() {
        return {
            uno_visible: false,
            dos_visible: false,
            tre_visible: false,
            cua_visible: false,
            cin_visible: false
        }
    },
    mounted() {/*es lo que se muestra al inicio*/
        this.uno_visible = true
    },
    methods: {
        mostrar(x) {/*se llaman con this xq estan definidas en el data*/
            this.uno_visible = (x == 1)? true:false
            this.dos_visible = (x == 2)? true:false
            this.tre_visible = (x == 3)? true:false
            this.cua_visible = (x == 4)? true:false
            this.cin_visible = (x == 5)? true:false
        }
    }
}).mount("#app")
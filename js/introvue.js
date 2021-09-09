const Contador = {
    data() {
        return {
            contador: 0,
            mensaje: "Ninguno"
        }
    },
    mounted() {
        setInterval(() => {
            this.contador++
            if (this.contador % 10 === 0) {
                this.mensaje = "Ya voy en el grupo de los " + this.contador + "'s"
            }
        }, 1000);
    }
}

Vue.createApp(Contador).mount("#app")

const Evento = {
    data() {
        return {
            mensaje: "Hola"
        }
    },
    methods: {
        invertirMensaje() {
            this.mensaje = this.mensaje.split("").reverse().join("")
        }
    }
}
Vue.createApp(Evento).mount("#evento")

const Enlace = {
    data() {
        return {
            mensaje: "Hola desde Vue !",
            correo: "cdiaz@email.com"
        }
    }
}
Vue.createApp(Enlace).mount("#enlace")

const Condicion = {
    data() {
        return {
            esVisible: true
        }
    },
    methods: {
        cambiarValor() {
            this.esVisible = !this.esVisible
        }
    }
}
Vue.createApp(Condicion).mount("#condiciones")

const ListaElementos = {
    data() {
        return {
            id: 1,
            elemento: "",
            elementos: []
        }
    },
    methods: {
        agregar() {
            this.elementos.push({ id: this.id++, texto: this.elemento })
            this.elemento = ""
        }
    }
}
Vue.createApp(ListaElementos).mount("#lista")
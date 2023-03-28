const { createApp } = Vue;

createApp({
    data() {
        return {
            titolo: 'hello Vue!',
            color: 'text-danger',
            image: 'https://th.bing.com/th/id/R.60019781581c50361c7e330b6b365f6e?rik=59FIQfJu82yj1w&riu=http%3a%2f%2fwww.tribuanimale.org%2fwordpress%2fwp-content%2fuploads%2f2015%2f02%2fgatto.jpg&ehk=xLizcjx9hJyeVQvemFXsmHD2eVHTJeXHR%2bDLoaW5a2M%3d&risl=&pid=ImgRaw&r=0',
        }
    },
}).mount('#app');  
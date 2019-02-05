var loadFile = function(event) {
  var output = document.getElementById('output');
  output.src = URL.createObjectURL(event.target.files[0]);
};

var app = new Vue({
  el: '#app',
  data: {
    selected: false,
    selected_profil:'',
    profils: [
      {nom: 'Dupont',
        prenom: 'Robin',
        promotion: 'ICM2014',
        secteur: 'Conseil en Data',
        poste: 'Thèse cifre Netatmo',
        temoignage: 'Suite à une expérience peu fructueuse dans le monde du conseil en data' +
                    'sciences j ai décidé de réinvestir sur mon éducation en commençant une thèse cifre' +
                    'chez Netatmo',
        contact: 'robin.dupont@gmail.com'},
        {nom: 'Ben Messaoud',
          prenom: 'Alexandre',
          promotion: 'ICM2015',
          secteur: 'Conseil en Data',
          poste: 'Junior Data Scientist chez SIA Partners',
          temoignage: 'Au sein de SIA Partners j ai pu développer mes compétences en Data Sciences' +
                      '. De plus il a été important de s adapter au besoin client notamment par le développement' +
                      ' de techniques de webscrapping.',
          contact: 'a.benmessaoud@etu.emse.fr'},
          {nom: 'Zemmouri',
            prenom: 'Taha',
            promotion: 'ICM2013',
            secteur: 'Conseil en Data',
            poste: 'CEO de DataGenius',
            temoignage: 'A la suite d un stage de fin d étude chez géolid, ' +
                        ' j ai lancé mon entreprise sous le mentorat' +
                        ' de géolid et du réseau entreprendre',
            contact: 'taha@datagenius.fr'},
    ]
  },
  methods: {
    load_model: function () {
      this.selected_profil = this.profils[0];
      this.selected = true;
    },
    load_profil: function (profil) {
      this.selected_profil = profil;
    }
  },
  mounted: function (){
    this.load_model();
  }
})

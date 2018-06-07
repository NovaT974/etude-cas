  
$(function () {
    
    var listComp = ['debutant', 'intermediaire', 'expert'];
    function trierList (listComp) {
        listComp.sort(function (a, b) {
            return b.value - a.value;
          });
    }
    $(document).ready(function() {
        $.ajax({
        type: 'GET',
        url: 'http://localhost:4002/competences',
        success: function (competences) {
             trierList (listComp);
            // affiche la liste des competences
            for (var i = 0; i < competences.length; i++) {
                
                var niveau = '<i class="fas fa-star"></i>';
                
                // ajoute les étoiles
                if(competences[i].skills.level === "debutant"){
                    niveau = niveau + niveau;
                    
                }
                else if (competences[i].skills.level === "intermediaire"){
                    niveau = niveau + niveau + niveau;

                }
                else {
                    niveau = niveau + niveau + niveau + niveau;
                  
                }
                $('.liste').append('<li class="list-group-item liste_competences">' + competences[i].skills.name +  '  <span class="etoile">' + niveau + '</span></li>');

            }


        },
    
        error: function (resultat, statut, erreur) {
    
            alert('ERROR 404');
        }
        });
    });

    
});

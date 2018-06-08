  
$(function () {
    
    //var listComp = ['debutant', 'intermediaire', 'expert'];
    function trierList (listComp) {
        listComp.sort(function (a, b) {
            return b.index - a.index;
          });
    }
    $(document).ready(function() {
        $.ajax({
        type: 'GET',
        url: 'http://localhost:4002/competences',
        success: function (competences) {
             trierList (competences);
            // affiche la liste des competences
            for (var i = 0; i < competences.length; i++) {
                var color= "";
               // var niveau = '<i class="fas fa-star'+ color +'"></i>';
               var niveau = '<i class="fas fa-star"></i>';
                
                
                // ajoute les étoiles
                if(competences[i].index === 1){
                    color = "red";
                    niveau = '<i class="fas fa-star ' + color +'"></i>';
                    niveau = niveau ;

                }
                else if (competences[i].index === 2){
                    color = "red";
                    niveau = '<i class="fas fa-star ' + color +'"></i>';
                    niveau = niveau + niveau;
                    
                }
                else if (competences[i].index === 3){
                    color = "green";
                    niveau = '<i class="fas fa-star ' + color +'"></i>';
                    niveau = niveau + niveau + niveau;
                    
                }
                else if (competences[i].index === 4){
                    color = "green";
                    niveau = '<i class="fas fa-star ' + color +'"></i>';
                    niveau = niveau + niveau + niveau + niveau;
                    
                }
                else if (competences[i].index === 5){
                    color = "greendark";
                    niveau = '<i class="fas fa-star ' + color +'"></i>';
                    niveau = niveau + niveau + niveau + niveau + niveau;
                    
                }
                else {
                    color = "greendark";
                    niveau = '<i class="fas fa-star ' + color +'"></i>';
                    niveau = niveau + niveau + niveau + niveau + niveau + niveau;
                    
                }
                $('.liste').append('<li class="list-group-item liste_competences">' + competences[i].skills.name +  '  <span class="">' + niveau + '</span></li>');

            }


        },
    
        error: function (resultat, statut, erreur) {
    
            alert('ERROR 404');
        }
        });
    });

    
});

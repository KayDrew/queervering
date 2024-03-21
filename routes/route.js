export default function services() {

    function homePage(req, res) {

        let categories= [
            {
        image:"cat1.png",
        name:"Drag shows"
               
            },
            {
                image:"cat2.png",
                name:"Conferences"
            },
            {  image:"cat3.png",
             name:"Pride Events"
           
               
            },
            {  image:"cat4.png",
             name:"Fundraising Events"
            },
            {
                image:"cat5.png",
              name:"Themed Parties"
            },
            {
                image:"cat6.png",
                name:"Art Events"
                
            }
        ];
        res.render("index", {
            categories
        });


    }


    function gallery(req,res){
        

        res.render("gallery");
    }

    function events(req,res){

        res.render("events");
    }


    function contact(req,res){

        res.render("contact");
    }

    return {
        homePage,
        gallery,
        events,
        contact
    }
}
export default function services() {

    function homePage(req, res) {

        let categories= [
            {
        image:"cat1.png"
               
            },
            {
                image:"cat2.png",
                name:"cat"
            },
            {  image:"cat3.png",
            name:"cat"
               
            },
            {  image:"cat4.png",
            name:"cat"
            },
            {
                image:"cat5.png",
                name:"cat"
            },
            {
                image:"cat6.png",
                name:"cat"
            }
        ];
        res.render("index", {
            categories
        });


    }


    function gallery(req,res){
        let categories= [
            {
        image:"cat1.png"
               
            },
            {
                image:"cat2.png",
                name:"cat"
            },
            {  image:"cat3.png",
            name:"cat"
               
            },
            {  image:"cat4.png",
            name:"cat"
            },
            {
                image:"cat5.png",
                name:"cat"
            },
            {
                image:"cat6.png",
                name:"cat"
            }
        ];
      

        res.render("gallery",{categories});
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
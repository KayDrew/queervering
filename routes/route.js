export default function services() {

    function homePage(req, res) {

        let featured = [
            {
        
                name: "Rainbow",
                location: "Pretoria",
                fee: "R1054",
                description: "Annual rainbow dance event",
               
            },
            {
                name: "club",
                location: "Pretoria",
                fee: "R1054",
                description: "Annual rainbow dance event",
              
            },
            {
                name: "Rainbow",
                location: "Pretoria",
                fee: "R1054",
                description: "Annual rainbow dance event",
               
            },
            {
                name: "Rainbow",
                location: "Pretoria",
                fee: "R1054",
                description: "Annual rainbow dance event"
            },
        ];
        res.render("index", {
            featured: featured
        });


    }


    return {
        homePage,
    }
}
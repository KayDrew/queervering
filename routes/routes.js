export default function services() {

    function homePage(req, res) {

        let featured = [
            {
                image: "rain.png",
                name: "Rainbow",
                location: "Pretoria",
                fee: "R1054",
                description: "Annual rainbow dance event"
            },
            {
                image: "rain.png",
                name: "Rainbow",
                location: "Pretoria",
                fee: "R1054",
                description: "Annual rainbow dance event"
            },
            {
                image: "rain.png",
                name: "Rainbow",
                location: "Pretoria",
                fee: "R1054",
                description: "Annual rainbow dance event"
            },
            {
                image: "rain.png",
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
export default function services(){

    function homePage(req,res){

        res.render("index");


    }


    return{
        homePage,
    }
}
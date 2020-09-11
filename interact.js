var changetoFrog = function()
{
    d3.select("#frog").attr('src', 'https://static01.nyt.com/images/2019/04/02/science/28SCI-ZIMMER1/28SCI-ZIMMER1-superJumbo.jpg')
}

var changebackPond = function()
{
    d3.select("#frog").attr('src', 'https://www.johnsonshg.com/wp-content/uploads/2015/07/Deckers-summer-pond-maintenance-page.jpg')
}

var frog_pond = d3.select("#frog");
frog_pond.on('mouseenter', changetoFrog)
frog_pond.on('mouseleave', changebackPond)

var changetoDuck = function()
{
    
    d3.select("#duck").attr("src", "https://www.pngonly.com/wp-content/uploads/2017/06/Duck-Green-Head-PNG.png")
    
}

var changebackPond2 = function()
{
    d3.select("#duck").attr("src" , "https://healthyponds.com/wp-content/uploads/2019/08/clean-pond-with-water-treatment-1080x675.jpeg")
    
}

var duck_pond = d3.select("#duck");
duck_pond.on("mouseenter", changetoDuck)
duck_pond.on("mouseleave", changebackPond2)

var changetoBison = function()
{
    d3.select("#flyingbison").attr('src', 'https://i.pinimg.com/originals/73/ce/c9/73cec96b010fc983c238a3cee4d0dbe0.jpg')
}

var changebackPond3 = function()
{
    d3.select('#flyingbison').attr('src', 'https://healthyponds.com/wp-content/uploads/2018/02/pond-after.jpg')
}

var bison_pond = d3.select("#flyingbison");
bison_pond.on("mouseenter", changetoBison)
bison_pond.on("mouseleave", changebackPond3)


const  movies=require("../movieschema/movieschema")
 async function match(req,res){
    const fetchdata=await movies.aggregate([{$match:{languages:"English"}},{$limit:3}])
res.json({
    msg:"data fetched succesfully",
    data:fetchdata
})
 }
 async function group(req,res) {
    const fetchdata = await movies.aggregate([{$match:{directors:"George Loane Tucker"}},{$group:{_id:"George Loane Tucker",totalAward:{$sum:"$awards.nominations"}}}])

    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function project(req,res) {
    const fetchdata = await movies.aggregate([{$match:{genres:"Drama"}},{$project:{plot:1}}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function sort(req,res) {
    const fetchdata = await movies.aggregate([{$match:{directors:"George Loane Tucker"}},{$sort:{ year:-1}},{$project:{plot:1,year:1}}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function limit(req,res) {
    const fetchdata = await movies.aggregate([{$match:{genres:"Crime"}},{$limit:3},{$project:{plot:1}}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function count(req,res) {
    const fetchdata = await movies.aggregate({$count:"Total"})
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function unwind(req,res) {
    const fetchdata = await movies.aggregate([{$match:{directors:"Louis Feuillade"}},{$unwind:"$languages"},{$project:{languages:true,plot:1}},{$limit:2}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function firstEntry(req,res) {
    const fetchdata = await movies.aggregate([{$group:{_id:"plot",firstentry:{$first:"$plot"}}}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function lastEntry(req,res) {
    const fetchdata = await movies.aggregate([{$group:{_id:"plot",lastentry:{$last:"$plot"}}}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function expression(req,res) {
    const fetchdata = await movies.aggregate([{$match:{$expr:{$eq:["$awards","$directors"]}}},{$limit:3}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function average(req,res) {
    const fetchdata = await movies.aggregate([{$match:{directors:"Buster Keaton"}},{$group:{_id:"AverageRating",averageRating:{$avg:"$tomatoes.viewer.rating"}}}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function maxRating(req,res) {
    const fetchdata = await movies.aggregate([{$match:{directors:"Buster Keaton"}},{$group:{_id:"MaxRating",maximumRating:{$max:"$tomatoes.viewer.rating"}}}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function minRating(req,res) {
    const fetchdata = await movies.aggregate([{$match:{directors:"Buster Keaton"}},{$group:{_id:"MinRating",minimumRating:{$min:"$tomatoes.viewer.rating"}}}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function sample(req,res) {
    const fetchdata = await movies.aggregate([{$sample: {size:5}},{$project:{plot:1}}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}

async function bucket(req,res) {
    const fetchdata = await movies.aggregate([{$bucket:{groupBy: "$tomatoes.viewer.rating",boundaries:[1,2,3,4,5],default:"Others",output:{"Count":{$sum:1},"averageRating":{$avg:"$tomatoes.viewer.rating"}}}}])
    res.json({
        message:"data fetched succesfully",
        Data:fetchdata
    })
    
}


module.exports = {match,group,project,sort,limit,count,unwind,firstEntry,lastEntry,expression,average,maxRating,minRating,sample,bucket}
export default {
    name : "nlog",
    type : "document",
    title : "Blog",
    fields : [{
        name : "title",
        type : "string",
        title : "Title"
    },
    {
        name : "content",
        type : "string",
        title : "Content"
    },
    {
        name:"timestamp",
        title:"Timestamp",
        type : "datetime",

    }
]
}
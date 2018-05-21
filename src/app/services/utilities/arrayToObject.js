export default function(array){
    var object = {}
    array.forEach(function(x){
        object = {
            ...object,
            x
        }
    });
}
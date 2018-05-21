
//object =
// {
//     param : value
// }
export default function(data){
    var string = '';
    for(key in data){
        string = string + key + "=" + data[key] + "&";
    }
    string = string.slice(0, -1);
    return string;

}



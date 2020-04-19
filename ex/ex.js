function countName(str) {
    var name =str.replace(" ", "");
    count = 0;
    for(var i = 0; i < name.length; i++) {
        if (name[i].match(/^[a-zA-Z]/) ){
            count +=1;
        }

    }
    console.log(count);
    console.log(name)
}

countName("jeongim Bae 7 @");


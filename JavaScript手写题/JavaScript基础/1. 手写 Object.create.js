function myCreate(obj){
    function F() {}
    F.prototype = obj
    return new F()
}